import { EventEmitter, ElementRef, Renderer } from '@angular/core';
import { DIRECTIONS } from '../misc/picker-directions';
import { Subject } from 'rxjs';
export declare class EmojiPickerComponent {
    private _renderer;
    private _el;
    labelFor: any;
    selectionEmitter: EventEmitter<{}>;
    pickerCloseEmitter: EventEmitter<{}>;
    _lastHostMousedownEvent: any;
    _currentTarget: ElementRef;
    _currentDirection: DIRECTIONS;
    _windowResize: Subject<any>;
    _destroyed: Subject<boolean>;
    constructor(_renderer: Renderer, _el: ElementRef);
    setPosition(target: ElementRef, directionCode?: DIRECTIONS): void;
    onBackground(event: any): void;
    ngOnDestroy(): void;
}
