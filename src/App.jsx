import { useState } from "react"
import Graphic from "./components/Graphic";

export default function App() {
  const [elements, setElements] = useState([
    {
      name: "1",
      parts: 2,
      color: "#3B82F6"
    },
    {
      name: "2",
      parts: 1,
      color: "#EF4444"
    },
    {
      name: "3",
      parts: 1,
      color: "#10B981"
    },
  ]);
  const [style, setStyle] = useState("donut")

  return (
    <>
      <Graphic elements={elements} style={style} />
    </>
  )
}