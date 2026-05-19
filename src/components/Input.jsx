import { useContext, useState, useEffect } from "react"
import { ColorsContext } from "../context/ColorsContext"
import { color } from "chart.js/helpers";

export default function Input({type, name, placeholder, ref}) {
  const { colors, current } = useContext(ColorsContext);
  const [value, setValue] = useState(type === "color" ? colors[current] : "");
  
  useEffect(() => {
    setValue(type === "color" ? colors[current] : "")
  }, [colors, current])

  return (
    <article className="flex justify-between items-center">
        <span className="text-[#666]">{name}</span>
        <input type={type} ref={ref} value={colors[current]}
          value={value} onChange={e => setValue(e.target.value)}
          className={`w-[80%] h-10 text-white bg-[#222] border border-[#333] rounded-lg outline-none
              focus:border-2 focus:border-[#444] placeholder:text-[#444]
              ${type === "color" ? "border-none cursor-pointer" : "px-3"}`}
          placeholder={placeholder}
        />
    </article>
  )
}