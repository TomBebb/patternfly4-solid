import { create } from "domain";
import { children, createMemo, JSXElement } from "solid-js";

export type PageSectionVariant = 'darker' | 'dark' | 'light';
export const PageSectionVariants: Record<PageSectionVariant, string> = {
    darker: 'pf-m-dark-100',
    dark: 'pf-m-dark-200',
    light: 'pf-m-light'
}
export interface PageSectionProps {
    isNavOpen?: boolean
    onNavToggle?: () => void;
    variant: PageSectionVariant;
    children: JSXElement
    'aria-label'?: string

}
export default function PageSection(props: PageSectionProps) {
    const c = children(() => props.children);
    const variantClass = createMemo(() => PageSectionVariants[props.variant]);
    const classes = createMemo(() => ({
        'pf-c-page__main-section': true,
        [variantClass()]: true
    }));
    return <section classList={classes()} onClick={props.onNavToggle}>
        {c()}
    </section>
}