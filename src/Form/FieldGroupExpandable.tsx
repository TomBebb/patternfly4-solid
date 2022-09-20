import { FaSolidCaretDown, FaSolidCaretRight } from "solid-icons/fa";
import { children, createEffect, JSXElement, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { Button } from "../Button";

export interface FieldGroupExpandableProps {
    header: JSXElement
    children: JSXElement
    isExpanded: boolean
    setExpanded: (v: boolean) => void
}

export function FieldGroupExpandable(raw: FieldGroupExpandableProps) {
    const [props] = createStore(raw);

    const chs = children(() => props.children);

    createEffect(() => console.log('expanded', props.isExpanded))

    return <div classList={{ "pf-c-form__field-group": true, "pf-m-expanded": props.isExpanded }} role="group">

        <div class="pf-c-form__field-group-toggle">
            <div class="pf-c-form__field-group-toggle-button">
                <Button variant="plain" onClick={() => props.setExpanded(!props.isExpanded)}>
                    <Dynamic component={props.isExpanded ? FaSolidCaretDown : FaSolidCaretRight} />
                </Button>
            </div>
        </div>
        {props.header}

        <Show when={props.isExpanded}>

            <div class="pf-c-form__field-group-body">
                {chs}
            </div>
        </Show>
    </div>
}