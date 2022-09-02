import { children, JSXElement, Show } from "solid-js"
import { createStore } from "solid-js/store"

export interface AboutModalProps {
    isOpen: boolean
    onClose: () => void

    trademark?: string
    brandImageSrc?: string
    brandImageAlt?: string

    productName: string;

    children: JSXElement
}

export function AboutModal(raw: AboutModalProps) {
    const [props] = createStore(raw);
    const childs = children(() => props.children);
    return <Show when={props.isOpen}>
        <div class="pf-c-backdrop">
            <div class="pf-l-bullseye">

                <div

                    class="pf-c-about-modal-box"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="about-modal-title"
                >
                    <Show when={props.brandImageSrc}>
                        <div class="pf-c-about-modal-box__brand">
                            <img
                                class="pf-c-about-modal-box__brand-image"
                                src={props.brandImageSrc}
                                alt={props.brandImageAlt}
                            />
                        </div>
                    </Show>


                    <div class="pf-c-about-modal-box__close">
                        <button
                            class="pf-c-button pf-m-plain"
                            type="button"
                            aria-label="Close dialog"
                            onClick={props.onClose}
                        >
                            <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                    </div>


                    <div class="pf-c-about-modal-box__header">
                        <h1 class="pf-c-title pf-m-4xl" id="about-modal-title">
                            {props.productName}
                        </h1>
                    </div>
                    <div class="pf-c-about-modal-box__hero"></div>
                    <div class="pf-c-about-modal-box__content">
                        <div class="pf-c-about-modal-box__body">
                            {childs}
                        </div>
                        <p
                            class="pf-c-about-modal-box__strapline"
                        >
                            {props.trademark}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </Show>
}