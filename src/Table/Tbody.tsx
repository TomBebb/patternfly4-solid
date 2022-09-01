import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface TBodyProps {
    children: JSXElement
}
export function Tbody(raw: TBodyProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <tbody>
        {childs()}
    </tbody>
}