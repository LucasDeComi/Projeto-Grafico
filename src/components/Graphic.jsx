import { useMemo } from "react";

export default function Graphic({elements, style, total}) {
  
  const gradient = useMemo(() => {
    let count = 0;
    return elements.map((element) => {
        const start = count;
        const end = start + (element.parts / total) * 100;
        count = end;
        return `${element.color} ${start}% ${end}%`
    }).join(", ");
  }, [elements, total]);
  
  return (
    <div className="relative w-100 h-100 rounded-full"
        style={{
        background: `conic-gradient(
            ${gradient !== "" ? gradient : "#252525 0% 100%"}
        )`
        }}>

        {style === "donut" && (<div className="absolute inset-15 bg-[#1a1a1a] rounded-full" />)}
    </div>
  )
}