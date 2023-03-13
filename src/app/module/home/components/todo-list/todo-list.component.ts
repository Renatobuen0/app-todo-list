import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: TaskList[] = JSON.parse(
    localStorage.getItem('list') || '[]'
  );
  modalTitle: string = 'Confirmação';
  confirmModal: boolean = false;
  modalMessage: string = '';
  confirmModalAction: (() => void) | null = null;

  ngDoCheck() {
    this.setLocalStorage();
  }
  public deleteTaskListItem(taskNumber: number) {
    this.taskList.splice(taskNumber, 1);
  }

  public setTaskListEmit(taskInput: string) {
    this.taskList.push({ task: taskInput, checked: false });
  }

  public deleteTaskListAll() {
    this.modalMessage = 'Você deseja realmente deletar todas as Tasks?';
    this.confirmModal = true;
    this.confirmModalAction = () => {
      this.taskList = [];
      this.confirmModal = false;
    };
  }

  public inputValidation(event: string, index: number) {
    if (!event.length) {
      this.modalMessage = 'Task está vazia, deseja deletar?';
      this.confirmModal = true;
      this.confirmModalAction = () => {
        this.deleteTaskListItem(index);
        this.confirmModal = false;
      };
    }
  }

  public setLocalStorage() {
    this.taskList.sort((a, b) => {
      return Number(a.checked) - Number(b.checked);
    });

    localStorage.setItem('list', JSON.stringify(this.taskList));
  }

  public closeModal() {
    this.confirmModalAction = null;
    this.confirmModal = false;
  }
}
