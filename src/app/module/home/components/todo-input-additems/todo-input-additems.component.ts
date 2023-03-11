import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-additems',
  templateUrl: './todo-input-additems.component.html',
  styleUrls: ['./todo-input-additems.component.scss'],
})
export class TodoInputAdditemsComponent {
  @Output() public emitTaskListItem = new EventEmitter();

  public addTaskListItem: string = '';

  public submitTaskListemItem() {
    this.addTaskListItem = this.addTaskListItem.trim();
    if (this.addTaskListItem) {
      this.emitTaskListItem.emit(this.addTaskListItem);
      this.addTaskListItem = '';
    }
  }
}
