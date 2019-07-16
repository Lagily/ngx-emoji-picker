/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var EmojiEmptyCategoryPipe = /** @class */ (function () {
    function EmojiEmptyCategoryPipe() {
    }
    /**
     * @param {?} categories
     * @return {?}
     */
    EmojiEmptyCategoryPipe.prototype.transform = /**
     * @param {?} categories
     * @return {?}
     */
    function (categories) {
        return categories.filter((/**
         * @param {?} category
         * @return {?}
         */
        function (category) { return category.emojis.length !== 0; }));
    };
    EmojiEmptyCategoryPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'notEmptyEmojiCategory'
                },] }
    ];
    return EmojiEmptyCategoryPipe;
}());
export { EmojiEmptyCategoryPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktZW1wdHktY2F0ZWdvcnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1lbW9qaS1waWNrZXItbGFnaWx5LyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2Vtb2ppLWVtcHR5LWNhdGVnb3J5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFRQSxDQUFDOzs7OztJQUhDLDBDQUFTOzs7O0lBQVQsVUFBVSxVQUFpQjtRQUN6QixPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLHVCQUF1QjtpQkFDOUI7O0lBTUQsNkJBQUM7Q0FBQSxBQVJELElBUUM7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ25vdEVtcHR5RW1vamlDYXRlZ29yeSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaUVtcHR5Q2F0ZWdvcnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKGNhdGVnb3JpZXM6IGFueVtdKTogYW55W10ge1xyXG4gICAgcmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmVtb2ppcy5sZW5ndGggIT09IDApO1xyXG4gIH1cclxufVxyXG4iXX0=