import { useState, useMemo, useContext, useRef } from "react";
import { ElementsContext } from "./context/ElementsContext";
import { ColorsContext } from "./context/ColorsContext";
import Graphic from "./components/Graphic";
import GraphicElement from "./components/GraphicElement";
import Subtitle from "./components/Subtitle";
import SelButton from "./components/SelButton";
import Hr from "./components/Hr";
import ListElement from "./components/ListElement";
import Input from "./components/Input";
import Swal from "sweetalert2";

export default function App() {
  const {elements, setElements, addElement} = useContext(ElementsContext);
  const { nextColor } = useContext(ColorsContext);

  const [style, setStyle] = useState("donut");

  const total = useMemo(() => {
    return elements.reduce((acc, element) => acc + element.parts, 0) // Função que percorre o array e soma a um acumulador a quantidade de partes, que começa em 0
  }, [elements]);

  const nameRef = useRef();
  const percentRef= useRef();
  const colorRef = useRef();

  function add() {
    const name = nameRef.current?.value;
    const percent = percentRef.current?.value;
    const color = colorRef.current?.value;
    if(name === "" || percent === "") {
      Swal.fire({
        title: "Preencha todos os campos",
        theme: "dark",
        confirmButtonColor: "#2563EB"
      });
      return;
    }
    addElement(name, parseInt(percent), color);
    nextColor();
  }

  return (
    <>
      <div className="flex flex-col md:flex-row w-screen h-screen bg-[#1a1a1a]">
        <main className="flex md:flex-col md:gap-8 md:px-10 py-10 md:py-0 justify-around md:justify-center items-center h-[50%] md:h-full w-full">
          <Graphic elements={elements} style={style} total={total} />
          <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center max-h-full overflow-y-scroll list-none gap-3 md:gap-5 md:py-5">
            {elements && elements.map(element => (
              <GraphicElement element={element} total={total} />
            ))}
          </ul>
        </main>
        <aside className="md:w-[40%] md:min-w-85 h-[50%] md:h-full overflow-y-scroll px-3 md:px-5 py-5 md:py-10
          md:border-l-2 md:border-l-[#2E2E2E] border-t-2 border-t-[#2E2E2E]">
          <Subtitle>TIPO DE GRÁFICO</Subtitle>
          <section className="flex gap-3 mt-3">
            <SelButton icon="donut.svg" onClick={() => setStyle("donut")} selected={style === "donut"}>Donut</SelButton>
            <SelButton icon="pizza.svg" onClick={() => setStyle("pizza")} selected={style === "pizza"}>Pizza</SelButton>
          </section>
          <Hr />
          <Subtitle>ELEMENTOS</Subtitle>
          <ul className="flex flex-col list-none h-32 md:h-50 gap-2.5 mt-3 overflow-y-scroll">
            {elements && elements.map(element => (
              <ListElement element={element} total={total} />
            ))}
          </ul>
          <Hr />
          <Subtitle>ADICIONAR ELEMENTO</Subtitle>
          <section className="flex flex-col gap-3 mt-3">
            <Input type="text" name="Nome" placeholder="Ex: Vendas" ref={nameRef} />
            <Input type="number" name="%" placeholder="Ex: 30" ref={percentRef} />
            <Input type="color" name="Cor" ref={colorRef} />
            <button onClick={() => add()}
              className="text-center text-xs md:text-sm h-8 md:h-10 bg-[#252525] text-[#ccc] border border-[#3a3a3a] rounded-md md:rounded-lg
              transition-colors duration-200 hover:bg-[#2a2a2a] hover:border-[#444] active:bg-[#252525] active:border-[#3a3a3a]">
              <span className="text-[16px] md:text-lg">+</span> Adicionar
            </button>
          </section>
        </aside>
      </div>
    </>
  )
}