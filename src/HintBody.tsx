import '@patternfly/patternfly/components/Hint/hint.css'

import { children, JSXElement } from "solid-js";

export interface HintBodyProps {
    children: JSXElement
}

export default function HintBody(props: HintBodyProps) {
    const c = children(() => props.children);
    return <div class="pf-c-hint__body">
        {c()}
    </div>
}