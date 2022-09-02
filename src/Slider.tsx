

import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import { createStore } from "solid-js/store";
export interface CustomSliderStep {
    value: number
    label: string
}

export interface SliderProps {
    onChange: (v: number) => void;
    value: number;
    customSteps: CustomSliderStep[];
    areCustomStepsContinuous?: boolean
    step?: number;
}

export function Slider(props: SliderProps) {
    const [mouseDown, setMouseDown] = createSignal(false);

    const max = createMemo(() => props.customSteps[props.customSteps.length - 1].value);
    const min = createMemo(() => props.customSteps[0].value);
    const range = createMemo(() => max() - min());

    function onMouseUp(ev: MouseEvent) {
        setMouseDown(false);
    }
    function onMouseDown(ev: MouseEvent) {
        setMouseDown(true);
    }
    function getNearestRoundable(v: number): number | null {

        if (props.step) {
            return Math.round(v / props.step) * props.step;   
        }
        let nearestDist: number | null = null;

        const check = (value: number): void => {
            const dist = Math.abs(value - v);
            if (dist === null || dist < nearestDist!) {
                nearestDist = dist;
            }
        }   
        if (props.step)
            for (let stepValue = min(); stepValue <= max(); stepValue += props.step) {
                check(stepValue)
            }
        for (const step of props.customSteps) {
            check(step.value)
        }
        return Number.isFinite(nearestDist) ? nearestDist : null;
    }
    function mapVal(v: number): number {
        return getNearestRoundable(v) ?? v;
    }
    function onMouseMove(ev: MouseEvent) {
        if (!mouseDown())
            return;

        const newSliderVal = ev.x * ((range()) / sliderElWidth()) + min();
        props.onChange(mapVal(newSliderVal));
        ev.stopPropagation();
    }
    const [sliderElWidth, setSliderElWidth] = createSignal(0);

    function onResize() {
        setSliderElWidth(sliderEl.clientWidth);

    }
    onMount(() => {
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('resize', onResize);
        onResize();
        setTimeout(onResize, 4000);
    });
    onCleanup(() => {
        window.removeEventListener('mouseup', onMouseUp)
        window.removeEventListener('resize', onResize);
    });

    let sliderEl: HTMLElement;
    function toCss(val: number): string {
        return ((100 * val) / max()) + "%";
    }
    return <div
        class="pf-c-slider"
        style={{ "--pf-c-slider--value": toCss(props.value) } as any}
    >
        <div class="disable-select pf-c-slider__main"

            onMouseMove={onMouseMove}
            ref={el => { sliderEl = el; onResize() }}>
            <div class="pf-c-slider__rail" >
                <div class="pf-c-slider__rail-track"></div>
            </div>
            <div class="pf-c-slider__steps" aria-hidden="true">
                <For each={props.customSteps}>{(step) =>
                    <div
                        classList={{
                            "pf-c-slider__step": true,
                            "pf-m-active": step.value <= props.value
                        }}
                        style={{
                            "--pf-c-slider__step--Left": toCss(step.value)
                        } as any}
                    >
                        <div class="pf-c-slider__step-tick"></div>
                        <div class="pf-c-slider__step-label">
                            {step.label}
                        </div>
                    </div>
                }</For>

                <Show when={props.step}>
                    <For each={INC}>{sub => 

                        <div
                    class="pf-c-slider__step"
                        style={{
                            "--pf-c-slider__step--Left": toCss(parseInt(sub) * (props.step! / range()))
                        } as any}
                        >
                        <div class="pf-c-slider__step-tick"></div>
                        </div>
                    }

                    </For>
                </Show>
            </div>
            <div
                class="pf-c-slider__thumb"
                role="slider"
                aria-valuemin={min()}
                aria-valuemax={max()}
                aria-valuenow={props.value}
                aria-label="Value"
                tabindex="0"
                onMouseDown={onMouseDown}
            ></div>
        </div>
    </div>;
}