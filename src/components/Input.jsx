export default function Input({type, name, placeholder}) {
  return (
    <article className="flex justify-between items-center">
        <span className="text-[#666]">{name}</span>
        <input type={type} 
            className={`w-[80%] h-10 text-white bg-[#222] border border-[#333] rounded-lg outline-none
                focus:border-2 focus:border-[#444] placeholder:text-[#444]
                ${type === "color" ? "border-none cursor-pointer" : "px-3"}`}
            placeholder={placeholder}
        />
    </article>
  )
}
