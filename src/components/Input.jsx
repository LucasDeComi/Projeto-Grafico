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
        <span className="text-[#666] text-xs md:text-[16px] font-semibold md:font-normal">{name}</span>
        <input type={type} ref={ref} value={colors[current]}
          value={value} onChange={e => setValue(e.target.value)}
          className={`w-[85%] md:w-[80%] h-8 md:h-10 md:text-[16px] text-xs text-white bg-[#222] border border-[#333]
              rounded-md md:rounded-lg outline-none focus:border-2 focus:border-[#444] placeholder:text-[#444]
              ${type === "color" ? "border-none cursor-pointer" : "md:px-3 px-2"}`}
          placeholder={placeholder}
        />
    </article>
  )
}