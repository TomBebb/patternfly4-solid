import '@patternfly/patternfly/components/Hint/hint.css'

import { children, JSXElement } from "solid-js";

export interface HintFooterProps {
    children: JSXElement
}

export function HintFooter(props: HintFooterProps) {
    const c = children(() => props.children);
    return <div class="pf-c-hint__footer">
        {c()}
    </div>
}