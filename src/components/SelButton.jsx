export default function SelButton({icon, onClick, selected, children}) {
  return (
    <button className={`flex flex-1 items-center gap-2 p-4 border-2 rounded-xl transition-colors duration-200
        ${selected ? "bg-[#2A2A2A] border-[#555]" : "bg-[#222] border-[#333] hover:bg-[#2A2A2A] hover:border-[#444]"}`}
        onClick={onClick}>
        <img className={`w-5 h-5 transition-opacity duration-200 ${selected ? "" : "opacity-50"}`}
            src={`${import.meta.env.BASE_URL}${icon}`}
        />
        <span className={`text-sm font-semibold transition-colors duration-200 ${selected ? "text-white" : "text-[#777]"}`}>
            {children}
        </span>
    </button>
  )
}