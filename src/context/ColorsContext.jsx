import { createContext, useState, useMemo } from "react";

export const ColorsContext = createContext();

export function ColorsProvider({children}) {
    const [colors] = useState([
        "#EAB308",
        "#F97316",
        "#8B5CF6",
        "#06B6D4",
        "#EC4899",
        "#6366F1",
        "#14B8A6",
        "#84CC16",
        "#F43F5E",
        "#A855F7",
        "#0EA5E9",
        "#22C55E",
        "#F59E0B",
        "#D946EF",
        "#65A30D",
        "#78716C",
        "#000",
        "#FFF",
        "#3B82F6",
        "#EF4444",
        "#10B981"
    ]);

    const [current, setCurrent] = useState(0);

    function nextColor() {
        setCurrent(current >= colors.length ? 0 : current + 1);
    }

    return (
        <ColorsContext.Provider value={{ colors, current, nextColor }}>
            { children }
        </ColorsContext.Provider>
    )
}