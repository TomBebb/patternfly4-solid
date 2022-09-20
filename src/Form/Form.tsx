import { children, JSXElement } from "solid-js";

export interface FormProps {
    children: JSXElement
}

export function Form(props: FormProps) {
    const ch = children(() => props.children);

    return <form class="pf-c-form">
        {ch()}
    </form>
}