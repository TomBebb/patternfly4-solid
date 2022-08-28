import { Component, createEffect, createMemo, createSignal, For, Show, ValidComponent } from "solid-js"

export interface SelectOption<TValue = any> {
    label: ValidComponent,
    description?: ValidComponent
    isDisabled?: boolean
    isPlaceholder?: boolean
    value: TValue
}

export interface SelectProps<TValue = any> {
    options: SelectOption<TValue>[]
    onChange: (value: TValue) => void
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
    const menuClasses = createMemo(() => ({
        'pf-c-select__menu': true,
        'invisible': !expanded()
    }))

    createEffect(() => props.onChange(option().value))
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

        <ul
            classList={menuClasses()}
            role="listbox"
        >

            <For each={props.options}>{(item, index) => {
                const isCurr = createMemo<boolean>(() => index() === optionIndex());
                return <li role="presentation">

                    <button
                        classList={{
                            "pf-c-select__menu-item": true,
                            "pf-m-selected": isCurr()
                        }}

                        aria-selected={isCurr()}
                        role="option"

                        onClick={() => setOptionIndex(index())}
                    >
                        {item.value}

                        <Show when={isCurr()}>

                            <span class="pf-c-select__menu-item-icon">
                                <i class="fas fa-check" aria-hidden="true"></i>
                            </span>
                        </Show>
                    </button>
                </li>
            }}
            </For>
        </ul>
    </div>
}