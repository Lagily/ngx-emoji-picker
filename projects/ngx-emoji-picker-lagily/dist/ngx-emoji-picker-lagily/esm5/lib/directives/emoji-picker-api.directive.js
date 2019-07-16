/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, ElementRef, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { EmojiPickerComponent } from '../components/emoji-picker.component';
import { DIRECTIONS } from '../misc/picker-directions';
import { EmojiEvent } from '../misc/emoji-event';
var EmojiPickerApiDirective = /** @class */ (function () {
    function EmojiPickerApiDirective(_cfr, _vcr, _el) {
        var _this = this;
        this._cfr = _cfr;
        this._vcr = _vcr;
        this._el = _el;
        this._directionCode = DIRECTIONS.bottom;
        this._searchBar = false;
        this.emojiPickerIfEmitter = new EventEmitter();
        this.selectEmitter = new EventEmitter();
        this._emojiPickerOpenState = new Subject();
        this._destroyed = new Subject();
        this._emojiSubs = [];
        this._emojiPickerOpenState
            .pipe(takeUntil(this._destroyed), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.openPicker();
            }
            else {
                _this.closePicker();
            }
        }));
    }
    Object.defineProperty(EmojiPickerApiDirective.prototype, "emojiPickerDirection", {
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            if (DIRECTIONS[direction] === undefined) {
                console.error("Emoji-Picker: direction '" + direction + "' passed as input does not exist in DIRECTIONS table, defaulting to 'bottom'");
                this._directionCode = DIRECTIONS.bottom;
            }
            else {
                this._directionCode = DIRECTIONS[direction];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerApiDirective.prototype, "emojiPickerIf", {
        set: /**
         * @param {?} condition
         * @return {?}
         */
        function (condition) {
            this._emojiPickerOpenState.next(condition);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EmojiPickerApiDirective.prototype.openPicker = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._emojiPickerFactory = this._emojiPickerFactory || this._cfr.resolveComponentFactory(EmojiPickerComponent);
        this._emojiPickerRef = this._emojiPickerRef || this._vcr.createComponent(this._emojiPickerFactory);
        this._emojiPickerRef.instance.labelFor = 'chat-input-textarea';
        this._emojiPickerRef.instance.setPosition(this._el, this._directionCode);
        this._emojiSubs.push(this._emojiPickerRef.instance.pickerCloseEmitter.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.emojiPickerIfEmitter.emit(false); })), this._emojiPickerRef.instance.selectionEmitter.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.selectEmitter.emit(EmojiEvent.fromArray(event)); })));
    };
    /**
     * @return {?}
     */
    EmojiPickerApiDirective.prototype.closePicker = /**
     * @return {?}
     */
    function () {
        if (!this._emojiPickerRef || !this._emojiPickerRef.destroy) {
            return;
        }
        this._emojiSubs.forEach((/**
         * @param {?} subscription
         * @return {?}
         */
        function (subscription) { return subscription.unsubscribe(); }));
        this._emojiPickerRef.destroy();
        this._emojiSubs = [];
        delete this._emojiPickerRef;
    };
    /**
     * @return {?}
     */
    EmojiPickerApiDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next(true);
    };
    EmojiPickerApiDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[emojiPickerIf]',
                    host: {
                        '(click)': '$event.emojiPickerExempt = true' // marking off event listening on anchor
                    }
                },] }
    ];
    /** @nocollapse */
    EmojiPickerApiDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: ElementRef }
    ]; };
    EmojiPickerApiDirective.propDecorators = {
        emojiPickerDirection: [{ type: Input, args: ['emojiPickerDirection',] }],
        emojiPickerIf: [{ type: Input, args: ['emojiPickerIf',] }],
        emojiPickerIfEmitter: [{ type: Output, args: ['emojiPickerIfChange',] }],
        selectEmitter: [{ type: Output, args: ['emojiPickerSelect',] }]
    };
    return EmojiPickerApiDirective;
}());
export { EmojiPickerApiDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._directionCode;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._searchBar;
    /** @type {?} */
    EmojiPickerApiDirective.prototype.emojiPickerIfEmitter;
    /** @type {?} */
    EmojiPickerApiDirective.prototype.selectEmitter;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._emojiPickerOpenState;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._emojiPickerFactory;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._emojiPickerRef;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._emojiSubs;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._cfr;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._vcr;
    /**
     * @type {?}
     * @private
     */
    EmojiPickerApiDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWFwaS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Vtb2ppLXBpY2tlci1hcGkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBR2hCLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQWtCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpEO0lBa0NFLGlDQUNVLElBQThCLEVBQzlCLElBQXNCLEVBQ3RCLEdBQWU7UUFIekIsaUJBZ0JDO1FBZlMsU0FBSSxHQUFKLElBQUksQ0FBMEI7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQTlCakIsbUJBQWMsR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9DLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFlTCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXJELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4RCwwQkFBcUIsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQy9DLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBSXBDLGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBT3RD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QkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLGlDQUFpQyxDQUFDLHdDQUF3QztxQkFDdEY7aUJBQ0Q7Ozs7Z0JBckJBLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUdoQixVQUFVOzs7dUNBc0JULEtBQUssU0FBQyxzQkFBc0I7Z0NBVTVCLEtBQUssU0FBQyxlQUFlO3VDQUdyQixNQUFNLFNBQUMscUJBQXFCO2dDQUU1QixNQUFNLFNBQUMsbUJBQW1COztJQXNEN0IsOEJBQUM7Q0FBQSxBQS9FRCxJQStFQztTQXpFWSx1QkFBdUI7Ozs7OztJQUNsQyxpREFBdUQ7Ozs7O0lBQ3ZELDZDQUFvQzs7SUFlcEMsdURBQWtGOztJQUVsRixnREFBZ0U7Ozs7O0lBRWhFLHdEQUF1RDs7Ozs7SUFDdkQsNkNBQTRDOzs7OztJQUU1QyxzREFBb0U7Ozs7O0lBQ3BFLGtEQUE0RDs7Ozs7SUFDNUQsNkNBQXdDOzs7OztJQUd0Qyx1Q0FBc0M7Ozs7O0lBQ3RDLHVDQUE4Qjs7Ozs7SUFDOUIsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeSxcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZGlzdGluY3RVbnRpbENoYW5nZWR9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5pbXBvcnQgeyBFbW9qaVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZW1vamktcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERJUkVDVElPTlMgfSBmcm9tICcuLi9taXNjL3BpY2tlci1kaXJlY3Rpb25zJztcclxuaW1wb3J0IHsgRW1vamlFdmVudCB9IGZyb20gJy4uL21pc2MvZW1vamktZXZlbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZW1vamlQaWNrZXJJZl0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJyRldmVudC5lbW9qaVBpY2tlckV4ZW1wdCA9IHRydWUnIC8vIG1hcmtpbmcgb2ZmIGV2ZW50IGxpc3RlbmluZyBvbiBhbmNob3JcclxuICB9XHJcbiB9KVxyXG5leHBvcnQgY2xhc3MgRW1vamlQaWNrZXJBcGlEaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgX2RpcmVjdGlvbkNvZGU6IERJUkVDVElPTlMgPSBESVJFQ1RJT05TLmJvdHRvbTtcclxuICBwcml2YXRlIF9zZWFyY2hCYXI6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCdlbW9qaVBpY2tlckRpcmVjdGlvbicpIHNldCBlbW9qaVBpY2tlckRpcmVjdGlvbihkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgaWYgKERJUkVDVElPTlNbZGlyZWN0aW9uXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVtb2ppLVBpY2tlcjogZGlyZWN0aW9uICcke2RpcmVjdGlvbn0nIHBhc3NlZCBhcyBpbnB1dCBkb2VzIG5vdCBleGlzdCBpbiBESVJFQ1RJT05TIHRhYmxlLCBkZWZhdWx0aW5nIHRvICdib3R0b20nYCk7XHJcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNvZGUgPSBESVJFQ1RJT05TLmJvdHRvbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RpcmVjdGlvbkNvZGUgPSBESVJFQ1RJT05TW2RpcmVjdGlvbl07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KCdlbW9qaVBpY2tlcklmJykgc2V0IGVtb2ppUGlja2VySWYoY29uZGl0aW9uOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9lbW9qaVBpY2tlck9wZW5TdGF0ZS5uZXh0KGNvbmRpdGlvbik7XHJcbiAgfVxyXG4gIEBPdXRwdXQoJ2Vtb2ppUGlja2VySWZDaGFuZ2UnKSBlbW9qaVBpY2tlcklmRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBcclxuICBAT3V0cHV0KCdlbW9qaVBpY2tlclNlbGVjdCcpIHNlbGVjdEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgX2Vtb2ppUGlja2VyT3BlblN0YXRlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIF9lbW9qaVBpY2tlckZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8RW1vamlQaWNrZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2Vtb2ppUGlja2VyUmVmOiBDb21wb25lbnRSZWY8RW1vamlQaWNrZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2Vtb2ppU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgX3ZjcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9lbW9qaVBpY2tlck9wZW5TdGF0ZVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLm9wZW5QaWNrZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jbG9zZVBpY2tlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuUGlja2VyKCkge1xyXG4gICAgdGhpcy5fZW1vamlQaWNrZXJGYWN0b3J5ID0gdGhpcy5fZW1vamlQaWNrZXJGYWN0b3J5IHx8IHRoaXMuX2Nmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShFbW9qaVBpY2tlckNvbXBvbmVudCk7XHJcbiAgICB0aGlzLl9lbW9qaVBpY2tlclJlZiA9IHRoaXMuX2Vtb2ppUGlja2VyUmVmIHx8IHRoaXMuX3Zjci5jcmVhdGVDb21wb25lbnQodGhpcy5fZW1vamlQaWNrZXJGYWN0b3J5KTtcclxuXHJcbiAgICB0aGlzLl9lbW9qaVBpY2tlclJlZi5pbnN0YW5jZS5sYWJlbEZvciA9ICdjaGF0LWlucHV0LXRleHRhcmVhJztcclxuICAgIHRoaXMuX2Vtb2ppUGlja2VyUmVmLmluc3RhbmNlLnNldFBvc2l0aW9uKHRoaXMuX2VsLCB0aGlzLl9kaXJlY3Rpb25Db2RlKTtcclxuICAgIHRoaXMuX2Vtb2ppU3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9lbW9qaVBpY2tlclJlZi5pbnN0YW5jZS5waWNrZXJDbG9zZUVtaXR0ZXIuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuZW1vamlQaWNrZXJJZkVtaXR0ZXIuZW1pdChmYWxzZSkpLFxyXG4gICAgICB0aGlzLl9lbW9qaVBpY2tlclJlZi5pbnN0YW5jZS5zZWxlY3Rpb25FbWl0dGVyLnN1YnNjcmliZShldmVudCA9PiB0aGlzLnNlbGVjdEVtaXR0ZXIuZW1pdChFbW9qaUV2ZW50LmZyb21BcnJheShldmVudCkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNsb3NlUGlja2VyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9lbW9qaVBpY2tlclJlZiB8fCAhdGhpcy5fZW1vamlQaWNrZXJSZWYuZGVzdHJveSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZW1vamlTdWJzLmZvckVhY2goKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSk7XHJcbiAgICB0aGlzLl9lbW9qaVBpY2tlclJlZi5kZXN0cm95KCk7XHJcbiAgICBcclxuICAgIHRoaXMuX2Vtb2ppU3VicyA9IFtdO1xyXG4gICAgZGVsZXRlIHRoaXMuX2Vtb2ppUGlja2VyUmVmO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCh0cnVlKTtcclxuICB9XHJcbn1cclxuIl19