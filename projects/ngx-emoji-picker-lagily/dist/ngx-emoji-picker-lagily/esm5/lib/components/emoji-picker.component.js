/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, ElementRef, Renderer, Input } from '@angular/core';
import { DIRECTIONS } from '../misc/picker-directions';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
var EmojiPickerComponent = /** @class */ (function () {
    function EmojiPickerComponent(_renderer, _el) {
        var _this = this;
        this._renderer = _renderer;
        this._el = _el;
        this.selectionEmitter = new EventEmitter();
        this.pickerCloseEmitter = new EventEmitter();
        this._windowResize = new Subject();
        this._destroyed = new Subject();
        this._windowResize
            .pipe(takeUntil(this._destroyed), debounceTime(100))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.setPosition(_this._currentTarget, _this._currentDirection);
        }));
    }
    /**
     * @param {?} target
     * @param {?=} directionCode
     * @return {?}
     */
    EmojiPickerComponent.prototype.setPosition = /**
     * @param {?} target
     * @param {?=} directionCode
     * @return {?}
     */
    function (target, directionCode) {
        if (directionCode === void 0) { directionCode = DIRECTIONS.bottom; }
        if (!target) {
            return console.error('Emoji-Picker: positioning failed due to missing target element or direction code');
        }
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', '');
        /** Store anchor and direction */
        this._currentTarget = target;
        this._currentDirection = directionCode;
        /** @type {?} */
        var targetBorders = target.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var thisBorders = this._el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var heightCorrection = 0;
        /** @type {?} */
        var widthCorrection = 0;
        /** Setting up centering of picker for all cases */
        switch (this._currentDirection) {
            case DIRECTIONS.top:
            case DIRECTIONS.bottom:
                widthCorrection = targetBorders.left - thisBorders.left + (targetBorders.width - thisBorders.width) / 2;
                break;
            case DIRECTIONS.left:
            case DIRECTIONS.right:
                heightCorrection = targetBorders.top - thisBorders.top + (targetBorders.height - thisBorders.height) / 2;
                break;
        }
        /** Setting up relative positioning for all cases */
        switch (this._currentDirection) {
            case DIRECTIONS.top:
                heightCorrection = targetBorders.top - thisBorders.bottom;
                break;
            case DIRECTIONS.left:
                widthCorrection = targetBorders.left - thisBorders.right;
                break;
            case DIRECTIONS.right:
                widthCorrection = targetBorders.right - thisBorders.left;
                break;
            case DIRECTIONS.bottom:
                heightCorrection = targetBorders.bottom - thisBorders.top;
                break;
        }
        /** Correcting positioning due to overflow problems */
        if (thisBorders.bottom + heightCorrection > window.innerHeight) {
            heightCorrection += window.innerHeight - (thisBorders.bottom + heightCorrection);
        }
        if (thisBorders.top + heightCorrection < 0) {
            heightCorrection -= (thisBorders.top + heightCorrection);
        }
        if (thisBorders.right + widthCorrection > window.innerWidth) {
            widthCorrection += window.innerWidth - (thisBorders.right + widthCorrection);
        }
        if (thisBorders.left + widthCorrection < 0) {
            widthCorrection -= (thisBorders.left + widthCorrection);
        }
        /** set the position adjustments to the emoji picker element */
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', "translate(" + widthCorrection + "px," + heightCorrection + "px)");
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EmojiPickerComponent.prototype.onBackground = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** internal mousedowns are ignored */
        if (event === this._lastHostMousedownEvent || event.emojiPickerExempt) {
            return;
        }
        this.pickerCloseEmitter.emit(event);
    };
    /**
     * @return {?}
     */
    EmojiPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next(true);
    };
    EmojiPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-picker',
                    template: "\n  <emoji-content [labelFor]=\"labelFor\" (emoji-selection)=\"selectionEmitter.emit($event)\"></emoji-content>\n  ",
                    host: {
                        '(document:click)': 'onBackground($event)',
                        '(click)': '_lastHostMousedownEvent = $event',
                        '(window:resize)': '_windowResize.next($event)'
                    },
                    styles: [':host { position: absolute; z-index: 9999; }']
                }] }
    ];
    /** @nocollapse */
    EmojiPickerComponent.ctorParameters = function () { return [
        { type: Renderer },
        { type: ElementRef }
    ]; };
    EmojiPickerComponent.propDecorators = {
        labelFor: [{ type: Input, args: ['labelFor',] }],
        selectionEmitter: [{ type: Output, args: ['emoji-select',] }],
        pickerCloseEmitter: [{ type: Output, args: ['picker-close',] }]
    };
    return EmojiPickerComponent;
}());
export { EmojiPickerComponent };
if (false) {
    /** @type {?} */
    EmojiPickerComponent.prototype.labelFor;
    /** @type {?} */
    EmojiPickerComponent.prototype.selectionEmitter;
    /** @type {?} */
    EmojiPickerComponent.prototype.pickerCloseEmitter;
    /** @type {?} */
    EmojiPickerComponent.prototype._lastHostMousedownEvent;
    /** @type {?} */
    EmojiPickerComponent.prototype._currentTarget;
    /** @type {?} */
    EmojiPickerComponent.prototype._currentDirection;
    /** @type {?} */
    EmojiPickerComponent.prototype._windowResize;
    /** @type {?} */
    EmojiPickerComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerComponent.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEQ7SUF5QkUsOEJBQW9CLFNBQW1CLEVBQVUsR0FBZTtRQUFoRSxpQkFNQztRQU5tQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQVZ4QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNekQsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBR3pDLElBQUksQ0FBQyxhQUFhO2FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25ELFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDZCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7Ozs7SUFFRCwwQ0FBVzs7Ozs7SUFB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Qzs7Ozs7SUFFL0IseUNBQTJCOzs7OztJQUFFLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBESVJFQ1RJT05TIH0gZnJvbSAnLi4vbWlzYy9waWNrZXItZGlyZWN0aW9ucyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktcGlja2VyJyxcclxuICBzdHlsZXM6IFsnOmhvc3QgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDk5OTk7IH0nXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxlbW9qaS1jb250ZW50IFtsYWJlbEZvcl09XCJsYWJlbEZvclwiIChlbW9qaS1zZWxlY3Rpb24pPVwic2VsZWN0aW9uRW1pdHRlci5lbWl0KCRldmVudClcIj48L2Vtb2ppLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdvbkJhY2tncm91bmQoJGV2ZW50KScsXHJcbiAgICAnKGNsaWNrKSc6ICdfbGFzdEhvc3RNb3VzZWRvd25FdmVudCA9ICRldmVudCcsXHJcbiAgICAnKHdpbmRvdzpyZXNpemUpJzogJ193aW5kb3dSZXNpemUubmV4dCgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCdsYWJlbEZvcicpIGxhYmVsRm9yO1xyXG4gIEBPdXRwdXQoJ2Vtb2ppLXNlbGVjdCcpIHNlbGVjdGlvbkVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgncGlja2VyLWNsb3NlJykgcGlja2VyQ2xvc2VFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpOyBcclxuXHJcbiAgcHVibGljIF9sYXN0SG9zdE1vdXNlZG93bkV2ZW50O1xyXG4gIHB1YmxpYyBfY3VycmVudFRhcmdldDogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgX2N1cnJlbnREaXJlY3Rpb246IERJUkVDVElPTlM7XHJcblxyXG4gIHB1YmxpYyBfd2luZG93UmVzaXplID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5fd2luZG93UmVzaXplXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpLCBkZWJvdW5jZVRpbWUoMTAwKSlcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9jdXJyZW50VGFyZ2V0LCB0aGlzLl9jdXJyZW50RGlyZWN0aW9uKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHRhcmdldDogRWxlbWVudFJlZiwgZGlyZWN0aW9uQ29kZTogRElSRUNUSU9OUyA9IERJUkVDVElPTlMuYm90dG9tKSB7XHJcbiAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignRW1vamktUGlja2VyOiBwb3NpdGlvbmluZyBmYWlsZWQgZHVlIHRvIG1pc3NpbmcgdGFyZ2V0IGVsZW1lbnQgb3IgZGlyZWN0aW9uIGNvZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcclxuXHJcbiAgICAvKiogU3RvcmUgYW5jaG9yIGFuZCBkaXJlY3Rpb24gKi9cclxuICAgIHRoaXMuX2N1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLl9jdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uQ29kZTtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRCb3JkZXJzID0gdGFyZ2V0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgIHRoaXNCb3JkZXJzID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBsZXQgaGVpZ2h0Q29ycmVjdGlvbiA9IDAsIHdpZHRoQ29ycmVjdGlvbiA9IDA7XHJcblxyXG4gICAgLyoqIFNldHRpbmcgdXAgY2VudGVyaW5nIG9mIHBpY2tlciBmb3IgYWxsIGNhc2VzICovXHJcbiAgICBzd2l0Y2ggKHRoaXMuX2N1cnJlbnREaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBESVJFQ1RJT05TLnRvcDpcclxuICAgICAgY2FzZSBESVJFQ1RJT05TLmJvdHRvbTpcclxuICAgICAgICB3aWR0aENvcnJlY3Rpb24gPSB0YXJnZXRCb3JkZXJzLmxlZnQgLSB0aGlzQm9yZGVycy5sZWZ0ICsgKHRhcmdldEJvcmRlcnMud2lkdGggLSB0aGlzQm9yZGVycy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERJUkVDVElPTlMubGVmdDpcclxuICAgICAgY2FzZSBESVJFQ1RJT05TLnJpZ2h0OlxyXG4gICAgICAgIGhlaWdodENvcnJlY3Rpb24gPSB0YXJnZXRCb3JkZXJzLnRvcCAtIHRoaXNCb3JkZXJzLnRvcCArICh0YXJnZXRCb3JkZXJzLmhlaWdodCAtIHRoaXNCb3JkZXJzLmhlaWdodCkgLyAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBTZXR0aW5nIHVwIHJlbGF0aXZlIHBvc2l0aW9uaW5nIGZvciBhbGwgY2FzZXMgKi9cclxuICAgIHN3aXRjaCAodGhpcy5fY3VycmVudERpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIERJUkVDVElPTlMudG9wOlxyXG4gICAgICAgIGhlaWdodENvcnJlY3Rpb24gPSB0YXJnZXRCb3JkZXJzLnRvcCAtIHRoaXNCb3JkZXJzLmJvdHRvbTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBESVJFQ1RJT05TLmxlZnQ6XHJcbiAgICAgICAgd2lkdGhDb3JyZWN0aW9uID0gdGFyZ2V0Qm9yZGVycy5sZWZ0IC0gdGhpc0JvcmRlcnMucmlnaHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRElSRUNUSU9OUy5yaWdodDpcclxuICAgICAgICB3aWR0aENvcnJlY3Rpb24gPSB0YXJnZXRCb3JkZXJzLnJpZ2h0IC0gdGhpc0JvcmRlcnMubGVmdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBESVJFQ1RJT05TLmJvdHRvbTpcclxuICAgICAgICBoZWlnaHRDb3JyZWN0aW9uID0gdGFyZ2V0Qm9yZGVycy5ib3R0b20gLSB0aGlzQm9yZGVycy50b3A7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvcnJlY3RpbmcgcG9zaXRpb25pbmcgZHVlIHRvIG92ZXJmbG93IHByb2JsZW1zICovXHJcbiAgICBpZiAodGhpc0JvcmRlcnMuYm90dG9tICsgaGVpZ2h0Q29ycmVjdGlvbiA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICBoZWlnaHRDb3JyZWN0aW9uICs9IHdpbmRvdy5pbm5lckhlaWdodCAtICh0aGlzQm9yZGVycy5ib3R0b20gKyBoZWlnaHRDb3JyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpc0JvcmRlcnMudG9wICsgaGVpZ2h0Q29ycmVjdGlvbiA8IDApIHtcclxuICAgICAgaGVpZ2h0Q29ycmVjdGlvbiAtPSAodGhpc0JvcmRlcnMudG9wICsgaGVpZ2h0Q29ycmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXNCb3JkZXJzLnJpZ2h0ICsgd2lkdGhDb3JyZWN0aW9uID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgd2lkdGhDb3JyZWN0aW9uICs9IHdpbmRvdy5pbm5lcldpZHRoIC0gKHRoaXNCb3JkZXJzLnJpZ2h0ICsgd2lkdGhDb3JyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpc0JvcmRlcnMubGVmdCArIHdpZHRoQ29ycmVjdGlvbiA8IDApIHtcclxuICAgICAgd2lkdGhDb3JyZWN0aW9uIC09ICh0aGlzQm9yZGVycy5sZWZ0ICsgd2lkdGhDb3JyZWN0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqIHNldCB0aGUgcG9zaXRpb24gYWRqdXN0bWVudHMgdG8gdGhlIGVtb2ppIHBpY2tlciBlbGVtZW50ICovXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aENvcnJlY3Rpb259cHgsJHtoZWlnaHRDb3JyZWN0aW9ufXB4KWApO1xyXG4gIH1cclxuXHJcbiAgb25CYWNrZ3JvdW5kKGV2ZW50KSB7XHJcbiAgICAvKiogaW50ZXJuYWwgbW91c2Vkb3ducyBhcmUgaWdub3JlZCAqL1xyXG4gICAgaWYgKGV2ZW50ID09PSB0aGlzLl9sYXN0SG9zdE1vdXNlZG93bkV2ZW50IHx8IGV2ZW50LmVtb2ppUGlja2VyRXhlbXB0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBpY2tlckNsb3NlRW1pdHRlci5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==