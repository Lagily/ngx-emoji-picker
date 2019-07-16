import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'emoji-button',
  styleUrls: ['../styles/emoji-button.scss'],
  template: `
    <label [for]="labelFor"
      class="emoji-button" 
      (click)="selectionEmitter.emit(dataToEmit || emoji); $event.preventDefault();"
      (mousedown)="$event.preventDefault()">
      {{emoji[0]}}
    </label>
  `
})
export class EmojiButtonComponent {
  @Input('labelFor') labelFor
  @Input('emoji') emoji
  @Input('dataToEmit') dataToEmit
  @Input('options') options
  @Input('fitzpatrick') fitzpatrick

  @Output('selection') selectionEmitter: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnChanges() {}
}
