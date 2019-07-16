/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var EmojiCategoriesComponent = /** @class */ (function () {
    function EmojiCategoriesComponent() {
        this.categorySelection = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EmojiCategoriesComponent.prototype.handleCategorySelection = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.categorySelection.emit(event);
    };
    EmojiCategoriesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-categories',
                    template: "\n  <ng-container *ngFor=\"let category of emojisCategories\">\n    <emoji-button \n      [labelFor]=\"labelFor\"\n      (selection)=\"handleCategorySelection($event)\"\n      [dataToEmit]=\"category\"\n      [emoji]=\"category.icon\"></emoji-button>\n  </ng-container>\n  ",
                    styles: [":host{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 0 10px}"]
                }] }
    ];
    /** @nocollapse */
    EmojiCategoriesComponent.ctorParameters = function () { return []; };
    EmojiCategoriesComponent.propDecorators = {
        labelFor: [{ type: Input, args: ['labelFor',] }],
        emojisCategories: [{ type: Input, args: ['emojisCategories',] }],
        categorySelection: [{ type: Output, args: ['categorySelection',] }]
    };
    return EmojiCategoriesComponent;
}());
export { EmojiCategoriesComponent };
if (false) {
    /** @type {?} */
    EmojiCategoriesComponent.prototype.labelFor;
    /** @type {?} */
    EmojiCategoriesComponent.prototype.emojisCategories;
    /** @type {?} */
    EmojiCategoriesComponent.prototype.categorySelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWNhdGVnb3JpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBbUJFO1FBRjZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFMUQsQ0FBQzs7Ozs7SUFFaEIsMERBQXVCOzs7O0lBQXZCLFVBQXdCLEtBQUs7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBRTVCLFFBQVEsRUFBRSxtUkFRVDs7aUJBQ0Y7Ozs7OzJCQUdFLEtBQUssU0FBQyxVQUFVO21DQUNoQixLQUFLLFNBQUMsa0JBQWtCO29DQUN4QixNQUFNLFNBQUMsbUJBQW1COztJQU83QiwrQkFBQztDQUFBLEFBeEJELElBd0JDO1NBVlksd0JBQXdCOzs7SUFDbkMsNENBQTRCOztJQUM1QixvREFBNEM7O0lBQzVDLHFEQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vtb2ppLWNhdGVnb3JpZXMnLFxyXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktY2F0ZWdvcmllcy5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBlbW9qaXNDYXRlZ29yaWVzXCI+XHJcbiAgICA8ZW1vamktYnV0dG9uIFxyXG4gICAgICBbbGFiZWxGb3JdPVwibGFiZWxGb3JcIlxyXG4gICAgICAoc2VsZWN0aW9uKT1cImhhbmRsZUNhdGVnb3J5U2VsZWN0aW9uKCRldmVudClcIlxyXG4gICAgICBbZGF0YVRvRW1pdF09XCJjYXRlZ29yeVwiXHJcbiAgICAgIFtlbW9qaV09XCJjYXRlZ29yeS5pY29uXCI+PC9lbW9qaS1idXR0b24+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtb2ppQ2F0ZWdvcmllc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCdsYWJlbEZvcicpIGxhYmVsRm9yO1xyXG4gIEBJbnB1dCgnZW1vamlzQ2F0ZWdvcmllcycpIGVtb2ppc0NhdGVnb3JpZXM7XHJcbiAgQE91dHB1dCgnY2F0ZWdvcnlTZWxlY3Rpb24nKSBjYXRlZ29yeVNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24oZXZlbnQpIHtcclxuICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3Rpb24uZW1pdChldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==