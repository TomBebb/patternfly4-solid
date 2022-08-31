

import { children, createMemo, createSignal, JSXElement, Match, Show, Switch, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export interface LabelProps<TItem = any> {
    children?: JSXElement
    icon?: JSXElement
    className?: string
    closeBtn?: JSXElement
    color?: LabelColor
    variant?: LabelVariant
    href?: string,
    isCompact?: boolean
    isTruncated?: boolean
    isEditable?: boolean
    editableProps?: LabelEditableProps
}

export interface LabelEditableProps {
    value: string,
    onSubmit: (i: string) => void;
}
export type LabelColor = 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey' | 'gold';
export type LabelVariant = 'outline' | 'filled';


export function Label(props: LabelProps) {
    const c = children(() => props.children);
    const [editText, setEditText] = createSignal<string | null>(null);
    const editing = createMemo<boolean>(() => editText() !== null)
    const classes = createMemo(() => ({
        'pf-c-label': true,
        'pf-m-editable-active': editing(),
        'pf-m-editable': props.isEditable,
        'pf-m-compact': props.isCompact,
        ['pf-m-' + props.color]: true,
        ['pf-m-' + props.variant]: true,
    }))
    function onKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            setEditText(null)
            return;
        }
        if (!(e.key === 'Enter')) {
            return;
        }
        props.editableProps!.onSubmit(editText() as string)
        setEditText(null)
    }
    function onClick(e: MouseEvent) {
        if (!props.isEditable) {
            return;
        }
        setEditText(props.editableProps!.value)
    }
    return <span classList={classes()} onKeyDown={onKeyDown} onClick={onClick}>
        <Switch fallback={<span class='pf-c-label__content'>
            <Show when={props.icon}>
                <span class="pf-c-label__icon" >
                    {props.icon}
                </span>
            </Show>
            {c()}

        </span>}>
            <Match when={editing()}>
                <input
                    class='pf-c-label__content'
                    value={editText()!}
                    onChange={ev => setEditText((ev.target as HTMLInputElement).value)} 
                />
            </Match>
        </Switch>
    </span>
}