import { children, createMemo, JSXElement } from "solid-js";
import Button, { ButtonVariant } from "../Button";

export const PageSectionVariants = {
    darker: 'pf-m-dark-100',
    dark: 'pf-m-dark-200',
    light: 'pf-m-light'
}
export interface PageSectionProps {
    isNavOpen: boolean
    onNavToggle: () => void;
    variant: string,
    children: JSXElement
    'aria-label': string

}
export default function PageSection(props: PageSectionProps) {
    const c = children(() => props.children);
    const classes = createMemo(() => ({
        'pf-c-page__main-section': true,
        [props.variant]: true
    }));
    return <section classList={classes()} onClick={props.onNavToggle}>
        {c()}
    </section>
}