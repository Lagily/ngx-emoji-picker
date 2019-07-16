/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef } from '@angular/core';
export class EmojiCategoryComponent {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
    }
    /**
     * @return {?}
     */
    scrollIntoView() {
        this._element.nativeElement.scrollIntoView();
    }
}
EmojiCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-category',
                template: `
  <p class="emoji-category">{{category.name}}</p>
  `,
                styles: [".emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:Arial,\"Arial Black\",Tahoma,\"Trebuchet MS\",Verdana}"]
            }] }
];
/** @nocollapse */
EmojiCategoryComponent.ctorParameters = () => [
    { type: ElementRef }
];
EmojiCategoryComponent.propDecorators = {
    category: [{ type: Input, args: ['category',] }]
};
if (false) {
    /** @type {?} */
    EmojiCategoryComponent.prototype.category;
    /**
     * @type {?}
     * @private
     */
    EmojiCategoryComponent.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWVtb2ppLXBpY2tlci1sYWdpbHkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbW9qaS1jYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVU3RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7SUFBSSxDQUFDOzs7O0lBRXRDLGNBQWM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBRTFCLFFBQVEsRUFBRTs7R0FFVDs7YUFDRjs7OztZQVIwQixVQUFVOzs7dUJBV2xDLEtBQUssU0FBQyxVQUFVOzs7O0lBQWpCLDBDQUE0Qjs7Ozs7SUFFaEIsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlbW9qaS1jYXRlZ29yeScsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1jYXRlZ29yeS5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8cCBjbGFzcz1cImVtb2ppLWNhdGVnb3J5XCI+e3tjYXRlZ29yeS5uYW1lfX08L3A+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtb2ppQ2F0ZWdvcnlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgnY2F0ZWdvcnknKSBjYXRlZ29yeTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxJbnRvVmlldygpIHtcclxuICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH1cclxufVxyXG4iXX0=