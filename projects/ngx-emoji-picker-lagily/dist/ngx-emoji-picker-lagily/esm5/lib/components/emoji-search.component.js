/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var EmojiSearchComponent = /** @class */ (function () {
    function EmojiSearchComponent() {
        var _this = this;
        this.searchEmitter = new EventEmitter();
        this._searchValue = new Subject();
        this._destroyed = new Subject();
        this._searchValue
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.searchEmitter.emit(value);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EmojiSearchComponent.prototype.handleInputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._searchValue.next(event);
    };
    /**
     * @return {?}
     */
    EmojiSearchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next(true);
    };
    EmojiSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-search',
                    template: "\n  <input type=\"text\" autocomplete=\"off\" #input (input)=\"handleInputChange($event.target.value)\" placeholder=\"Search\"/>\n  ",
                    styles: ["input{width:100%;padding:5px 10px;border:1px solid #f0f0f0;outline:0;font-size:14px;font-weight:inherit;box-sizing:border-box}input:focus{border-color:#d7d7d7}"]
                }] }
    ];
    /** @nocollapse */
    EmojiSearchComponent.ctorParameters = function () { return []; };
    EmojiSearchComponent.propDecorators = {
        searchEmitter: [{ type: Output, args: ['search',] }],
        input: [{ type: ViewChild, args: ['input',] }]
    };
    return EmojiSearchComponent;
}());
export { EmojiSearchComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0M7SUFlRTtRQUFBLGlCQU1DO1FBWmlCLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkUsaUJBQVksR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUcxQyxJQUFJLENBQUMsWUFBWTthQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2hDLFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDZCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBRXhCLFFBQVEsRUFBRSxzSUFFVDs7aUJBQ0Y7Ozs7O2dDQUdFLE1BQU0sU0FBQyxRQUFRO3dCQUNmLFNBQVMsU0FBQyxPQUFPOztJQW9CcEIsMkJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXRCWSxvQkFBb0I7OztJQUMvQiw2Q0FBMkU7O0lBQzNFLHFDQUFzQzs7Ozs7SUFFdEMsNENBQXNEOzs7OztJQUN0RCwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vtb2ppLXNlYXJjaCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1zZWFyY2guc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgI2lucHV0IChpbnB1dCk9XCJoYW5kbGVJbnB1dENoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIvPlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaVNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQE91dHB1dCgnc2VhcmNoJykgc2VhcmNoRW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBfc2VhcmNoVmFsdWU6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSlcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hFbWl0dGVyLmVtaXQodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZS5uZXh0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==