import { children, JSXElement, Show } from "solid-js";
import { createStore } from "solid-js/store";

export interface BaseToggleGroupItemProps {

    icon?: JSXElement;
    text: string;
}
export interface ToggleGroupItemProps extends BaseToggleGroupItemProps {
    isSelected: boolean
    onChange: (selected: boolean) => void;
}
export function ToggleGroupItem(raw: ToggleGroupItemProps) {
    const [props] = createStore(raw);

    return <div class="pf-c-toggle-group__item" >
        <button
            type="button"
            classList={{
                "pf-c-toggle-group__button": true,
                "pf-m-selected": props.isSelected
            }}
            aria-pressed={props.isSelected}
            aria-label={props.text}
            onClick={() => props.onChange(!props.isSelected)}
        >
            <Show when={props.icon}>

                <span class="pf-c-toggle-group__icon">
                    {props.icon}
                </span>
            </Show>
            <span class="pf-c-toggle-group__text">
                {props.text}
            </span>
        </button>
    </div>
}