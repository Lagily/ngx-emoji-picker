/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
var EmojiCategoryComponent = /** @class */ (function () {
    function EmojiCategoryComponent(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    EmojiCategoryComponent.prototype.scrollIntoView = /**
     * @return {?}
     */
    function () {
        this._element.nativeElement.scrollIntoView();
    };
    EmojiCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-category',
                    template: "\n  <p class=\"emoji-category\">{{category.name}}</p>\n  ",
                    styles: [".emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:Arial,\"Arial Black\",Tahoma,\"Trebuchet MS\",Verdana}"]
                }] }
    ];
    /** @nocollapse */
    EmojiCategoryComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EmojiCategoryComponent.propDecorators = {
        category: [{ type: Input, args: ['category',] }]
    };
    return EmojiCategoryComponent;
}());
export { EmojiCategoryComponent };
if (false) {
    /** @type {?} */
    EmojiCategoryComponent.prototype.category;
    /**
     * @type {?}
     * @private
     */
    EmojiCategoryComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWVtb2ppLXBpY2tlci1sYWdpbHkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbW9qaS1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RDtJQVdFLGdDQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZO0lBQUksQ0FBQzs7OztJQUV0QywrQ0FBYzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBRTFCLFFBQVEsRUFBRSwyREFFVDs7aUJBQ0Y7Ozs7Z0JBUjBCLFVBQVU7OzsyQkFXbEMsS0FBSyxTQUFDLFVBQVU7O0lBT25CLDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FSWSxzQkFBc0I7OztJQUNqQywwQ0FBNEI7Ozs7O0lBRWhCLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktY2F0ZWdvcnknLFxyXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktY2F0ZWdvcnkuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHAgY2xhc3M9XCJlbW9qaS1jYXRlZ29yeVwiPnt7Y2F0ZWdvcnkubmFtZX19PC9wPlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaUNhdGVnb3J5Q29tcG9uZW50IHtcclxuICBASW5wdXQoJ2NhdGVnb3J5JykgY2F0ZWdvcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBwdWJsaWMgc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9XHJcbn1cclxuIl19