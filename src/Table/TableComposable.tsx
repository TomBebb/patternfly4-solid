import { children, JSXElement } from "solid-js"
import { createStore } from "solid-js/store";

export interface TableComposableProps {
    children: JSXElement
    borders?: boolean
}
export function TableComposable(raw: TableComposableProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <table classList={{
        'pf-c-table': true,
        'pf-m-grid-md': true,
        'pf-m-no-border-rows': !(props.borders ?? true)
    }}>
        {childs()}
    </table>
}