import { children, JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export interface FieldGroupProps {
    children: JSXElement
    header: JSXElement
    expanded: boolean
}

export function FieldGroup(raw: FieldGroupProps) {
    const [props] = createStore(raw);

    const chs = children(() => props.children);


    return <div class="pf-c-form__field-group" role="group">
        {props.header}

        <div class="pf-c-form__field-group-body">
            {chs}
        </div>
    </div>
}