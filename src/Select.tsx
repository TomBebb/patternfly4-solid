import { Component, createEffect, createMemo, createSignal, For, Show, ValidComponent } from "solid-js"
import { Dynamic } from "solid-js/web"

export interface SelectOption<TValue = any> {
    label: string,
    description?: string
    isDisabled?: boolean
    isPlaceholder?: boolean
    value: TValue,
    disabled?: boolean
}

export interface SelectProps<TItem = any> {
    options: SelectOption<TItem>[]
    onChange: (value: TItem) => void
    item?: TItem ;
    disabled?: boolean
}
export function Select(props: SelectProps) {
    const [expanded, setExpanded] = createSignal(false);
    const placeholderIndex = createMemo(() => {
        let i = props.options.findIndex(v => v.isPlaceholder);
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

    const buttonClasses = createMemo(() => ({
        'pf-c-select__toggle': true,
        
        'pf-m-disabled': props.disabled
    }));

    const MenuOption: Component<{opts: SelectOption}> = ({opts}) => {
        return <p>{opts.label}</p>;
    }

    createEffect(() => props.onChange(option().value))
    createEffect(() => {
        const index =  props.options.findIndex(v => v.value === props.item);
        console.log('propItemINdex', index)
        if (index !== -1) {
            setOptionIndex(index)
        }
    })
    return <div classList={classes()} onClick={() => setExpanded(!expanded())}>

        <button
            classList={buttonClasses()}
            type="button"
            id="select-single-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            aria-labelledby="select-single-label select-single-toggle"
        >
            <div class="pf-c-select__toggle-wrapper">
                <span class="pf-c-select__toggle-text">
                    <MenuOption opts={option()}/>
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
                    <MenuOption opts={item}/>

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