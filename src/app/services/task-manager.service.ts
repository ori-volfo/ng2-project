import { Injectable } from '@angular/core';

@Injectable()
export class TaskManagerService {
  tasks;
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasksList')) || [{title: 'Learn angular 2', done: false},
      {title: 'build Todo app', done: true}];
  }

  getTasks(){
    return this.tasks;
  }
  setTasks(list) {
    localStorage.setItem('tasksList', JSON.stringify(list));
  }
}
