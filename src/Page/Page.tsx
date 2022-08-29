import { children, JSXElement } from "solid-js";

export  interface PageProps {
    children: JSXElement
    header: JSXElement
    sidebar?: JSXElement
}

export function Page(props: PageProps) {
  const c= children(() => props.children);
    return <div class="pf-c-page">
      {c()}
    <header class="pf-c-page__header">
      <div class="pf-c-page__header-brand">
        <div class="pf-c-page__header-brand-toggle">toggle</div>
        <a href="#" class="pf-c-page__header-brand-link">Logo</a>
      </div>
      <div class="pf-c-page__header-tools">header-tools</div>
    </header>
    <div class="pf-c-page__sidebar">
      <div class="pf-c-page__sidebar-body">pf-c-nav</div>
    </div>
    <main class="pf-c-page__main" tabindex="-1">
      {c()}
    </main>
  </div>;
}