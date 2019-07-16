/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChildren, QueryList, forwardRef, Output, EventEmitter } from '@angular/core';
import { EmojiCategoryComponent } from './emoji-category.component';
var EmojiListComponent = /** @class */ (function () {
    function EmojiListComponent() {
        this.emojiSelectionEmitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EmojiListComponent.prototype.selectCategory = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emojiCategoryComponents.forEach((/**
         * @param {?} categoryCmp
         * @return {?}
         */
        function (categoryCmp) {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        }));
    };
    EmojiListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-list',
                    template: "\n  <div class=\"emoji-list\">\n    <ng-container *ngFor=\"let emojiCategory of emojis | notEmptyEmojiCategory\">\n      <emoji-category [category]=\"emojiCategory\"></emoji-category>\n      <div class=\"emoji-buttons\">\n        <emoji-button \n        *ngFor=\"let emoji of emojiCategory.emojis\"\n        (selection)=\"emojiSelectionEmitter.emit($event)\"\n        [emoji]=\"emoji\" [labelFor]=\"labelFor\"></emoji-button>\n      </div>\n    </ng-container>\n  </div>\n  ",
                    styles: [":host{overflow-y:auto}.emoji-list{padding:0 10px 10px}.emoji-buttons{display:flex;justify-content:center;flex-wrap:wrap;margin:5px 0}"]
                }] }
    ];
    /** @nocollapse */
    EmojiListComponent.ctorParameters = function () { return []; };
    EmojiListComponent.propDecorators = {
        emojiCategoryComponents: [{ type: ViewChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return EmojiCategoryComponent; })),] }],
        emojis: [{ type: Input, args: ['emojis',] }],
        labelFor: [{ type: Input, args: ['labelFor',] }],
        emojiSelectionEmitter: [{ type: Output, args: ['emoji-selection',] }]
    };
    return EmojiListComponent;
}());
export { EmojiListComponent };
if (false) {
    /** @type {?} */
    EmojiListComponent.prototype.emojiCategoryComponents;
    /** @type {?} */
    EmojiListComponent.prototype.emojis;
    /** @type {?} */
    EmojiListComponent.prototype.labelFor;
    /** @type {?} */
    EmojiListComponent.prototype.emojiSelectionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFO0lBd0JFO1FBRjJCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFM0QsQ0FBQzs7Ozs7SUFFViwyQ0FBYzs7OztJQUFyQixVQUFzQixLQUFLO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxXQUFrQztZQUN0RSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDL0MsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUV0QixRQUFRLEVBQUUsNGRBWVQ7O2lCQUNGOzs7OzswQ0FHRSxZQUFZLFNBQUMsVUFBVTs7O29CQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsRUFBQzt5QkFDckQsS0FBSyxTQUFDLFFBQVE7MkJBQ2QsS0FBSyxTQUFDLFVBQVU7d0NBQ2hCLE1BQU0sU0FBQyxpQkFBaUI7O0lBVzNCLHlCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FmWSxrQkFBa0I7OztJQUM3QixxREFBbUg7O0lBQ25ILG9DQUF3Qjs7SUFDeEIsc0NBQTRCOztJQUM1QixtREFBMkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgZm9yd2FyZFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW1vamlDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vZW1vamktY2F0ZWdvcnkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktbGlzdCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1saXN0LnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1saXN0XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbW9qaUNhdGVnb3J5IG9mIGVtb2ppcyB8IG5vdEVtcHR5RW1vamlDYXRlZ29yeVwiPlxyXG4gICAgICA8ZW1vamktY2F0ZWdvcnkgW2NhdGVnb3J5XT1cImVtb2ppQ2F0ZWdvcnlcIj48L2Vtb2ppLWNhdGVnb3J5PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnV0dG9uc1wiPlxyXG4gICAgICAgIDxlbW9qaS1idXR0b24gXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtb2ppIG9mIGVtb2ppQ2F0ZWdvcnkuZW1vamlzXCJcclxuICAgICAgICAoc2VsZWN0aW9uKT1cImVtb2ppU2VsZWN0aW9uRW1pdHRlci5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIFtlbW9qaV09XCJlbW9qaVwiIFtsYWJlbEZvcl09XCJsYWJlbEZvclwiPjwvZW1vamktYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaUxpc3RDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBFbW9qaUNhdGVnb3J5Q29tcG9uZW50KSkgZW1vamlDYXRlZ29yeUNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbW9qaUNhdGVnb3J5Q29tcG9uZW50PjtcclxuICBASW5wdXQoJ2Vtb2ppcycpIGVtb2ppcztcclxuICBASW5wdXQoJ2xhYmVsRm9yJykgbGFiZWxGb3I7XHJcbiAgQE91dHB1dCgnZW1vamktc2VsZWN0aW9uJykgZW1vamlTZWxlY3Rpb25FbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RDYXRlZ29yeShldmVudCkge1xyXG4gICAgdGhpcy5lbW9qaUNhdGVnb3J5Q29tcG9uZW50cy5mb3JFYWNoKChjYXRlZ29yeUNtcDpFbW9qaUNhdGVnb3J5Q29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmIChjYXRlZ29yeUNtcFsnY2F0ZWdvcnknXS5uYW1lID09PSBldmVudC5uYW1lKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlDbXAuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==