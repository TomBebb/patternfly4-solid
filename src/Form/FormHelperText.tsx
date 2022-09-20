import { children, JSXElement, Show } from "solid-js";

export interface FormHelperTextProps {
    children: JSXElement
    icon?: JSXElement
    variant: string
    isHidden: boolean
}

export function FormHelperText(props: FormHelperTextProps) {

    const cs = children(() => props.children);

    return <Show when={!props.isHidden}>
        <div classList={{ "pf-c-pf-c-form__helper-text": true, ['pf-m-' + props.variant]: true }}>
            <Show when={props.icon}>
                <span class="pf-c-form__helper-text-icon">
                    {props.icon}
                </span>
            </Show>
        </div>
    </Show>
}