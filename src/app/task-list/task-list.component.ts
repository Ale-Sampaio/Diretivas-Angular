import { Component, OnInit } from '@angular/core';
import { Tasklist } from './task-list.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  taskList: Tasklist[] = [
    { descricao: 'Escovar os Dentes', concluida: false },
    { descricao: 'Tomar Cafe', concluida: true},
    { descricao: 'Tomar Banho', concluida: false },
    { descricao: 'Estudar', concluida: true },
    { descricao: 'Trabalhar', concluida: false },
    { descricao: 'Dormir', concluida: false },
  ];

toggleConcluida(tasklist : Tasklist): void{
  tasklist.concluida = ! tasklist.concluida;
}

}


