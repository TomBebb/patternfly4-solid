import { children, JSXElement } from "solid-js";

export interface HintProps {
    actions: JSXElement,
    children: JSXElement
}

export function Hint(props: HintProps) {
    const c = children(() => props.children);
    return <div class="pf-c-hint">
        <div class="pf-c-hint__actions">
            {props.actions}
        </div>
        {c()}
    </div>
}