import { children, JSXElement } from "solid-js";

export interface HintTitleProps {
    children: JSXElement
}

export default function HintTitle(props: HintTitleProps) {
    const c = children(() => props.children);
    return <div class="pf-c-hint__title">
        {c()}
    </div>
}