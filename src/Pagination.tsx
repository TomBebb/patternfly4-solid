import { FaSolidAngleLeft } from "solid-icons/fa"
import { createEffect, createMemo } from "solid-js"
import { Input } from "."

export interface PaginationProps {
    itemCount: number

    perPage: number
    page: number
    onSetPage: (p: number) => void
    onPerPageSelect: (p: number) => void
}

export function Pagination(props: PaginationProps) {
    const currPageMin = createMemo(() => 1 + (props.page - 1) * props.perPage);
    const currPageMax = createMemo(() => props.page * props.perPage - 1);
    const maxPage = createMemo(() => Math.ceil(props.itemCount / props.perPage));

    createEffect(() => {
        console.log('page', props.page)
        if (props.page > maxPage()) {
             props.onSetPage(maxPage())   
        }
    })
    return <div class="pf-c-pagination">
        <div class="pf-c-pagination__total-items">
            <b>{currPageMin()} - {currPageMax()}</b>&nbsp;of&nbsp;
            <b>{props.itemCount}</b>
        </div>
        <nav class="pf-c-pagination__nav">
            <div class="pf-c-pagination__nav-control pf-m-first">
                <button
                    class="pf-c-button pf-m-plain"
                    type="button"
                    disabled={props.page <= 1}
                    aria-label="Go to first page"

                    onClick={() => props.onSetPage(1)}
                >
                    <i class="fas fa-angle-double-left" aria-hidden="true"></i>
                </button>
            </div>
            <div class="pf-c-pagination__nav-control pf-m-prev">
                <button
                    class="pf-c-button pf-m-plain"
                    type="button"
                    disabled={props.page - 1 < 1}
                    aria-label="Go to previous page"
                    onClick={() => props.onSetPage(props.page - 1)}
                >
                    <i class="fas fa-angle-left" aria-hidden="true"></i>
                </button>
            </div>
            <div class="pf-c-pagination__nav-page-select">
                <Input
                    type="number"
                    min={1}
                    max={maxPage()}
                    value={props.page}
                    onChange={(v) => props.onSetPage(v as any | 0)}
                />
                <span aria-hidden="true">of {maxPage()}</span>
            </div>
            <div class="pf-c-pagination__nav-control pf-m-next">
                <button
                    class="pf-c-button pf-m-plain"
                    type="button"
                    aria-label="Go to next page"

                    disabled={props.page + 1 > maxPage()}
                    onClick={() => props.onSetPage(props.page + 1)}
                >
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                </button>
            </div>
            <div class="pf-c-pagination__nav-control pf-m-last">
                <button
                    class="pf-c-button pf-m-plain"
                    type="button"
                    aria-label="Go to last page"
                    disabled={props.page + 1 > maxPage()}
                    onClick={() => props.onSetPage(maxPage())}
                >
                    <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                </button>
            </div>
        </nav>
    </div>
}