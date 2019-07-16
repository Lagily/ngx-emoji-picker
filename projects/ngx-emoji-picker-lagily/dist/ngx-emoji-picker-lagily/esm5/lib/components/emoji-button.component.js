/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var EmojiButtonComponent = /** @class */ (function () {
    function EmojiButtonComponent() {
        this.selectionEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    EmojiButtonComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () { };
    EmojiButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-button',
                    template: "\n    <label [for]=\"labelFor\"\n      class=\"emoji-button\" \n      (click)=\"selectionEmitter.emit(dataToEmit || emoji); $event.preventDefault();\"\n      (mousedown)=\"$event.preventDefault()\">\n      {{emoji[0]}}\n    </label>\n  ",
                    styles: [":host{display:inline-block}.emoji-button{margin:0;padding:0;border:none;outline:0;background:0 0;width:34px;height:34px;border-radius:3px;font-size:24px;line-height:1.1;cursor:pointer;transition:.2s}.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}"]
                }] }
    ];
    /** @nocollapse */
    EmojiButtonComponent.ctorParameters = function () { return []; };
    EmojiButtonComponent.propDecorators = {
        labelFor: [{ type: Input, args: ['labelFor',] }],
        emoji: [{ type: Input, args: ['emoji',] }],
        dataToEmit: [{ type: Input, args: ['dataToEmit',] }],
        options: [{ type: Input, args: ['options',] }],
        fitzpatrick: [{ type: Input, args: ['fitzpatrick',] }],
        selectionEmitter: [{ type: Output, args: ['selection',] }]
    };
    return EmojiButtonComponent;
}());
export { EmojiButtonComponent };
if (false) {
    /** @type {?} */
    EmojiButtonComponent.prototype.labelFor;
    /** @type {?} */
    EmojiButtonComponent.prototype.emoji;
    /** @type {?} */
    EmojiButtonComponent.prototype.dataToEmit;
    /** @type {?} */
    EmojiButtonComponent.prototype.options;
    /** @type {?} */
    EmojiButtonComponent.prototype.fitzpatrick;
    /** @type {?} */
    EmojiButtonComponent.prototype.selectionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUV0RTtJQXFCRTtRQUZxQixxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUU5RCxDQUFDOzs7O0lBRWhCLDBDQUFXOzs7SUFBWCxjQUFlLENBQUM7O2dCQXZCakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUV4QixRQUFRLEVBQUUsOE9BT1Q7O2lCQUNGOzs7OzsyQkFFRSxLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLE9BQU87NkJBQ2IsS0FBSyxTQUFDLFlBQVk7MEJBQ2xCLEtBQUssU0FBQyxTQUFTOzhCQUNmLEtBQUssU0FBQyxhQUFhO21DQUVuQixNQUFNLFNBQUMsV0FBVzs7SUFLckIsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQVpZLG9CQUFvQjs7O0lBQy9CLHdDQUEyQjs7SUFDM0IscUNBQXFCOztJQUNyQiwwQ0FBK0I7O0lBQy9CLHVDQUF5Qjs7SUFDekIsMkNBQWlDOztJQUVqQyxnREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vtb2ppLWJ1dHRvbicsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1idXR0b24uc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGFiZWwgW2Zvcl09XCJsYWJlbEZvclwiXHJcbiAgICAgIGNsYXNzPVwiZW1vamktYnV0dG9uXCIgXHJcbiAgICAgIChjbGljayk9XCJzZWxlY3Rpb25FbWl0dGVyLmVtaXQoZGF0YVRvRW1pdCB8fCBlbW9qaSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiXHJcbiAgICAgIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAge3tlbW9qaVswXX19XHJcbiAgICA8L2xhYmVsPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVtb2ppQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ2xhYmVsRm9yJykgbGFiZWxGb3JcclxuICBASW5wdXQoJ2Vtb2ppJykgZW1vamlcclxuICBASW5wdXQoJ2RhdGFUb0VtaXQnKSBkYXRhVG9FbWl0XHJcbiAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uc1xyXG4gIEBJbnB1dCgnZml0enBhdHJpY2snKSBmaXR6cGF0cmlja1xyXG5cclxuICBAT3V0cHV0KCdzZWxlY3Rpb24nKSBzZWxlY3Rpb25FbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge31cclxufVxyXG4iXX0=