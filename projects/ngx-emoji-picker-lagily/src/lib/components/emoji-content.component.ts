import { Component, ViewChild, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
import { EmojiListComponent } from './emoji-list.component';

@Component({
  selector: 'emoji-content',
  styleUrls: ['../styles/emoji-content.scss'],
  template: `
  <emoji-header 
    [emojisCategories]="emojisCategories"
    (categorySelection)="categorySelectionHandler($event)"
    (search)="searchHandler($event)"
    [labelFor]="labelFor"></emoji-header>
  <emoji-list [labelFor]="labelFor" [emojis]="emojis" (emoji-selection)="emojiSelectionEmitter.emit($event)"></emoji-list>
  <emoji-footer></emoji-footer>
  `
})

export class EmojiContentComponent {
  @ViewChild(forwardRef(() => EmojiListComponent)) emojiListComponent: EmojiListComponent;
  @Output('emoji-selection') emojiSelectionEmitter = new EventEmitter<any>();
  @Input('labelFor') labelFor;

  private _emojis = EMOJIS;
  emojis = this._emojis.slice();
  emojisCategories = this._emojis.map(category => Object.assign({}, category, { emojis : [] }));

  constructor() {}

  searchHandler(value) {
    let filteredEmojis = this.emojisCategories.map(category => Object.assign({}, category, { emojis : [] }));
    
    value = value.replace(/-/g, '').toLowerCase();

    Object.keys(this._emojis).forEach(i => {
      const category = this._emojis[i];

      category.emojis.forEach(emoji => {
        if (emoji[1].indexOf(value) !== -1) {
          filteredEmojis[i].emojis.push(emoji);
        }
      });
    });

    this.emojis = filteredEmojis;
  }

  categorySelectionHandler(event) {
    this.emojiListComponent.selectCategory(event);
  }
}
