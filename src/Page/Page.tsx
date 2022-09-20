import { children, createSignal, JSXElement } from "solid-js";
import { createStore } from "solid-js/store";

export  interface PageProps {
    children: JSXElement
    header: JSXElement
    sidebar?: JSXElement
    showSidebar: boolean
}

export function Page(raw: PageProps) {
  const [props] = createStore(raw)
  const c= children(() => props.children);
    return <div class="pf-c-page">
      {c()}
    {props.header}
    <div classList={{'pf-c-page__sidebar': true, ['pf-m-'+(props.showSidebar ? 'expanded' : 'collapsed')]: true}}>
      <div class="pf-c-page__sidebar-body">pf-c-nav</div>
    </div>
    <main class="pf-c-page__main" tabindex="-1">
      {c()}
    </main>
  </div>;
}