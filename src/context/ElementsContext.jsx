import { createContext, useState, useMemo } from "react";

export const ElementsContext = createContext();

export function ElementsProvider({children}) {
    const [elements, setElements] = useState([
        {
            id: 1,
            name: "1",
            parts: 50,
            color: "#3B82F6"
        },
        {
            id: 2,
            name: "2",
            parts: 25,
            color: "#EF4444"
        },
        {
            id: 3,
            name: "3",
            parts: 25,
            color: "#10B981"
        }
    ]);

    function addElement(_name, _parts, _color) {
        const length = elements.length;
        const newId = length > 0 ? elements[length - 1].id + 1 : 1;
        const newElement = {
            id: newId,
            name: _name,
            parts: _parts,
            color: _color
        }
        setElements([...elements, newElement]);
    }

    return (
        <ElementsContext.Provider value={{ elements, setElements, addElement }}>
            { children }
        </ElementsContext.Provider>
    )
}