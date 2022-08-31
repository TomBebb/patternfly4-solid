import { children, JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

export interface ListProps {
    children: JSXElement
    isBordered?: boolean
    isPlain?: boolean
    type ?:OrderType
}

export enum OrderType {
    Number
}

export function List(props: ListProps) {

    const childs = children(() => props.children);


    return <Dynamic
    classList={{
        'pf-c-list': true,
        'pf-m-plain': props.isPlain,
        'pf-m-bordered': props.isBordered
    }}
        component={props.type ? 'ul' : 'ol'}>
        {childs}
        </Dynamic>
}