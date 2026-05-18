import { useState, useMemo } from "react"
import Graphic from "./components/Graphic";
import GraphicElement from "./components/GraphicElement";
import Subtitle from "./components/Subtitle";
import SelButton from "./components/SelButton";
import Hr from "./components/Hr";
import ListElement from "./components/ListElement";
import Input from "./components/Input";

export default function App() {
  const [elements, setElements] = useState([
    {
      id: 1,
      name: "1",
      parts: 50,
      color: "#3B82F6"
    },
    {
      id: 2,
      name: "2",
      parts: 25,
      color: "#EF4444"
    },
    {
      id: 3,
      name: "3",
      parts: 25,
      color: "#10B981"
    }
  ]);

  const [style, setStyle] = useState("donut");

  const total = useMemo(() => {
    return elements.reduce((acc, element) => acc + element.parts, 0) // Função que percorre o array e soma a um acumulador a quantidade de partes, que começa em 0
  });

  return (
    <>
      <div className="flex w-screen h-screen bg-[#1a1a1a]">
        <main className="flex flex-wrap flex-col gap-4 justify-center items-center h-full w-full">
          <Graphic elements={elements} style={style} total={total} />
          <ul className="flex list-none gap-5">
            {elements && elements.map(element => (
              <GraphicElement element={element} total={total} />
            ))}
          </ul>
        </main>
        <aside className="w-[40%] min-w-85 h-full px-5 py-10 border-l-2 border-l-[#2E2E2E]">
          <Subtitle>TIPO DE GRÁFICO</Subtitle>
          <section className="flex gap-3 mt-3">
            <SelButton icon="donut.svg" onClick={() => setStyle("donut")} selected={style === "donut"}>Donut</SelButton>
            <SelButton icon="pizza.svg" onClick={() => setStyle("pizza")} selected={style === "pizza"}>Pizza</SelButton>
          </section>
          <Hr />
          <Subtitle>ELEMENTOS</Subtitle>
          <ul className="flex flex-col list-none h-50 gap-2.5 mt-3 overflow-y-scroll">
            {elements && elements.map(element => (
              <ListElement element={element} total={total} />
            ))}
          </ul>
          <Hr />
          <Subtitle>ADICIONAR ELEMENTO</Subtitle>
          <section className="flex flex-col gap-3 mt-3">
            <Input type="text" name="Nome" placeholder="Ex: Vendas" />
            <Input type="number" name="%" placeholder="Ex: 30" />
            <Input type="color" name="Cor" />
            <button className="text-center text-sm h-10 bg-[#252525] text-[#ccc] border border-[#3a3a3a] rounded-lg
              transition-colors duration-200 hover:bg-[#2a2a2a] hover:border-[#444] active:bg-[#252525] active:border-[#3a3a3a]">
              <span className="text-lg">+</span> Adicionar
            </button>
          </section>
        </aside>
      </div>
    </>
  )
}