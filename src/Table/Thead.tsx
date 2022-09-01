import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface THeadProps {
    children: JSXElement
}
export function Thead(raw: THeadProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <thead>
        {childs()}
    </thead>
}