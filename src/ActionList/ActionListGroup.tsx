import { children, createMemo, JSXElement } from "solid-js";

export interface ActionListGroupProps {
  children: JSXElement
  className?: string
}

export function ActionListGroup(props: ActionListGroupProps) {
  const c = children(() => props.children);
  return <div class={'pf-c-action-list__group ' + (props.className??'')}>
    {c()}
  </div>;
}