import { children, JSXElement } from "solid-js";
import Button, { ButtonVariant } from "../Button";

export interface PageToggleButtonProps {
    isNavOpen: boolean
    onNavToggle: () => void;
    variant: ButtonVariant
    children: JSXElement
    'aria-label': string
}

export default function PageToggleButton(props: PageToggleButtonProps) {
    const c = children(() => props.children);
    return <Button variant={props.variant} onClick={props.onNavToggle}>
        {c()}
    </Button>
}