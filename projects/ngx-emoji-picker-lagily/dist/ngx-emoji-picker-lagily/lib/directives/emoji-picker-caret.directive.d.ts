import { EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CaretEvent } from '../misc/caret-event';
export declare class EmojiPickerCaretDirective implements OnInit, OnDestroy {
    private _el;
    caretEmitter: EventEmitter<CaretEvent>;
    private _caretEvent$;
    private _destroyed$;
    private _lastCaretEvent;
    private _win;
    private _doc;
    readonly doc: any;
    readonly win: any;
    constructor(_el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateCaretPosition(): void;
    updateCaretDueMutation(): void;
}
