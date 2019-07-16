/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CaretEvent = /** @class */ (function () {
    function CaretEvent(data) {
        Object.assign(this, data);
    }
    /**
     * @return {?}
     */
    CaretEvent.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new CaretEvent(Object.assign({}, this, {
            caretRange: this.caretRange && this.caretRange.cloneRange ? this.caretRange.cloneRange() : this.caretRange
        }));
    };
    /**
     * @return {?}
     */
    CaretEvent.generateNullEvent = /**
     * @return {?}
     */
    function () {
        return new CaretEvent({
            caretOffset: 0,
            textContent: ''
        });
    };
    /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    CaretEvent.comparePropsOfObject = /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    function (r1, r2) {
        for (var k in r1) {
            if (r1[k] !== r2[k]) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} e1
     * @param {?} e2
     * @return {?}
     */
    CaretEvent.compare = /**
     * @param {?} e1
     * @param {?} e2
     * @return {?}
     */
    function (e1, e2) {
        /** @type {?} */
        var changed = 
        /** different when either caretRange is omitted while other exists */
        (!e1.caretRange && e2.caretRange) ||
            (e1.caretRange && !e2.caretRange) ||
            /** different when offset has changed */
            (e1.caretOffset !== e2.caretOffset) ||
            /** different when textContent has changed */
            (e1.textContent !== e2.textContent) ||
            /** different when range object properties changed */
            !this.comparePropsOfObject(e1.caretRange, e2.caretRange);
        return !changed;
    };
    /**
     * @param {?} win
     * @param {?} doc
     * @param {?} element
     * @return {?}
     */
    CaretEvent.generateCaretEvent = /**
     * @param {?} win
     * @param {?} doc
     * @param {?} element
     * @return {?}
     */
    function (win, doc, element) {
        /** @type {?} */
        var caretOffset = 0;
        /** @type {?} */
        var sel;
        /** @type {?} */
        var caretRange;
        /** @type {?} */
        var textContent = element.textContent;
        if (element.tagName.toLowerCase() === 'input') {
            return new CaretEvent({
                caretOffset: element.selectionEnd,
                textContent: element.value
            });
        }
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                /** @type {?} */
                var range = win.getSelection().getRangeAt(0);
                /** @type {?} */
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
                /** Keeping a reference of the range to emit */
                caretRange = range.cloneRange();
            }
        }
        else if ((sel = doc.selection) && sel.type != "Control") {
            /** @type {?} */
            var textRange = sel.createRange();
            /** @type {?} */
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
            /** Keeping a reference of the range to emit and making it compatible */
            caretRange = textRange.duplicate();
            caretRange.insertNode = (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                /** @type {?} */
                var container = document.createElement("div");
                container.appendChild(e);
                caretRange.pasteHTML(container.innerHTML);
            });
        }
        return new CaretEvent({
            caretOffset: caretOffset,
            caretRange: caretRange,
            textContent: textContent
        });
    };
    return CaretEvent;
}());
export { CaretEvent };
if (false) {
    /** @type {?} */
    CaretEvent.prototype.caretOffset;
    /** @type {?} */
    CaretEvent.prototype.caretRange;
    /** @type {?} */
    CaretEvent.prototype.textContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZXQtZXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9taXNjL2NhcmV0LWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUtFLG9CQUFZLElBQUk7UUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsMEJBQUs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDNUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO1NBQzNHLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVNLDRCQUFpQjs7O0lBQXhCO1FBQ0UsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNwQixXQUFXLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVNLCtCQUFvQjs7Ozs7SUFBM0IsVUFBNEIsRUFBRSxFQUFFLEVBQUU7UUFDaEMsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLEtBQUssQ0FBQTthQUNiO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVNLGtCQUFPOzs7OztJQUFkLFVBQWUsRUFBYyxFQUFFLEVBQWM7O1lBQ3JDLE9BQU87UUFDWCxxRUFBcUU7UUFDckUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxV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SUEyRkM7Ozs7SUExRkMsaUNBQW9COztJQUNwQixnQ0FBa0I7O0lBQ2xCLGlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXJldEV2ZW50IHtcclxuICBjYXJldE9mZnNldDogbnVtYmVyO1xyXG4gIGNhcmV0UmFuZ2U6IFJhbmdlO1xyXG4gIHRleHRDb250ZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpOiBDYXJldEV2ZW50IHtcclxuICAgIHJldHVybiBuZXcgQ2FyZXRFdmVudChPYmplY3QuYXNzaWduKHt9LCB0aGlzLCB7XHJcbiAgICAgIGNhcmV0UmFuZ2U6IHRoaXMuY2FyZXRSYW5nZSAmJiB0aGlzLmNhcmV0UmFuZ2UuY2xvbmVSYW5nZSA/IHRoaXMuY2FyZXRSYW5nZS5jbG9uZVJhbmdlKCkgOiB0aGlzLmNhcmV0UmFuZ2VcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZW5lcmF0ZU51bGxFdmVudCgpIHtcclxuICAgIHJldHVybiBuZXcgQ2FyZXRFdmVudCh7XHJcbiAgICAgIGNhcmV0T2Zmc2V0OiAwLFxyXG4gICAgICB0ZXh0Q29udGVudDogJydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbXBhcmVQcm9wc09mT2JqZWN0KHIxLCByMikge1xyXG4gICAgZm9yIChsZXQgayBpbiByMSkge1xyXG4gICAgICBpZiAocjFba10gIT09IHIyW2tdKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbXBhcmUoZTE6IENhcmV0RXZlbnQsIGUyOiBDYXJldEV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjaGFuZ2VkID1cclxuICAgICAgLyoqIGRpZmZlcmVudCB3aGVuIGVpdGhlciBjYXJldFJhbmdlIGlzIG9taXR0ZWQgd2hpbGUgb3RoZXIgZXhpc3RzICovXHJcbiAgICAgICghZTEuY2FyZXRSYW5nZSAmJiBlMi5jYXJldFJhbmdlKSB8fFxyXG4gICAgICAoZTEuY2FyZXRSYW5nZSAmJiAhZTIuY2FyZXRSYW5nZSkgfHxcclxuICAgICAgLyoqIGRpZmZlcmVudCB3aGVuIG9mZnNldCBoYXMgY2hhbmdlZCAqL1xyXG4gICAgICAoZTEuY2FyZXRPZmZzZXQgIT09IGUyLmNhcmV0T2Zmc2V0KSB8fFxyXG4gICAgICAvKiogZGlmZmVyZW50IHdoZW4gdGV4dENvbnRlbnQgaGFzIGNoYW5nZWQgKi9cclxuICAgICAgKGUxLnRleHRDb250ZW50ICE9PSBlMi50ZXh0Q29udGVudCkgfHxcclxuICAgICAgLyoqIGRpZmZlcmVudCB3aGVuIHJhbmdlIG9iamVjdCBwcm9wZXJ0aWVzIGNoYW5nZWQgKi9cclxuICAgICAgIXRoaXMuY29tcGFyZVByb3BzT2ZPYmplY3QoZTEuY2FyZXRSYW5nZSwgZTIuY2FyZXRSYW5nZSlcclxuICAgICAgO1xyXG5cclxuICAgIHJldHVybiAhY2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZW5lcmF0ZUNhcmV0RXZlbnQod2luLCBkb2MsIGVsZW1lbnQ6IEhUTUxFbGVtZW50ICYgSFRNTElucHV0RWxlbWVudCk6IENhcmV0RXZlbnQge1xyXG4gICAgbGV0IGNhcmV0T2Zmc2V0ID0gMCwgc2VsLCBjYXJldFJhbmdlLCB0ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQ2FyZXRFdmVudCh7XHJcbiAgICAgICAgY2FyZXRPZmZzZXQ6IGVsZW1lbnQuc2VsZWN0aW9uRW5kLFxyXG4gICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW4uZ2V0U2VsZWN0aW9uICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgc2VsID0gd2luLmdldFNlbGVjdGlvbigpO1xyXG4gICAgICBpZiAoc2VsLnJhbmdlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB3aW4uZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKTtcclxuICAgICAgICBjb25zdCBwcmVDYXJldFJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpO1xyXG4gICAgICAgIHByZUNhcmV0UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW1lbnQpO1xyXG4gICAgICAgIHByZUNhcmV0UmFuZ2Uuc2V0RW5kKHJhbmdlLmVuZENvbnRhaW5lciwgcmFuZ2UuZW5kT2Zmc2V0KTtcclxuICAgICAgICBjYXJldE9mZnNldCA9IHByZUNhcmV0UmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8qKiBLZWVwaW5nIGEgcmVmZXJlbmNlIG9mIHRoZSByYW5nZSB0byBlbWl0ICovXHJcbiAgICAgICAgY2FyZXRSYW5nZSA9IHJhbmdlLmNsb25lUmFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICgoc2VsID0gZG9jLnNlbGVjdGlvbikgJiYgc2VsLnR5cGUgIT0gXCJDb250cm9sXCIpIHtcclxuICAgICAgY29uc3QgdGV4dFJhbmdlID0gc2VsLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgIGNvbnN0IHByZUNhcmV0VGV4dFJhbmdlID0gZG9jLmJvZHkuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICAgIHByZUNhcmV0VGV4dFJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGVsZW1lbnQpO1xyXG4gICAgICBwcmVDYXJldFRleHRSYW5nZS5zZXRFbmRQb2ludChcIkVuZFRvRW5kXCIsIHRleHRSYW5nZSk7XHJcbiAgICAgIGNhcmV0T2Zmc2V0ID0gcHJlQ2FyZXRUZXh0UmFuZ2UudGV4dC5sZW5ndGg7XHJcblxyXG4gICAgICAvKiogS2VlcGluZyBhIHJlZmVyZW5jZSBvZiB0aGUgcmFuZ2UgdG8gZW1pdCBhbmQgbWFraW5nIGl0IGNvbXBhdGlibGUgKi9cclxuICAgICAgY2FyZXRSYW5nZSA9IHRleHRSYW5nZS5kdXBsaWNhdGUoKTtcclxuICAgICAgY2FyZXRSYW5nZS5pbnNlcnROb2RlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICBjYXJldFJhbmdlLnBhc3RlSFRNTChjb250YWluZXIuaW5uZXJIVE1MKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IENhcmV0RXZlbnQoe1xyXG4gICAgICBjYXJldE9mZnNldCxcclxuICAgICAgY2FyZXRSYW5nZSxcclxuICAgICAgdGV4dENvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=