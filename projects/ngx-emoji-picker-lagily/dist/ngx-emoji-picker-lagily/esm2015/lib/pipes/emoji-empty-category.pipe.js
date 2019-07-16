/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class EmojiEmptyCategoryPipe {
    /**
     * @param {?} categories
     * @return {?}
     */
    transform(categories) {
        return categories.filter((/**
         * @param {?} category
         * @return {?}
         */
        category => category.emojis.length !== 0));
    }
}
EmojiEmptyCategoryPipe.decorators = [
    { type: Pipe, args: [{
                name: 'notEmptyEmojiCategory'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktZW1wdHktY2F0ZWdvcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2Vtb2ppLWVtcHR5LWNhdGVnb3J5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTXBELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFNBQVMsQ0FBQyxVQUFpQjtRQUN6QixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFQRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLHVCQUF1QjthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnbm90RW1wdHlFbW9qaUNhdGVnb3J5J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVtb2ppRW1wdHlDYXRlZ29yeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oY2F0ZWdvcmllczogYW55W10pOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCAhPT0gMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==