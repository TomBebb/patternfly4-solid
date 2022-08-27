import { Component, createEffect, createMemo, createSignal, For, Show, ValidComponent } from "solid-js"

export interface SelectOption<TValue = any> {
    item?: Component<{ value: TValue }>,
    description?: ValidComponent
    id: string
    isDisabled?: boolean
    isPlaceholder?: boolean
    value: TValue
}

export interface SelectProps {
    options: SelectOption[]
}
export default function Select(props: SelectProps) {
    const [expanded, setExpanded] = createSignal(false);
    const placeholderIndex = createMemo(() => {
        const i = props.options.findIndex(v => v.isPlaceholder);
        return i === -1 ? 0 : i;
    });
    const [optionIndex, setOptionIndex] = createSignal(placeholderIndex());
    const option = createMemo(() => props.options[optionIndex()]);
    const classes = createMemo(() => ({
        'pf-c-select': true,
        'pf-m-expanded': expanded()
    }));
    createEffect(() => console.log('expanded', expanded()));
    return <div classList={classes()} onClick={() => setExpanded(!expanded())}>

        <button
            class="pf-c-select__toggle"
            type="button"
            id="select-single-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            aria-labelledby="select-single-label select-single-toggle"
        >
            <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">

                    {option().value}
                </span>
            </div>
            <span class="pf-c-select__toggle-arrow">
                <i class="fas fa-caret-down" aria-hidden="true"></i>
            </span>
        </button>

        <Show when={expanded()}>

            <ul
                class="pf-c-select__menu"
                role="listbox"
                aria-labelledby="select-single-expanded-label"
            >
               <For each={props.options}>{item =>
                
                <li role="presentation">

                    <Show when={item.value === option().value}>
                        
                    </Show>
                    <button classList={{
                        "pf-c-select__menu-item": true,
                        "pf-m-selected": item.value === option().value
               }} role="option">
                        {item.value}
                    </button>
                </li>
               }
                </For> 
                <li role="presentation">
                    <button class="pf-c-select__menu-item" role="option">Running</button>
                </li>
                <li role="presentation">
                    <button
                        class="pf-c-select__menu-item pf-m-selected"
                        role="option"
                        aria-selected="true"
                    >
                        Stopped
                        <span class="pf-c-select__menu-item-icon">
                            <i class="fas fa-check" aria-hidden="true"></i>
                        </span>
                    </button>
                </li>
                <li role="presentation">
                    <button class="pf-c-select__menu-item" role="option">Down</button>
                </li>
                <li role="presentation">
                    <button class="pf-c-select__menu-item" role="option">Degraded</button>
                </li>
                <li role="presentation">
                    <button class="pf-c-select__menu-item" role="option">Needs maintenance</button>
                </li>
            </ul>
        </Show>
    </div>
}