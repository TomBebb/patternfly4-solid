import { children, JSXElement, Show } from "solid-js";
import { createStore } from "solid-js/store";

export interface FormFieldGroupHeaderProps {
    titleDescription: JSXElement
    titleText: JSXElement
    actions?: JSXElement
}

export function FormFieldGroupHeader(raw: FormFieldGroupHeaderProps) {
    const [props] = createStore(raw);



    return <div class="pf-c-form__field-group-header">
        <div class="pf-c-form__field-group-header-title">
            <div class="pf-c-form__field-group-header-title-text">
                {props.titleText}
            </div>
        </div>

        <div class="pf-c-form__field-group-header-description">
            {props.titleDescription}
        </div>

        <Show when={props.actions}>
            <div class="pf-c-form__field-group-header-actions">
                {props.actions}
            </div>
        </Show>
    </div>
}