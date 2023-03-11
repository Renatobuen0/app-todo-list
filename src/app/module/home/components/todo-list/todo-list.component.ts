import { Component, DoCheck } from '@angular/core';
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
  ngDoCheck() {
    this.setLocalStorage();
  }
  public deleteTaskListItem(taskNumber: number) {
    this.taskList.splice(taskNumber, 1);
  }
  public deleteTaskListAll() {
    const confirmDeleteAll = window.confirm(
      'Você deseja realmente deletar todas as Taks?'
    );

    if (confirmDeleteAll) this.taskList = [];
  }

  public setTaskListEmit(taskInput: string) {
    this.taskList.push({ task: taskInput, checked: false });
  }

  public inputValidation(event: string, index: number) {
    if (!event.length) {
      const confirmDeleteTask = window.confirm(
        'Task está vazia, deseja deletar?'
      );

      if (confirmDeleteTask) {
        this.deleteTaskListItem(index);
      }
    }
  }

  public setLocalStorage() {
    this.taskList.sort((a, b) => {
      return Number(a.checked) - Number(b.checked);
    });

    localStorage.setItem('list', JSON.stringify(this.taskList));
  }
}
