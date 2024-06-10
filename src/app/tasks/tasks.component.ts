import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { Title } from '@angular/platform-browser';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input() name: string | undefined;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  // private tasksService: TasksService;

  constructor(private tasksService: TasksService) {
    // this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //   return;
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  // this.tasks.unshift({
  //   id: new Date().getTime().toString(),
  //   userId: this.userId,
  //   title: taskData.title,
  //   summary: taskData.date,
  //   dueDate: taskData.date,
  // });

  //   this.isAddingTask = false;
  // }
}
