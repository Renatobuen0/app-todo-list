import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAdditemsComponent } from './components/todo-input-additems/todo-input-additems.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';

@NgModule({
  declarations: [
    TodoButtonDeleteAllComponent,
    TodoInputAdditemsComponent,
    TodoListComponent,
    HomeComponent,
    HeaderComponent,
    ModalConfirmationComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
