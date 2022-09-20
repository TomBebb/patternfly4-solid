import { children, JSXElement } from "solid-js";

export interface FormGroupProps {
    label: string
    children: JSXElement
    isRequired?: boolean
}

export function FormGroup(props: FormGroupProps) {
    const ch = children(() => props.children)
    return <div class="pf-c-form__group">
        <div class="pf-c-form__group-label">
            {props.label}
        </div>

        <div class="pf-c-form__group-control">
            {ch}
        </div>
    </div>
}