import { Component, OnInit } from '@angular/core';
import {TaskManagerService} from '../../services/task-manager.service';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks;
  newTask = false;
  alert = false;
  textInput  = '';

  constructor(private _taskManagerService: TaskManagerService) {
    this.tasks = _taskManagerService.getTasks();
  }

  ngOnInit() {
  }

  openTask() {
    this.newTask = !this.newTask;
  }
  addTask() {
    this.tasks.push({title: this.textInput, done: false});
    this.newTask = false;
    this.textInput = '';
  }

  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  saveTasks(list) {
    this._taskManagerService.setTasks(list);
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 3000);
  }
}
