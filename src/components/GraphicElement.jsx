export default function GraphicElement({element, total}) {
  return (
    <li className="flex items-center gap-2">
        <span 
            className="w-3 h-3 rounded-xs"
            style={{background: `${element.color}`}}
        />
        <span className="text-md text-[#888]">{element.name} — {((element.parts / total) * 100).toFixed(2)}%</span>
    </li>
  )
}
