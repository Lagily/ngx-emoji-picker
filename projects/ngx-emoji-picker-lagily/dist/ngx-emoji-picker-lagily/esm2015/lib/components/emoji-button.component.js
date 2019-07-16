/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class EmojiButtonComponent {
    constructor() {
        this.selectionEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnChanges() { }
}
EmojiButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-button',
                template: `
    <label [for]="labelFor"
      class="emoji-button" 
      (click)="selectionEmitter.emit(dataToEmit || emoji); $event.preventDefault();"
      (mousedown)="$event.preventDefault()">
      {{emoji[0]}}
    </label>
  `,
                styles: [":host{display:inline-block}.emoji-button{margin:0;padding:0;border:none;outline:0;background:0 0;width:34px;height:34px;border-radius:3px;font-size:24px;line-height:1.1;cursor:pointer;transition:.2s}.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}"]
            }] }
];
/** @nocollapse */
EmojiButtonComponent.ctorParameters = () => [];
EmojiButtonComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emoji: [{ type: Input, args: ['emoji',] }],
    dataToEmit: [{ type: Input, args: ['dataToEmit',] }],
    options: [{ type: Input, args: ['options',] }],
    fitzpatrick: [{ type: Input, args: ['fitzpatrick',] }],
    selectionEmitter: [{ type: Output, args: ['selection',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQWN0RSxNQUFNLE9BQU8sb0JBQW9CO0lBUy9CO1FBRnFCLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBRTlELENBQUM7Ozs7SUFFaEIsV0FBVyxLQUFJLENBQUM7OztZQXZCakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUV4QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDs7YUFDRjs7Ozs7dUJBRUUsS0FBSyxTQUFDLFVBQVU7b0JBQ2hCLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxZQUFZO3NCQUNsQixLQUFLLFNBQUMsU0FBUzswQkFDZixLQUFLLFNBQUMsYUFBYTsrQkFFbkIsTUFBTSxTQUFDLFdBQVc7Ozs7SUFObkIsd0NBQTJCOztJQUMzQixxQ0FBcUI7O0lBQ3JCLDBDQUErQjs7SUFDL0IsdUNBQXlCOztJQUN6QiwyQ0FBaUM7O0lBRWpDLGdEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktYnV0dG9uJyxcclxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWJ1dHRvbi5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsYWJlbCBbZm9yXT1cImxhYmVsRm9yXCJcclxuICAgICAgY2xhc3M9XCJlbW9qaS1idXR0b25cIiBcclxuICAgICAgKGNsaWNrKT1cInNlbGVjdGlvbkVtaXR0ZXIuZW1pdChkYXRhVG9FbWl0IHx8IGVtb2ppKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XCJcclxuICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG4gICAgICB7e2Vtb2ppWzBdfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1vamlCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgnbGFiZWxGb3InKSBsYWJlbEZvclxyXG4gIEBJbnB1dCgnZW1vamknKSBlbW9qaVxyXG4gIEBJbnB1dCgnZGF0YVRvRW1pdCcpIGRhdGFUb0VtaXRcclxuICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zXHJcbiAgQElucHV0KCdmaXR6cGF0cmljaycpIGZpdHpwYXRyaWNrXHJcblxyXG4gIEBPdXRwdXQoJ3NlbGVjdGlvbicpIHNlbGVjdGlvbkVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7fVxyXG59XHJcbiJdfQ==