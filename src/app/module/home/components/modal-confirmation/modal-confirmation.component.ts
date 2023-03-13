import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss'],
})
export class ModalConfirmationComponent {
  @Input() title: string = 'Confirmação';
  @Input() message: string = '';
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  modalVisible: boolean = true;
}
