import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function Graphic({elements, style, animation}) {
  const data = elements.map((element) => ({
    name: element.name,
    value: element.parts,
    color: element.color
  }));

  return (
    <div className="relative w-50 h-50 lg:w-100 lg:h-100">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            key={animation} // Quando o valor de animation muda, a animação é executada, pois o componente é reconstruído
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="100%"
            innerRadius={style === "donut" ? "75%" : 0}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease"
          >
            {data.map((item, index) => (
              <Cell
                key={index}
                fill={item.color}
                strokeWidth={0}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}