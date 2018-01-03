import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks;
  newTask = false;
  constructor() {
    this.tasks = [
      {title: 'learn angular', done: false},
      {title: 'build website', done: true}
    ];
  }

  ngOnInit() {
  }

  openTask(){
    this.newTask = true;
  }
  addTask(task) {
    this.tasks.push({title: task, done: false});
  }

  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
