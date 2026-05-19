export default function GraphicElement({element, total}) {
  return (
    <li className="flex items-center gap-2">
        <span 
            className="lg:w-3 lg:h-3 w-2 h-2 rounded-xs"
            style={{background: `${element.color}`}}
        />
        <span className="text-xs lg:text-[16px] text-[#888] max-w-25">{element.name} — {((element.parts / total) * 100).toFixed(2)}%</span>
    </li>
  )
}
