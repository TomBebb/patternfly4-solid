import { Component, createMemo, For, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";
import { Set } from "immutable";
import { Dynamic } from "solid-js/web";
export interface AccordionProps<TItem, TKey> {
    items: TItem[];
    getKey: (i: TItem) => TKey;
    selected: Set<TKey>
    setSelected: (i: Set<TKey>) => void;
    itemContent: Component<{item:TItem}>;
    itemToggle: Component<{item:TItem}>;
}

export function Accordion<TItem, TKey>(raw: AccordionProps<TItem, TKey>) {
    const [props] = createStore(raw);


    return <div class="pf-c-accordion">
        <For each={props.items}>{item => {
            const itemKey = createMemo(() => props.getKey(item));
            const isSelected = createMemo(() => props.selected.has(itemKey()));
            const toggleSelected = () => {
                if (isSelected()) {
                    props.setSelected(props.selected.delete(itemKey()))
                } else {
                    props.setSelected(props.selected.add(itemKey()))
                }
            }
            return <>
                <h3>
                    <button
                        classList={{
                        "pf-c-accordion__toggle": true,
                        " pf-m-expanded": isSelected()
                    }}
                        type="button"
                        aria-expanded={isSelected()}
                        onClick={toggleSelected}
                        >
                        <span class="pf-c-accordion__toggle-text">
                            <Dynamic
                                component={props.itemToggle}
                                item={item}
                             />
                        </span>

                        <span class="pf-c-accordion__toggle-icon">
                            <i class="fas fa-angle-right" aria-hidden="true"></i>
                        </span>
                    </button>
                </h3>
                <div classList={{
                    "pf-c-accordion__expanded-content": true,
                    "pf-m-fixed": true,
                    "pf-m-expanded": isSelected()
                }} hidden={!isSelected()}>
                    <div class="pf-c-accordion__expanded-content-body">
                            <Dynamic
                                component={props.itemContent}
                                item={item}
                             />
                    </div>
                </div>
            </>
        }}</For>
    </div>
}