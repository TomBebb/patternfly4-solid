import { children, JSXElement } from "solid-js";

export interface HelperTextProps {
    children: JSXElement
}

export function HelperText(props: HelperTextProps) {
    const childs = children(() => props.children);

    return <div class="pf-c-helper-text">
        {childs}
    </div>
}