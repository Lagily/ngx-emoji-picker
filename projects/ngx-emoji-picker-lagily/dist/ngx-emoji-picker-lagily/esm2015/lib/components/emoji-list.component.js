/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChildren, QueryList, forwardRef, Output, EventEmitter } from '@angular/core';
import { EmojiCategoryComponent } from './emoji-category.component';
export class EmojiListComponent {
    constructor() {
        this.emojiSelectionEmitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectCategory(event) {
        this.emojiCategoryComponents.forEach((/**
         * @param {?} categoryCmp
         * @return {?}
         */
        (categoryCmp) => {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        }));
    }
}
EmojiListComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-list',
                template: `
  <div class="emoji-list">
    <ng-container *ngFor="let emojiCategory of emojis | notEmptyEmojiCategory">
      <emoji-category [category]="emojiCategory"></emoji-category>
      <div class="emoji-buttons">
        <emoji-button 
        *ngFor="let emoji of emojiCategory.emojis"
        (selection)="emojiSelectionEmitter.emit($event)"
        [emoji]="emoji" [labelFor]="labelFor"></emoji-button>
      </div>
    </ng-container>
  </div>
  `,
                styles: [":host{overflow-y:auto}.emoji-list{padding:0 10px 10px}.emoji-buttons{display:flex;justify-content:center;flex-wrap:wrap;margin:5px 0}"]
            }] }
];
/** @nocollapse */
EmojiListComponent.ctorParameters = () => [];
EmojiListComponent.propDecorators = {
    emojiCategoryComponents: [{ type: ViewChildren, args: [forwardRef((/**
                 * @return {?}
                 */
                () => EmojiCategoryComponent)),] }],
    emojis: [{ type: Input, args: ['emojis',] }],
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emojiSelectionEmitter: [{ type: Output, args: ['emoji-selection',] }]
};
if (false) {
    /** @type {?} */
    EmojiListComponent.prototype.emojiCategoryComponents;
    /** @type {?} */
    EmojiListComponent.prototype.emojis;
    /** @type {?} */
    EmojiListComponent.prototype.labelFor;
    /** @type {?} */
    EmojiListComponent.prototype.emojiSelectionEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZW1vamktcGlja2VyLWxhZ2lseS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Vtb2ppLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBb0JwRSxNQUFNLE9BQU8sa0JBQWtCO0lBTTdCO1FBRjJCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFM0QsQ0FBQzs7Ozs7SUFFVixjQUFjLENBQUMsS0FBSztRQUN6QixJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTzs7OztRQUFDLENBQUMsV0FBa0MsRUFBRSxFQUFFO1lBQzFFLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUMvQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDOUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBRXRCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7O2FBQ0Y7Ozs7O3NDQUdFLFlBQVksU0FBQyxVQUFVOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7cUJBQ3JELEtBQUssU0FBQyxRQUFRO3VCQUNkLEtBQUssU0FBQyxVQUFVO29DQUNoQixNQUFNLFNBQUMsaUJBQWlCOzs7O0lBSHpCLHFEQUFtSDs7SUFDbkgsb0NBQXdCOztJQUN4QixzQ0FBNEI7O0lBQzVCLG1EQUEyRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBmb3J3YXJkUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbW9qaUNhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9lbW9qaS1jYXRlZ29yeS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlbW9qaS1saXN0JyxcclxuICBzdHlsZVVybHM6IFsnLi4vc3R5bGVzL2Vtb2ppLWxpc3Quc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImVtb2ppLWxpc3RcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVtb2ppQ2F0ZWdvcnkgb2YgZW1vamlzIHwgbm90RW1wdHlFbW9qaUNhdGVnb3J5XCI+XHJcbiAgICAgIDxlbW9qaS1jYXRlZ29yeSBbY2F0ZWdvcnldPVwiZW1vamlDYXRlZ29yeVwiPjwvZW1vamktY2F0ZWdvcnk+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1idXR0b25zXCI+XHJcbiAgICAgICAgPGVtb2ppLWJ1dHRvbiBcclxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vamkgb2YgZW1vamlDYXRlZ29yeS5lbW9qaXNcIlxyXG4gICAgICAgIChzZWxlY3Rpb24pPVwiZW1vamlTZWxlY3Rpb25FbWl0dGVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgW2Vtb2ppXT1cImVtb2ppXCIgW2xhYmVsRm9yXT1cImxhYmVsRm9yXCI+PC9lbW9qaS1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtb2ppTGlzdENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEVtb2ppQ2F0ZWdvcnlDb21wb25lbnQpKSBlbW9qaUNhdGVnb3J5Q29tcG9uZW50czogUXVlcnlMaXN0PEVtb2ppQ2F0ZWdvcnlDb21wb25lbnQ+O1xyXG4gIEBJbnB1dCgnZW1vamlzJykgZW1vamlzO1xyXG4gIEBJbnB1dCgnbGFiZWxGb3InKSBsYWJlbEZvcjtcclxuICBAT3V0cHV0KCdlbW9qaS1zZWxlY3Rpb24nKSBlbW9qaVNlbGVjdGlvbkVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHNlbGVjdENhdGVnb3J5KGV2ZW50KSB7XHJcbiAgICB0aGlzLmVtb2ppQ2F0ZWdvcnlDb21wb25lbnRzLmZvckVhY2goKGNhdGVnb3J5Q21wOkVtb2ppQ2F0ZWdvcnlDb21wb25lbnQpID0+IHtcclxuICAgICAgaWYgKGNhdGVnb3J5Q21wWydjYXRlZ29yeSddLm5hbWUgPT09IGV2ZW50Lm5hbWUpIHtcclxuICAgICAgICBjYXRlZ29yeUNtcC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19