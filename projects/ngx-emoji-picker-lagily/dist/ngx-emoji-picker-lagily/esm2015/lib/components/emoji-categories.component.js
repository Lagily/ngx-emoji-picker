/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class EmojiCategoriesComponent {
    constructor() {
        this.categorySelection = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleCategorySelection(event) {
        this.categorySelection.emit(event);
    }
}
EmojiCategoriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-categories',
                template: `
  <ng-container *ngFor="let category of emojisCategories">
    <emoji-button 
      [labelFor]="labelFor"
      (selection)="handleCategorySelection($event)"
      [dataToEmit]="category"
      [emoji]="category.icon"></emoji-button>
  </ng-container>
  `,
                styles: [":host{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 0 10px}"]
            }] }
];
/** @nocollapse */
EmojiCategoriesComponent.ctorParameters = () => [];
EmojiCategoriesComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emojisCategories: [{ type: Input, args: ['emojisCategories',] }],
    categorySelection: [{ type: Output, args: ['categorySelection',] }]
};
if (false) {
    /** @type {?} */
    EmojiCategoriesComponent.prototype.labelFor;
    /** @type {?} */
    EmojiCategoriesComponent.prototype.emojisCategories;
    /** @type {?} */
    EmojiCategoriesComponent.prototype.categorySelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktY2F0ZWdvcmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWNhdGVnb3JpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0J2RSxNQUFNLE9BQU8sd0JBQXdCO0lBS25DO1FBRjZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFMUQsQ0FBQzs7Ozs7SUFFaEIsdUJBQXVCLENBQUMsS0FBSztRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFFNUIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUOzthQUNGOzs7Ozt1QkFHRSxLQUFLLFNBQUMsVUFBVTsrQkFDaEIsS0FBSyxTQUFDLGtCQUFrQjtnQ0FDeEIsTUFBTSxTQUFDLG1CQUFtQjs7OztJQUYzQiw0Q0FBNEI7O0lBQzVCLG9EQUE0Qzs7SUFDNUMscURBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZW1vamktY2F0ZWdvcmllcycsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1jYXRlZ29yaWVzLnNjc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGVtb2ppc0NhdGVnb3JpZXNcIj5cclxuICAgIDxlbW9qaS1idXR0b24gXHJcbiAgICAgIFtsYWJlbEZvcl09XCJsYWJlbEZvclwiXHJcbiAgICAgIChzZWxlY3Rpb24pPVwiaGFuZGxlQ2F0ZWdvcnlTZWxlY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgIFtkYXRhVG9FbWl0XT1cImNhdGVnb3J5XCJcclxuICAgICAgW2Vtb2ppXT1cImNhdGVnb3J5Lmljb25cIj48L2Vtb2ppLWJ1dHRvbj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW1vamlDYXRlZ29yaWVzQ29tcG9uZW50IHtcclxuICBASW5wdXQoJ2xhYmVsRm9yJykgbGFiZWxGb3I7XHJcbiAgQElucHV0KCdlbW9qaXNDYXRlZ29yaWVzJykgZW1vamlzQ2F0ZWdvcmllcztcclxuICBAT3V0cHV0KCdjYXRlZ29yeVNlbGVjdGlvbicpIGNhdGVnb3J5U2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeVNlbGVjdGlvbihldmVudCkge1xyXG4gICAgdGhpcy5jYXRlZ29yeVNlbGVjdGlvbi5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIl19