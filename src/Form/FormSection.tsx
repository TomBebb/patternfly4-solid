import { children, JSXElement } from "solid-js";

export interface FormSectionProps {
    title: string
    titleElement?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: JSXElement
}

export function FormSection(props: FormSectionProps) {
    const ch = children(() => props.children);

    return <section class="pf-c-form__section" role="group">
        {ch()}
    </section>
}