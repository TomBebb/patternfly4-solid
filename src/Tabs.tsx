import { For, JSXElement } from "solid-js"

export interface TabsProps {
    activeKey: number
    onSelect: (key: number) => void
    isBox?: number
    tabs: TabProps[]
}

export interface TabProps {
    title: JSXElement
    content: JSXElement
    disabled?: boolean,
}

export function Tabs(props: TabsProps) {
    return <div class="pf-c-tabs" style="width:100%;display:flex;flex-direction:column">
        <div>
        <button
            class="pf-c-tabs__scroll-button"
            disabled
            aria-hidden="true"
            aria-label="Scroll left"
        >
            <i class="fas fa-angle-left" aria-hidden="true"></i>
        </button>
        <ul class="pf-c-tabs__list">
            <For each={props.tabs}>{(tab, index) =>
                <li classList={{ "pf-c-tabs__item": true, "pf-m-current": index() === props.activeKey }}>
                    <button class="pf-c-tabs__link" disabled={tab.disabled} onClick={() => props.onSelect(index())}>
                        <span class="pf-c-tabs__item-text">
                            {tab.title}
                        </span>
                    </button>
                </li>}
            </For>
        </ul>
        <button
            class="pf-c-tabs__scroll-button"
            disabled
            aria-hidden="true"
            aria-label="Scroll right"
        >
            <i class="fas fa-angle-right" aria-hidden="true"></i>
        </button>
    </div>
    <For each={props.tabs}>
        {(tab, tabIndex) => {
    return <section
  class="pf-c-tab-content"
  role="tabpanel"
  tabindex="0"
  hidden={tabIndex() !== props.activeKey}
>
  <div class="pf-c-tab-content__body">
    {tab.content!}
    </div>
</section>
}}</For>
</div>
}