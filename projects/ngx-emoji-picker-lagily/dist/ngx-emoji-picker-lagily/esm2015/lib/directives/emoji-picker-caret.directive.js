/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { CaretEvent } from '../misc/caret-event';
export class EmojiPickerCaretDirective {
    /**
     * @param {?} _el
     */
    constructor(_el) {
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
        (event1, event2) => {
            return CaretEvent.compare(event1, event2);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.caretEmitter.emit(event);
            this._lastCaretEvent = event.clone();
        }));
    }
    /**
     * @return {?}
     */
    get doc() {
        if (!this._doc) {
            this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
        }
        return this._doc;
    }
    /**
     * @return {?}
     */
    get win() {
        if (!this._win) {
            this._win = this.doc.defaultView || this.doc.parentWindow || window;
        }
        return this._win;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed$.next(true);
    }
    /**
     * @return {?}
     */
    updateCaretPosition() {
        /** @type {?} */
        const cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    }
    /**
     * @return {?}
     */
    updateCaretDueMutation() {
        /** @type {?} */
        const cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        /** @type {?} */
        let textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._caretEvent$.next(cEvent);
        }));
    }
}
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
EmojiPickerCaretDirective.ctorParameters = () => [
    { type: ElementRef }
];
EmojiPickerCaretDirective.propDecorators = {
    caretEmitter: [{ type: Output, args: ['emojiPickerCaretEmitter',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWNhcmV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZW1vamktcGlja2VyLWNhcmV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWWpELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUEyQnBDLFlBQ1UsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUEzQlUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRXpFLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQWMsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFFckMsb0JBQWUsR0FBZSxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQXdCbkUsSUFBSSxDQUFDLFlBQVk7YUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxvQkFBb0I7Ozs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDekUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQzthQUNGLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN0QyxDQUFDLEVBQUMsQ0FDSDtJQUNILENBQUM7Ozs7SUE1QkQsSUFBSSxHQUFHO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO1NBQ2pHO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFBO1NBQ3BFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7Ozs7SUFnQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQ3ZILE1BQU0sSUFBSSxLQUFLLENBQUMsNEZBQTRGLENBQUMsQ0FBQztTQUMvRztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELG1CQUFtQjs7Y0FDWCxNQUFNLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUN4RixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsc0JBQXNCOztjQUNkLE1BQU0sR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDOztZQUNwRixZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUN0RixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUVyRTs7OztXQUlHO1FBRUYsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsdUJBQXVCO29CQUNsQyxXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyxlQUFlLEVBQUUsdUJBQXVCO29CQUN4QyxTQUFTLEVBQUUsdUJBQXVCO29CQUNsQyxzQkFBc0IsRUFBRSxnQ0FBZ0M7aUJBQ3pEO2FBQ0Y7Ozs7WUFsQnlDLFVBQVU7OzsyQkFvQmpELE1BQU0sU0FBQyx5QkFBeUI7Ozs7SUFBakMsaURBQWlGOzs7OztJQUVqRixpREFBaUQ7Ozs7O0lBQ2pELGdEQUE2Qzs7Ozs7SUFFN0Msb0RBQXFFOzs7OztJQUVyRSx5Q0FBYTs7Ozs7SUFDYix5Q0FBYTs7Ozs7SUFtQlgsd0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBDYXJldEV2ZW50IH0gZnJvbSAnLi4vbWlzYy9jYXJldC1ldmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlbW9qaVBpY2tlckNhcmV0RW1pdHRlcl0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoa2V5dXApJzogJ3VwZGF0ZUNhcmV0UG9zaXRpb24oKScsXHJcbiAgICAnKG1vdXNldXApJzogJ3VwZGF0ZUNhcmV0UG9zaXRpb24oKScsXHJcbiAgICAnKHNlbGVjdHN0YXJ0KSc6ICd1cGRhdGVDYXJldFBvc2l0aW9uKCknLFxyXG4gICAgJyhmb2N1cyknOiAndXBkYXRlQ2FyZXRQb3NpdGlvbigpJyxcclxuICAgICcoRE9NU3VidHJlZU1vZGlmaWVkKSc6ICd1cGRhdGVDYXJldER1ZU11dGF0aW9uKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1vamlQaWNrZXJDYXJldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBAT3V0cHV0KCdlbW9qaVBpY2tlckNhcmV0RW1pdHRlcicpIGNhcmV0RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FyZXRFdmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfY2FyZXRFdmVudCQgPSBuZXcgU3ViamVjdDxDYXJldEV2ZW50PigpO1xyXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIF9sYXN0Q2FyZXRFdmVudDogQ2FyZXRFdmVudCA9IENhcmV0RXZlbnQuZ2VuZXJhdGVOdWxsRXZlbnQoKTtcclxuXHJcbiAgcHJpdmF0ZSBfd2luO1xyXG4gIHByaXZhdGUgX2RvYztcclxuXHJcbiAgZ2V0IGRvYygpIHtcclxuICAgIGlmICghdGhpcy5fZG9jKSB7XHJcbiAgICAgIHRoaXMuX2RvYyA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQub3duZXJEb2N1bWVudCB8fCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmRvY3VtZW50IHx8IGRvY3VtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9kb2M7XHJcbiAgfVxyXG5cclxuICBnZXQgd2luKCkge1xyXG4gICAgaWYgKCF0aGlzLl93aW4pIHtcclxuICAgICAgdGhpcy5fd2luID0gdGhpcy5kb2MuZGVmYXVsdFZpZXcgfHwgdGhpcy5kb2MucGFyZW50V2luZG93IHx8IHdpbmRvd1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl93aW5cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHRoaXMuX2NhcmV0RXZlbnQkXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKGV2ZW50MSwgZXZlbnQyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIENhcmV0RXZlbnQuY29tcGFyZShldmVudDEsIGV2ZW50Mik7XHJcbiAgICAgIH0pKVxyXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogQ2FyZXRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FyZXRFbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuX2xhc3RDYXJldEV2ZW50ID0gZXZlbnQuY2xvbmUoKVxyXG4gICAgICB9KVxyXG4gICAgO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSAmJiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJyhlbW9qaVBpY2tlclBvc2l0aW9uRW1pdHRlcikgc2hvdWxkIG9ubHkgd29yayBvbiBjb250ZW50ZWRpdGFibGUgZW5hYmxlZCBvciBpbnB1dCBlbGVtZW50cycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQkLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDYXJldFBvc2l0aW9uKCkge1xyXG4gICAgY29uc3QgY0V2ZW50ID0gQ2FyZXRFdmVudC5nZW5lcmF0ZUNhcmV0RXZlbnQodGhpcy53aW4sIHRoaXMuZG9jLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuX2NhcmV0RXZlbnQkLm5leHQoY0V2ZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNhcmV0RHVlTXV0YXRpb24oKSB7XHJcbiAgICBjb25zdCBjRXZlbnQgPSBDYXJldEV2ZW50LmdlbmVyYXRlQ2FyZXRFdmVudCh0aGlzLndpbiwgdGhpcy5kb2MsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgbGV0IHRleHRNb3ZlbWVudCA9IGNFdmVudC50ZXh0Q29udGVudC5sZW5ndGggLSB0aGlzLl9sYXN0Q2FyZXRFdmVudC50ZXh0Q29udGVudC5sZW5ndGg7XHJcbiAgICBjRXZlbnQuY2FyZXRPZmZzZXQgPSB0aGlzLl9sYXN0Q2FyZXRFdmVudC5jYXJldE9mZnNldCArIHRleHRNb3ZlbWVudDtcclxuXHJcbiAgICAvKiogY2hhbmdlIGRldGVjdGlvbiBhZnRlciBET01TdWJ0cmVlTW9kaWZpZWQgZXZlbnQgaXMgd2VpcmRcclxuICAgICAqIENoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKSwgQ2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCksIEFwcGxpY2F0aW9uUmVmLnRpY2soKSwgTmdab25lLnJ1bigpXHJcbiAgICAgKiBhbGwgb2YgdGhvc2UgbWV0aG9kcyBkaWQgbm90IHdvcmsgYXMgZXhwZWN0ZWQuXHJcbiAgICAgKiBBcyBhIHRlbXBvcmFyeSBoYWNrIEkgYW0gZW1pdHRpbmcgYW4gZXZlbnQgYWZ0ZXIgYSBzaG9ydCB0aW1lb3V0LCB3aGljaCBpcyBmaW5lIGR1ZSB0byB0aGUgX2NhcmV0RXZlbnQkIHNtYXJ0IHN0cmVhbVxyXG4gICAgICovXHJcblxyXG4gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgdGhpcy5fY2FyZXRFdmVudCQubmV4dChjRXZlbnQpO1xyXG4gICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=