import { JSXElement, Show, ValidComponent } from "solid-js";
import { PropAliases } from "solid-js/web/types";

export interface CheckboxProps {
    body?: JSXElement
    description?: JSXElement
    checked?: boolean
    isDisabled?: boolean
    isValid?: boolean
    label?: JSXElement
    onChange?: (v: boolean) => void;
    
}
export function Checkbox(props: CheckboxProps) {
    return <div class="pf-c-check">
    <input
      class="pf-c-check__input"
      type="checkbox"
      checked={props.checked}
    >
    </input>
  
    <Show when={props.body}>
        {props.body}
    </Show>

    <Show when={props.label}>
        
        <label class="pf-c-check__label" >
            {props.label}
        </label>
    </Show>
    <Show when={props.description}>
        
        <span class="pf-c-check__description">
            {props.description}
        </span>
    </Show>
  </div>
}