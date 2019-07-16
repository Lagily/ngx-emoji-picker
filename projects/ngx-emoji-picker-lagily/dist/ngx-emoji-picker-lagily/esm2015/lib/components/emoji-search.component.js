/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class EmojiSearchComponent {
    constructor() {
        this.searchEmitter = new EventEmitter();
        this._searchValue = new Subject();
        this._destroyed = new Subject();
        this._searchValue
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.searchEmitter.emit(value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInputChange(event) {
        this._searchValue.next(event);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next(true);
    }
}
EmojiSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-search',
                template: `
  <input type="text" autocomplete="off" #input (input)="handleInputChange($event.target.value)" placeholder="Search"/>
  `,
                styles: ["input{width:100%;padding:5px 10px;border:1px solid #f0f0f0;outline:0;font-size:14px;font-weight:inherit;box-sizing:border-box}input:focus{border-color:#d7d7d7}"]
            }] }
];
/** @nocollapse */
EmojiSearchComponent.ctorParameters = () => [];
EmojiSearchComponent.propDecorators = {
    searchEmitter: [{ type: Output, args: ['search',] }],
    input: [{ type: ViewChild, args: ['input',] }]
};
if (false) {
    /** @type {?} */
    EmojiSearchComponent.prototype.searchEmitter;
    /** @type {?} */
    EmojiSearchComponent.prototype.input;
    /**
     * @type {?}
     * @private
     */
    EmojiSearchComponent.prototype._searchValue;
    /**
     * @type {?}
     * @private
     */
    EmojiSearchComponent.prototype._destroyed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXM0MsTUFBTSxPQUFPLG9CQUFvQjtJQU8vQjtRQU5rQixrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR25FLGlCQUFZLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFHMUMsSUFBSSxDQUFDLFlBQVk7YUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNoQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUV4QixRQUFRLEVBQUU7O0dBRVQ7O2FBQ0Y7Ozs7OzRCQUdFLE1BQU0sU0FBQyxRQUFRO29CQUNmLFNBQVMsU0FBQyxPQUFPOzs7O0lBRGxCLDZDQUEyRTs7SUFDM0UscUNBQXNDOzs7OztJQUV0Qyw0Q0FBc0Q7Ozs7O0lBQ3RELDBDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktc2VhcmNoJyxcclxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLXNlYXJjaC5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAjaW5wdXQgKGlucHV0KT1cImhhbmRsZUlucHV0Q2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIi8+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtb2ppU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBAT3V0cHV0KCdzZWFyY2gnKSBzZWFyY2hFbWl0dGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIF9zZWFyY2hWYWx1ZTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxyXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaEVtaXR0ZXIuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlLm5leHQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCh0cnVlKTtcclxuICB9XHJcbn1cclxuIl19