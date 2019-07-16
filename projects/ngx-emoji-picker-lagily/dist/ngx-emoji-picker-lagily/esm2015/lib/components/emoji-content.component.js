/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
import { EmojiListComponent } from './emoji-list.component';
export class EmojiContentComponent {
    constructor() {
        this.emojiSelectionEmitter = new EventEmitter();
        this._emojis = EMOJIS;
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map((/**
         * @param {?} category
         * @return {?}
         */
        category => Object.assign({}, category, { emojis: [] })));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    searchHandler(value) {
        /** @type {?} */
        let filteredEmojis = this.emojisCategories.map((/**
         * @param {?} category
         * @return {?}
         */
        category => Object.assign({}, category, { emojis: [] })));
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            /** @type {?} */
            const category = this._emojis[i];
            category.emojis.forEach((/**
             * @param {?} emoji
             * @return {?}
             */
            emoji => {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            }));
        }));
        this.emojis = filteredEmojis;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    categorySelectionHandler(event) {
        this.emojiListComponent.selectCategory(event);
    }
}
EmojiContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-content',
                template: `
  <emoji-header 
    [emojisCategories]="emojisCategories"
    (categorySelection)="categorySelectionHandler($event)"
    (search)="searchHandler($event)"
    [labelFor]="labelFor"></emoji-header>
  <emoji-list [labelFor]="labelFor" [emojis]="emojis" (emoji-selection)="emojiSelectionEmitter.emit($event)"></emoji-list>
  <emoji-footer></emoji-footer>
  `,
                styles: [":host{display:flex;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{flex-grow:1}"]
            }] }
];
/** @nocollapse */
EmojiContentComponent.ctorParameters = () => [];
EmojiContentComponent.propDecorators = {
    emojiListComponent: [{ type: ViewChild, args: [forwardRef((/**
                 * @return {?}
                 */
                () => EmojiListComponent)),] }],
    emojiSelectionEmitter: [{ type: Output, args: ['emoji-selection',] }],
    labelFor: [{ type: Input, args: ['labelFor',] }]
};
if (false) {
    /** @type {?} */
    EmojiContentComponent.prototype.emojiListComponent;
    /** @type {?} */
    EmojiContentComponent.prototype.emojiSelectionEmitter;
    /** @type {?} */
    EmojiContentComponent.prototype.labelFor;
    /**
     * @type {?}
     * @private
     */
    EmojiContentComponent.prototype._emojis;
    /** @type {?} */
    EmojiContentComponent.prototype.emojis;
    /** @type {?} */
    EmojiContentComponent.prototype.emojisCategories;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBZ0I1RCxNQUFNLE9BQU8scUJBQXFCO0lBU2hDO1FBUDJCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbkUsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFFL0UsQ0FBQzs7Ozs7SUFFaEIsYUFBYSxDQUFDLEtBQUs7O1lBQ2IsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUcsRUFBRSxFQUFFLENBQUMsRUFBQztRQUV4RyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRWhDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ2xDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QztZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUV6QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7O2FBQ0Y7Ozs7O2lDQUdFLFNBQVMsU0FBQyxVQUFVOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUM7b0NBQzlDLE1BQU0sU0FBQyxpQkFBaUI7dUJBQ3hCLEtBQUssU0FBQyxVQUFVOzs7O0lBRmpCLG1EQUF3Rjs7SUFDeEYsc0RBQTJFOztJQUMzRSx5Q0FBNEI7Ozs7O0lBRTVCLHdDQUF5Qjs7SUFDekIsdUNBQThCOztJQUM5QixpREFBOEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVNT0pJUyB9IGZyb20gJy4uL21pc2MvZW1vamlzLmRhdGEnO1xyXG5pbXBvcnQgeyBFbW9qaUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2Vtb2ppLWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktY29udGVudCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1jb250ZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxlbW9qaS1oZWFkZXIgXHJcbiAgICBbZW1vamlzQ2F0ZWdvcmllc109XCJlbW9qaXNDYXRlZ29yaWVzXCJcclxuICAgIChjYXRlZ29yeVNlbGVjdGlvbik9XCJjYXRlZ29yeVNlbGVjdGlvbkhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAoc2VhcmNoKT1cInNlYXJjaEhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICBbbGFiZWxGb3JdPVwibGFiZWxGb3JcIj48L2Vtb2ppLWhlYWRlcj5cclxuICA8ZW1vamktbGlzdCBbbGFiZWxGb3JdPVwibGFiZWxGb3JcIiBbZW1vamlzXT1cImVtb2ppc1wiIChlbW9qaS1zZWxlY3Rpb24pPVwiZW1vamlTZWxlY3Rpb25FbWl0dGVyLmVtaXQoJGV2ZW50KVwiPjwvZW1vamktbGlzdD5cclxuICA8ZW1vamktZm9vdGVyPjwvZW1vamktZm9vdGVyPlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaUNvbnRlbnRDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBFbW9qaUxpc3RDb21wb25lbnQpKSBlbW9qaUxpc3RDb21wb25lbnQ6IEVtb2ppTGlzdENvbXBvbmVudDtcclxuICBAT3V0cHV0KCdlbW9qaS1zZWxlY3Rpb24nKSBlbW9qaVNlbGVjdGlvbkVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoJ2xhYmVsRm9yJykgbGFiZWxGb3I7XHJcblxyXG4gIHByaXZhdGUgX2Vtb2ppcyA9IEVNT0pJUztcclxuICBlbW9qaXMgPSB0aGlzLl9lbW9qaXMuc2xpY2UoKTtcclxuICBlbW9qaXNDYXRlZ29yaWVzID0gdGhpcy5fZW1vamlzLm1hcChjYXRlZ29yeSA9PiBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yeSwgeyBlbW9qaXMgOiBbXSB9KSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc2VhcmNoSGFuZGxlcih2YWx1ZSkge1xyXG4gICAgbGV0IGZpbHRlcmVkRW1vamlzID0gdGhpcy5lbW9qaXNDYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBPYmplY3QuYXNzaWduKHt9LCBjYXRlZ29yeSwgeyBlbW9qaXMgOiBbXSB9KSk7XHJcbiAgICBcclxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLl9lbW9qaXMpLmZvckVhY2goaSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5fZW1vamlzW2ldO1xyXG5cclxuICAgICAgY2F0ZWdvcnkuZW1vamlzLmZvckVhY2goZW1vamkgPT4ge1xyXG4gICAgICAgIGlmIChlbW9qaVsxXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRW1vamlzW2ldLmVtb2ppcy5wdXNoKGVtb2ppKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lbW9qaXMgPSBmaWx0ZXJlZEVtb2ppcztcclxuICB9XHJcblxyXG4gIGNhdGVnb3J5U2VsZWN0aW9uSGFuZGxlcihldmVudCkge1xyXG4gICAgdGhpcy5lbW9qaUxpc3RDb21wb25lbnQuc2VsZWN0Q2F0ZWdvcnkoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=