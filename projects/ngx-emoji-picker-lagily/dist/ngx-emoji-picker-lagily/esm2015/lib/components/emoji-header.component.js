/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input } from '@angular/core';
export class EmojiHeaderComponent {
    constructor() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
}
EmojiHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-header',
                template: `
  <emoji-categories [labelFor]="labelFor" [emojisCategories]="emojisCategories" (categorySelection)="categorySelection.emit($event)"></emoji-categories>
  <emoji-search (search)="searchEmitter.emit($event)"></emoji-search>
  `,
                styles: [":host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}"]
            }] }
];
/** @nocollapse */
EmojiHeaderComponent.ctorParameters = () => [];
EmojiHeaderComponent.propDecorators = {
    labelFor: [{ type: Input, args: ['labelFor',] }],
    emojisCategories: [{ type: Input, args: ['emojisCategories',] }],
    categorySelection: [{ type: Output, args: ['categorySelection',] }],
    searchEmitter: [{ type: Output, args: ['search',] }]
};
if (false) {
    /** @type {?} */
    EmojiHeaderComponent.prototype.labelFor;
    /** @type {?} */
    EmojiHeaderComponent.prototype.emojisCategories;
    /** @type {?} */
    EmojiHeaderComponent.prototype.categorySelection;
    /** @type {?} */
    EmojiHeaderComponent.prototype.searchEmitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZW1vamktaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQVV0RSxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CO1FBSDZCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUE7UUFDdEQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFBO0lBRzVELENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBRXhCLFFBQVEsRUFBRTs7O0dBR1Q7O2FBQ0Y7Ozs7O3VCQUVFLEtBQUssU0FBQyxVQUFVOytCQUNoQixLQUFLLFNBQUMsa0JBQWtCO2dDQUV4QixNQUFNLFNBQUMsbUJBQW1COzRCQUMxQixNQUFNLFNBQUMsUUFBUTs7OztJQUpoQix3Q0FBMkI7O0lBQzNCLGdEQUEyQzs7SUFFM0MsaURBQXdFOztJQUN4RSw2Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Vtb2ppLWhlYWRlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4uL3N0eWxlcy9lbW9qaS1oZWFkZXIuc2NzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGVtb2ppLWNhdGVnb3JpZXMgW2xhYmVsRm9yXT1cImxhYmVsRm9yXCIgW2Vtb2ppc0NhdGVnb3JpZXNdPVwiZW1vamlzQ2F0ZWdvcmllc1wiIChjYXRlZ29yeVNlbGVjdGlvbik9XCJjYXRlZ29yeVNlbGVjdGlvbi5lbWl0KCRldmVudClcIj48L2Vtb2ppLWNhdGVnb3JpZXM+XHJcbiAgPGVtb2ppLXNlYXJjaCAoc2VhcmNoKT1cInNlYXJjaEVtaXR0ZXIuZW1pdCgkZXZlbnQpXCI+PC9lbW9qaS1zZWFyY2g+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1vamlIZWFkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgnbGFiZWxGb3InKSBsYWJlbEZvclxyXG4gIEBJbnB1dCgnZW1vamlzQ2F0ZWdvcmllcycpIGVtb2ppc0NhdGVnb3JpZXNcclxuXHJcbiAgQE91dHB1dCgnY2F0ZWdvcnlTZWxlY3Rpb24nKSBjYXRlZ29yeVNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgnc2VhcmNoJykgc2VhcmNoRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufVxyXG4iXX0=