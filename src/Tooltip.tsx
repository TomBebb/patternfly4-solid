import '@patternfly/patternfly/components/Tooltip/tooltip.css'

import { createPopper } from '@popperjs/core';
import { JSXElement } from 'solid-js';

export interface TooltipProps {
    content: JSXElement
}

export default function Tooltip(props: TooltipProps) {
    return <div class="pf-c-tooltip pf-m-top" role="tooltip">
    <div class="pf-c-tooltip__arrow"></div>
  
    <div
      class="pf-c-tooltip__content"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
  </div>;
}