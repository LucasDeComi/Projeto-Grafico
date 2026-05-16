import { useState, useMemo } from "react";

export default function Graphic({elements, style}) {
  const total = useMemo(() => {
    return elements.reduce((acc, element) => acc + element.parts, 0) // Função que percorre o array e soma a um acumulador a quantidade de partes, que começa em 0
  });
  
  const gradient = useMemo(() => {
    let count = 0;
    return elements.map((element) => {
        const start = count;
        const end = start + (element.parts / total) * 100;
        count = end;
        return `${element.color} ${start}% ${end}%`
    }).join(", ");
  });
  
  return (
    <div className="relative w-40 h-40 rounded-full"
        style={{
        background: `conic-gradient(
            ${gradient}
        )`
        }}>

        {style === "donut" && (<div className="absolute inset-5 bg-white rounded-full" />)}
    </div>
  )
}