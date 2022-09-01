import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface THProps {
    
    children: JSXElement
    dataLabel?: string
}
export function Td(raw: THProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <td data-label={props.dataLabel}>
        {childs()}
    </td>
}