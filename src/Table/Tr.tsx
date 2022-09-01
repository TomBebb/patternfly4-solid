import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface TRowProps {
    children: JSXElement
    key?: string
}
export function Tr(raw: TRowProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <tr>
        {childs()}
    </tr>
}