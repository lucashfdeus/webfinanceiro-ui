import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="p-error">
      {{ text }}
    </div>`
})
export class MessageComponent {

  @Input()
  error!: string;
  @Input()
  control!: FormControl;
  @Input()
  text!: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
