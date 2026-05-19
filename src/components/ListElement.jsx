import { useContext } from "react"
import { ElementsContext } from "../context/ElementsContext"
import Swal from "sweetalert2";

export default function ListElement({element, total}) {
  const { elements, setElements } = useContext(ElementsContext);

  function remove() {
    Swal.fire({
      title: "Tem certeza que deseja remover esta tarefa?",
      text: "Não é possível reverter este processo.",
      theme: "dark",
      showCancelButton: true,
      confirmButtonColor: "#2563EB",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            setElements(elements.filter(e => element.id !== e.id))
        }
    });
  }

  return (
    <li className="flex justify-between items-center px-4 py-3 rounded-xl bg-[#222]">
        <div className="flex items-center gap-2">
            <span
                className="flex w-3 h-3 rounded-full"
                style={{background: `${element.color}`}}
            />
            <h3 className="text-[#ccc] text-sm">{element.name}</h3>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-[#888] text-md">{((element.parts / total) * 100).toFixed(2)}%</span>
            <button onClick={() => remove()}
                className="flex justify-center w-8 h-8 p-1.75 bg-[#2A2A2A] border border-[#3A3A3A] rounded-md
                transition-colors duration-200 hover:bg-[#2F2F2F] hover:border-[#444]">
                <span className="flex h-full w-px bg-[#666] rotate-45" />
                <span className="flex h-full w-px bg-[#666] -translate-x-px rotate-135" />
            </button>
        </div>
    </li>
  )
}