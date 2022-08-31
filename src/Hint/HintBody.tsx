
import { children, JSXElement } from "solid-js";

export interface HintBodyProps {
    children: JSXElement
}

export function HintBody(props: HintBodyProps) {
    const c = children(() => props.children);
    return <div class="pf-c-hint__body">
        {c()}
    </div>
}