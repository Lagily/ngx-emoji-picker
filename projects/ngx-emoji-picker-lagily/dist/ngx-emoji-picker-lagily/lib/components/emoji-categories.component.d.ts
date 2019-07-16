import { EventEmitter } from '@angular/core';
export declare class EmojiCategoriesComponent {
    labelFor: any;
    emojisCategories: any;
    categorySelection: EventEmitter<any>;
    constructor();
    handleCategorySelection(event: any): void;
}
