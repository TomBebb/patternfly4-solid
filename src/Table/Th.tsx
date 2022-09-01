import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface TDProps {
    children: JSXElement
}
export function Th(raw: TDProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <th scope="col">
        {childs()}
    </th>
}