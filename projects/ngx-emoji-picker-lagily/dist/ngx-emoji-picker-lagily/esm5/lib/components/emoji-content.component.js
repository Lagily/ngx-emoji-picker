/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
import { EmojiListComponent } from './emoji-list.component';
var EmojiContentComponent = /** @class */ (function () {
    function EmojiContentComponent() {
        this.emojiSelectionEmitter = new EventEmitter();
        this._emojis = EMOJIS;
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map((/**
         * @param {?} category
         * @return {?}
         */
        function (category) { return Object.assign({}, category, { emojis: [] }); }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EmojiContentComponent.prototype.searchHandler = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var filteredEmojis = this.emojisCategories.map((/**
         * @param {?} category
         * @return {?}
         */
        function (category) { return Object.assign({}, category, { emojis: [] }); }));
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) {
            /** @type {?} */
            var category = _this._emojis[i];
            category.emojis.forEach((/**
             * @param {?} emoji
             * @return {?}
             */
            function (emoji) {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            }));
        }));
        this.emojis = filteredEmojis;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    EmojiContentComponent.prototype.categorySelectionHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emojiListComponent.selectCategory(event);
    };
    EmojiContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-content',
                    template: "\n  <emoji-header \n    [emojisCategories]=\"emojisCategories\"\n    (categorySelection)=\"categorySelectionHandler($event)\"\n    (search)=\"searchHandler($event)\"\n    [labelFor]=\"labelFor\"></emoji-header>\n  <emoji-list [labelFor]=\"labelFor\" [emojis]=\"emojis\" (emoji-selection)=\"emojiSelectionEmitter.emit($event)\"></emoji-list>\n  <emoji-footer></emoji-footer>\n  ",
                    styles: [":host{display:flex;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{flex-grow:1}"]
                }] }
    ];
    /** @nocollapse */
    EmojiContentComponent.ctorParameters = function () { return []; };
    EmojiContentComponent.propDecorators = {
        emojiListComponent: [{ type: ViewChild, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return EmojiListComponent; })),] }],
        emojiSelectionEmitter: [{ type: Output, args: ['emoji-selection',] }],
        labelFor: [{ type: Input, args: ['labelFor',] }]
    };
    return EmojiContentComponent;
}());
export { EmojiContentComponent };
if (false) {
    /** @type {?} */
    EmojiContentComponent.prototype.emojiListComponent;
    /** @type {?} */
    EmojiContentComponent.prototype.emojiSelectionEmitter;
    /** @type {?} */
    EmojiContentComponent.prototype.labelFor;
    /**
     * @type {?}
     * @private
     */
    EmojiContentComponent.prototype._emojis;
    /** @type {?} */
    EmojiContentComponent.prototype.emojis;
    /** @type {?} */
    EmojiContentComponent.prototype.emojisCategories;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBdUJFO1FBUDJCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbkUsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUE1QyxDQUE0QyxFQUFDLENBQUM7SUFFL0UsQ0FBQzs7Ozs7SUFFaEIsNkNBQWE7Ozs7SUFBYixVQUFjLEtBQUs7UUFBbkIsaUJBZ0JDOztZQWZLLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQTVDLENBQTRDLEVBQUM7UUFFeEcsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUMzQixRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUMzQixJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ2xDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QztZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELHdEQUF3Qjs7OztJQUF4QixVQUF5QixLQUFLO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFFekIsUUFBUSxFQUFFLDJYQVFUOztpQkFDRjs7Ozs7cUNBR0UsU0FBUyxTQUFDLFVBQVU7OztvQkFBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLEVBQUM7d0NBQzlDLE1BQU0sU0FBQyxpQkFBaUI7MkJBQ3hCLEtBQUssU0FBQyxVQUFVOztJQTZCbkIsNEJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQWhDWSxxQkFBcUI7OztJQUNoQyxtREFBd0Y7O0lBQ3hGLHNEQUEyRTs7SUFDM0UseUNBQTRCOzs7OztJQUU1Qix3Q0FBeUI7O0lBQ3pCLHVDQUE4Qjs7SUFDOUIsaURBQThGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFTU9KSVMgfSBmcm9tICcuLi9taXNjL2Vtb2ppcy5kYXRhJztcclxuaW1wb3J0IHsgRW1vamlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9lbW9qaS1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vtb2ppLWNvbnRlbnQnLFxyXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZW1vamktY29udGVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZW1vamktaGVhZGVyIFxyXG4gICAgW2Vtb2ppc0NhdGVnb3JpZXNdPVwiZW1vamlzQ2F0ZWdvcmllc1wiXHJcbiAgICAoY2F0ZWdvcnlTZWxlY3Rpb24pPVwiY2F0ZWdvcnlTZWxlY3Rpb25IYW5kbGVyKCRldmVudClcIlxyXG4gICAgKHNlYXJjaCk9XCJzZWFyY2hIYW5kbGVyKCRldmVudClcIlxyXG4gICAgW2xhYmVsRm9yXT1cImxhYmVsRm9yXCI+PC9lbW9qaS1oZWFkZXI+XHJcbiAgPGVtb2ppLWxpc3QgW2xhYmVsRm9yXT1cImxhYmVsRm9yXCIgW2Vtb2ppc109XCJlbW9qaXNcIiAoZW1vamktc2VsZWN0aW9uKT1cImVtb2ppU2VsZWN0aW9uRW1pdHRlci5lbWl0KCRldmVudClcIj48L2Vtb2ppLWxpc3Q+XHJcbiAgPGVtb2ppLWZvb3Rlcj48L2Vtb2ppLWZvb3Rlcj5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW1vamlDb250ZW50Q29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKGZvcndhcmRSZWYoKCkgPT4gRW1vamlMaXN0Q29tcG9uZW50KSkgZW1vamlMaXN0Q29tcG9uZW50OiBFbW9qaUxpc3RDb21wb25lbnQ7XHJcbiAgQE91dHB1dCgnZW1vamktc2VsZWN0aW9uJykgZW1vamlTZWxlY3Rpb25FbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCdsYWJlbEZvcicpIGxhYmVsRm9yO1xyXG5cclxuICBwcml2YXRlIF9lbW9qaXMgPSBFTU9KSVM7XHJcbiAgZW1vamlzID0gdGhpcy5fZW1vamlzLnNsaWNlKCk7XHJcbiAgZW1vamlzQ2F0ZWdvcmllcyA9IHRoaXMuX2Vtb2ppcy5tYXAoY2F0ZWdvcnkgPT4gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcnksIHsgZW1vamlzIDogW10gfSkpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHNlYXJjaEhhbmRsZXIodmFsdWUpIHtcclxuICAgIGxldCBmaWx0ZXJlZEVtb2ppcyA9IHRoaXMuZW1vamlzQ2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gT2JqZWN0LmFzc2lnbih7fSwgY2F0ZWdvcnksIHsgZW1vamlzIDogW10gfSkpO1xyXG4gICAgXHJcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJycpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5fZW1vamlzKS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuX2Vtb2ppc1tpXTtcclxuXHJcbiAgICAgIGNhdGVnb3J5LmVtb2ppcy5mb3JFYWNoKGVtb2ppID0+IHtcclxuICAgICAgICBpZiAoZW1vamlbMV0uaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICBmaWx0ZXJlZEVtb2ppc1tpXS5lbW9qaXMucHVzaChlbW9qaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZW1vamlzID0gZmlsdGVyZWRFbW9qaXM7XHJcbiAgfVxyXG5cclxuICBjYXRlZ29yeVNlbGVjdGlvbkhhbmRsZXIoZXZlbnQpIHtcclxuICAgIHRoaXMuZW1vamlMaXN0Q29tcG9uZW50LnNlbGVjdENhdGVnb3J5KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19