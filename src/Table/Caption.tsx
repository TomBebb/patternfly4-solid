import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface CaptionProps {
    children: JSXElement
}
export function Caption(raw: CaptionProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <caption>
        {childs()}
    </caption>
}