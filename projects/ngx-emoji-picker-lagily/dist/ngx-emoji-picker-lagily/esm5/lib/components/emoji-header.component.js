/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
var EmojiHeaderComponent = /** @class */ (function () {
    function EmojiHeaderComponent() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
    EmojiHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-header',
                    template: "\n  <emoji-categories [labelFor]=\"labelFor\" [emojisCategories]=\"emojisCategories\" (categorySelection)=\"categorySelection.emit($event)\"></emoji-categories>\n  <emoji-search (search)=\"searchEmitter.emit($event)\"></emoji-search>\n  ",
                    styles: [":host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}"]
                }] }
    ];
    /** @nocollapse */
    EmojiHeaderComponent.ctorParameters = function () { return []; };
    EmojiHeaderComponent.propDecorators = {
        labelFor: [{ type: Input, args: ['labelFor',] }],
        emojisCategories: [{ type: Input, args: ['emojisCategories',] }],
        categorySelection: [{ type: Output, args: ['categorySelection',] }],
        searchEmitter: [{ type: Output, args: ['search',] }]
    };
    return EmojiHeaderComponent;
}());
export { EmojiHeaderComponent };
if (false) {
    /** @type {?} */
    EmojiHeaderComponent.prototype.labelFor;
    /** @type {?} */
    EmojiHeaderComponent.prototype.emojisCategories;
    /** @type {?} */
    EmojiHeaderComponent.prototype.categorySelection;
    /** @type {?} */
    EmojiHeaderComponent.prototype.searchEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV0RTtJQWVFO1FBSDZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFBO0lBRzVELENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBRXhCLFFBQVEsRUFBRSwrT0FHVDs7aUJBQ0Y7Ozs7OzJCQUVFLEtBQUssU0FBQyxVQUFVO21DQUNoQixLQUFLLFNBQUMsa0JBQWtCO29DQUV4QixNQUFNLFNBQUMsbUJBQW1CO2dDQUMxQixNQUFNLFNBQUMsUUFBUTs7SUFJbEIsMkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVRZLG9CQUFvQjs7O0lBQy9CLHdDQUEyQjs7SUFDM0IsZ0RBQTJDOztJQUUzQyxpREFBd0U7O0lBQ3hFLDZDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktaGVhZGVyJyxcclxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWhlYWRlci5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZW1vamktY2F0ZWdvcmllcyBbbGFiZWxGb3JdPVwibGFiZWxGb3JcIiBbZW1vamlzQ2F0ZWdvcmllc109XCJlbW9qaXNDYXRlZ29yaWVzXCIgKGNhdGVnb3J5U2VsZWN0aW9uKT1cImNhdGVnb3J5U2VsZWN0aW9uLmVtaXQoJGV2ZW50KVwiPjwvZW1vamktY2F0ZWdvcmllcz5cclxuICA8ZW1vamktc2VhcmNoIChzZWFyY2gpPVwic2VhcmNoRW1pdHRlci5lbWl0KCRldmVudClcIj48L2Vtb2ppLXNlYXJjaD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbW9qaUhlYWRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdsYWJlbEZvcicpIGxhYmVsRm9yXHJcbiAgQElucHV0KCdlbW9qaXNDYXRlZ29yaWVzJykgZW1vamlzQ2F0ZWdvcmllc1xyXG5cclxuICBAT3V0cHV0KCdjYXRlZ29yeVNlbGVjdGlvbicpIGNhdGVnb3J5U2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KClcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==