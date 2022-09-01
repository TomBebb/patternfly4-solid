import { children, For, JSXElement } from "solid-js";
import { createStore } from "solid-js/store";
import { ToggleGroupItem, BaseToggleGroupItemProps } from "./ToggleGroupItem";


export interface ToggleGroupProps<TKey> {
    items: ({ key: TKey } & BaseToggleGroupItemProps)[];

    hasItem: (key: TKey) => boolean;
    setItem: (key: TKey, selected: boolean) => void;

}
export function ToggleGroup<TKey>(raw: ToggleGroupProps<TKey>) {
    console.log('ToggleGroup', raw);
    const [{ items, hasItem, setItem }] = createStore(raw);

    return <div class="pf-c-toggle-group" role="group">
        <For each={items}>{item => {
            console.log('item', item)
            return <ToggleGroupItem
                icon={item.icon}
                isSelected={hasItem(item.key)}
                onChange={(sel: boolean) => setItem(item.key, sel)}
                text={item.text} />
        }}

        </For>
    </div>
}