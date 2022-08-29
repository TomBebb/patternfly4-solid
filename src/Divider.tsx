

import { ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';

export interface DividerProps {
    component?: ValidComponent
    className?: string
}

export function Divider(props: DividerProps) {
    return <Dynamic component={props.component ?? <div/>}  class="pf-c-divider" role='seperator' />
}