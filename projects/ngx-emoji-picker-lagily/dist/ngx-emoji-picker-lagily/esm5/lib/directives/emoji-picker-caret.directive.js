/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { CaretEvent } from '../misc/caret-event';
var EmojiPickerCaretDirective = /** @class */ (function () {
    function EmojiPickerCaretDirective(_el) {
        var _this = this;
        this._el = _el;
        this.caretEmitter = new EventEmitter();
        this._caretEvent$ = new Subject();
        this._destroyed$ = new Subject();
        this._lastCaretEvent = CaretEvent.generateNullEvent();
        this._caretEvent$
            .pipe(takeUntil(this._destroyed$), distinctUntilChanged((/**
         * @param {?} event1
         * @param {?} event2
         * @return {?}
         */
        function (event1, event2) {
            return CaretEvent.compare(event1, event2);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.caretEmitter.emit(event);
            _this._lastCaretEvent = event.clone();
        }));
    }
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "doc", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._doc) {
                this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
            }
            return this._doc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "win", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._win) {
                this._win = this.doc.defaultView || this.doc.parentWindow || window;
            }
            return this._win;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EmojiPickerCaretDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    };
    /**
     * @return {?}
     */
    EmojiPickerCaretDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed$.next(true);
    };
    /**
     * @return {?}
     */
    EmojiPickerCaretDirective.prototype.updateCaretPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    };
    /**
     * @return {?}
     */
    EmojiPickerCaretDirective.prototype.updateCaretDueMutation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        /** @type {?} */
        var textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._caretEvent$.next(cEvent);
        }));
    };
    EmojiPickerCaretDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[emojiPickerCaretEmitter]',
                    host: {
                        '(keyup)': 'updateCaretPosition()',
                        '(mouseup)': 'updateCaretPosition()',
                        '(selectstart)': 'updateCaretPosition()',
                        '(focus)': 'updateCaretPosition()',
                        '(DOMSubtreeModified)': 'updateCaretDueMutation($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    EmojiPickerCaretDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    EmojiPickerCaretDirective.propDecorators = {
        caretEmitter: [{ type: Output, args: ['emojiPickerCaretEmitter',] }]
    };
    return EmojiPickerCaretDirective;
}());
export { EmojiPickerCaretDirective };
if (false) {
    /** @type {?} */
    EmojiPickerCaretDirective.prototype.caretEmitter;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerCaretDirective.prototype._caretEvent$;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerCaretDirective.prototype._destroyed$;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerCaretDirective.prototype._lastCaretEvent;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerCaretDirective.prototype._win;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerCaretDirective.prototype._doc;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerCaretDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWNhcmV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZW1vamktcGlja2VyLWNhcmV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpEO0lBcUNFLG1DQUNVLEdBQWU7UUFEekIsaUJBWUM7UUFYUyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBM0JVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUV6RSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFjLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBRXJDLG9CQUFlLEdBQWUsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUF3Qm5FLElBQUksQ0FBQyxZQUFZO2FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsb0JBQW9COzs7OztRQUFDLFVBQUMsTUFBTSxFQUFFLE1BQU07WUFDckUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQzthQUNGLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWlCO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3RDLENBQUMsRUFBQyxDQUNIO0lBQ0gsQ0FBQztJQTVCRCxzQkFBSSwwQ0FBRzs7OztRQUFQO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQzthQUNqRztZQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFHOzs7O1FBQVA7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQTthQUNwRTtZQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNsQixDQUFDOzs7T0FBQTs7OztJQWdCRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUN2SCxNQUFNLElBQUksS0FBSyxDQUFDLDRGQUE0RixDQUFDLENBQUM7U0FDL0c7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELHVEQUFtQjs7O0lBQW5COztZQUNRLE1BQU0sR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCwwREFBc0I7OztJQUF0QjtRQUFBLGlCQWNDOztZQWJPLE1BQU0sR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDOztZQUNwRixZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUN0RixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUVyRTs7OztXQUlHO1FBRUYsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSx1QkFBdUI7d0JBQ2xDLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUI7d0JBQ3hDLFNBQVMsRUFBRSx1QkFBdUI7d0JBQ2xDLHNCQUFzQixFQUFFLGdDQUFnQztxQkFDekQ7aUJBQ0Y7Ozs7Z0JBbEJ5QyxVQUFVOzs7K0JBb0JqRCxNQUFNLFNBQUMseUJBQXlCOztJQXNFbkMsZ0NBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQXZFWSx5QkFBeUI7OztJQUNwQyxpREFBaUY7Ozs7O0lBRWpGLGlEQUFpRDs7Ozs7SUFDakQsZ0RBQTZDOzs7OztJQUU3QyxvREFBcUU7Ozs7O0lBRXJFLHlDQUFhOzs7OztJQUNiLHlDQUFhOzs7OztJQW1CWCx3Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IENhcmV0RXZlbnQgfSBmcm9tICcuLi9taXNjL2NhcmV0LWV2ZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Vtb2ppUGlja2VyQ2FyZXRFbWl0dGVyXScsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhrZXl1cCknOiAndXBkYXRlQ2FyZXRQb3NpdGlvbigpJyxcclxuICAgICcobW91c2V1cCknOiAndXBkYXRlQ2FyZXRQb3NpdGlvbigpJyxcclxuICAgICcoc2VsZWN0c3RhcnQpJzogJ3VwZGF0ZUNhcmV0UG9zaXRpb24oKScsXHJcbiAgICAnKGZvY3VzKSc6ICd1cGRhdGVDYXJldFBvc2l0aW9uKCknLFxyXG4gICAgJyhET01TdWJ0cmVlTW9kaWZpZWQpJzogJ3VwZGF0ZUNhcmV0RHVlTXV0YXRpb24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlckNhcmV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBPdXRwdXQoJ2Vtb2ppUGlja2VyQ2FyZXRFbWl0dGVyJykgY2FyZXRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYXJldEV2ZW50PigpO1xyXG5cclxuICBwcml2YXRlIF9jYXJldEV2ZW50JCA9IG5ldyBTdWJqZWN0PENhcmV0RXZlbnQ+KCk7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIHByaXZhdGUgX2xhc3RDYXJldEV2ZW50OiBDYXJldEV2ZW50ID0gQ2FyZXRFdmVudC5nZW5lcmF0ZU51bGxFdmVudCgpO1xyXG5cclxuICBwcml2YXRlIF93aW47XHJcbiAgcHJpdmF0ZSBfZG9jO1xyXG5cclxuICBnZXQgZG9jKCkge1xyXG4gICAgaWYgKCF0aGlzLl9kb2MpIHtcclxuICAgICAgdGhpcy5fZG9jID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50IHx8IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZG9jdW1lbnQgfHwgZG9jdW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2RvYztcclxuICB9XHJcblxyXG4gIGdldCB3aW4oKSB7XHJcbiAgICBpZiAoIXRoaXMuX3dpbikge1xyXG4gICAgICB0aGlzLl93aW4gPSB0aGlzLmRvYy5kZWZhdWx0VmlldyB8fCB0aGlzLmRvYy5wYXJlbnRXaW5kb3cgfHwgd2luZG93XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3dpblxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5fY2FyZXRFdmVudCRcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoZXZlbnQxLCBldmVudDIpID0+IHtcclxuICAgICAgICByZXR1cm4gQ2FyZXRFdmVudC5jb21wYXJlKGV2ZW50MSwgZXZlbnQyKTtcclxuICAgICAgfSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBDYXJldEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJldEVtaXR0ZXIuZW1pdChldmVudCk7XHJcbiAgICAgICAgdGhpcy5fbGFzdENhcmV0RXZlbnQgPSBldmVudC5jbG9uZSgpXHJcbiAgICAgIH0pXHJcbiAgICA7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpICYmIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignKGVtb2ppUGlja2VyUG9zaXRpb25FbWl0dGVyKSBzaG91bGQgb25seSB3b3JrIG9uIGNvbnRlbnRlZGl0YWJsZSBlbmFibGVkIG9yIGlucHV0IGVsZW1lbnRzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3llZCQubmV4dCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNhcmV0UG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBjRXZlbnQgPSBDYXJldEV2ZW50LmdlbmVyYXRlQ2FyZXRFdmVudCh0aGlzLndpbiwgdGhpcy5kb2MsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5fY2FyZXRFdmVudCQubmV4dChjRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2FyZXREdWVNdXRhdGlvbigpIHtcclxuICAgIGNvbnN0IGNFdmVudCA9IENhcmV0RXZlbnQuZ2VuZXJhdGVDYXJldEV2ZW50KHRoaXMud2luLCB0aGlzLmRvYywgdGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICBsZXQgdGV4dE1vdmVtZW50ID0gY0V2ZW50LnRleHRDb250ZW50Lmxlbmd0aCAtIHRoaXMuX2xhc3RDYXJldEV2ZW50LnRleHRDb250ZW50Lmxlbmd0aDtcclxuICAgIGNFdmVudC5jYXJldE9mZnNldCA9IHRoaXMuX2xhc3RDYXJldEV2ZW50LmNhcmV0T2Zmc2V0ICsgdGV4dE1vdmVtZW50O1xyXG5cclxuICAgIC8qKiBjaGFuZ2UgZGV0ZWN0aW9uIGFmdGVyIERPTVN1YnRyZWVNb2RpZmllZCBldmVudCBpcyB3ZWlyZFxyXG4gICAgICogQ2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpLCBDaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSwgQXBwbGljYXRpb25SZWYudGljaygpLCBOZ1pvbmUucnVuKClcclxuICAgICAqIGFsbCBvZiB0aG9zZSBtZXRob2RzIGRpZCBub3Qgd29yayBhcyBleHBlY3RlZC5cclxuICAgICAqIEFzIGEgdGVtcG9yYXJ5IGhhY2sgSSBhbSBlbWl0dGluZyBhbiBldmVudCBhZnRlciBhIHNob3J0IHRpbWVvdXQsIHdoaWNoIGlzIGZpbmUgZHVlIHRvIHRoZSBfY2FyZXRFdmVudCQgc21hcnQgc3RyZWFtXHJcbiAgICAgKi9cclxuXHJcbiAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICB0aGlzLl9jYXJldEV2ZW50JC5uZXh0KGNFdmVudCk7XHJcbiAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==