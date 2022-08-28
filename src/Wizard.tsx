import '@patternfly/patternfly/components/Tooltip/tooltip.css'

import { children, createEffect, createMemo, createSignal, For, JSXElement, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web/types';
import Button from './Button';

export interface WizardHeaderProps {
  title: JSXElement

  description?: JSXElement,
  hideClose?: boolean
  onClose?: () => void;
}

export function WizardHeader(props: WizardHeaderProps) {
  return <div class="pf-c-wizard__header">
    <button
      class="pf-c-button pf-m-plain pf-c-wizard__close"
      type="button"
      aria-label="Close"
      onClick={props.onClose}
    >
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>


    <div class="pf-c-wizard__title">
      {props.title}
    </div>

    <div class="pf-c-wizard__description">
      {props.description}
    </div>
  </div>;
}

export interface WizardStep {
  name: string,
  component?: JSXElement
  isDisabled?: boolean
  isFinished?: boolean
  steps?: WizardStep[]
}
export interface WizardProps {
  children: JSXElement
  steps: WizardStep[]
}

export default function Wizard(props: WizardProps) {
  const [stepIndex, setStepIndex] = createSignal(0);
  const [substepIndex, setSubstepIndex] = createSignal(0);
  const step = createMemo<WizardStep>(() => props.steps[stepIndex()]);
  const substep = createMemo<WizardStep>(() => (step().steps ?? [])[substepIndex()]);
  const fullStep = createMemo<WizardStep>(() => step().steps?.length ? substep() : step());

  const isSub = () => step().steps?.length;
  const canAdvanceSub = () => (substepIndex() + 1 < step().steps!.length);
  const canAdvanceParent = () => (stepIndex() + 1 < props.steps.length);
  const canAdvance = () => isSub() ? canAdvanceSub() : canAdvanceParent()


  const canReturnPrevSub = () => (substepIndex() - 1 >= 0);
  const canReturnPrevParent = () => (stepIndex() - 1 >= 0);
  const canReturnPrev = () => isSub() ? canReturnPrevSub() : canReturnPrevParent()

  createEffect(() => {
    if (substepIndex() === 0 && isSub()) {
        setSubstepIndex(0);
    }
  });
  const next = () => {
    if (isSub() && canAdvanceSub())
      setSubstepIndex(substepIndex() + 1);
    else if (canAdvanceParent())
      setStepIndex(stepIndex() + 1);
  }
  const returnPrev = () => {
    if (isSub() && canReturnPrevSub())
      setSubstepIndex(substepIndex() - 1);
    else if (canReturnPrevParent())
      setStepIndex(stepIndex() - 1);
  }

  const classes = createMemo(() => ({
    'pf-c-wizard': true,
    'pf-m-finished': step()?.isFinished
  }));
  const c = children(() => props.children);
  return <div class="pf-c-wizard">
    {c()}
    <main class="pf-c-wizard__main" tabindex="0">
      <div class="pf-c-wizard__main-body">
        {fullStep().component}
      </div>
    </main>
    <div class="pf-c-wizard__outer-wrap">
      <div class="pf-c-wizard__inner-wrap">

        <nav class="pf-c-wizard__nav" aria-label="Steps">
          <ol class="pf-c-wizard__nav-list">

            <For each={props.steps}>{(step, currStepIndex) => {

              const buttonClasses = createMemo(() => ({
                'pf-c-wizard__nav-link': true,
                'pf-m-current': currStepIndex() === stepIndex()
              }));
              const onClick = () => {
                setStepIndex(currStepIndex());
              };
              return <li class="pf-c-wizard__nav-item">
                <button classList={buttonClasses()} onClick={onClick}>
                  {step.name}
                </button>

                <ol class="pf-c-wizard__nav-list">

                  <For each={step.steps ?? []}>{(substep, currSubStepIndex) => {
                    const buttonClasses = {
                      'pf-c-wizard__nav-link': true,
                      'pf-m-current': currStepIndex() === stepIndex() && currSubStepIndex() === substepIndex()
                    };
                    const onClick = () => {
                      setStepIndex(currStepIndex());
                      setSubstepIndex(currSubStepIndex());
                    };
                    return <li class="pf-c-wizard__nav-item">
                      <button classList={buttonClasses} onClick={onClick}>
                        {substep.name}
                      </button>
                    </li>
                  }}</For>
                </ol>
              </li>
            }}</For>
          </ol>
        </nav>
      </div>
    </div>
    <footer class="pf-c-wizard__footer">
      <Button variant='primary' disabled={!canAdvance()} onClick={next}>Next</Button>
      <Button variant='secondary' disabled={!canReturnPrev()} onClick={returnPrev}>Back</Button>
      <div class="pf-c-wizard__footer-cancel">
      <Button variant='link'>Cancel</Button>
      </div>
    </footer>
    <button
      aria-label="Wizard Header Toggle"
      class="pf-c-wizard__toggle"
      aria-expanded="false"
    >
      <span class="pf-c-wizard__toggle-list">
        <span class="pf-c-wizard__toggle-list-item">
          <span class="pf-c-wizard__toggle-num">2</span>
          Configuration
          <i
            class="fas fa-angle-right pf-c-wizard__toggle-separator"
            aria-hidden="true"
          ></i>
        </span>
        <span class="pf-c-wizard__toggle-list-item">Substep B</span>
      </span>
      <span class="pf-c-wizard__toggle-icon">
        <i class="fas fa-caret-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>;
}