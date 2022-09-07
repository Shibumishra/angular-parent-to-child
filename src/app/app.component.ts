import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-app';

  todoList: any[] = [];
  addTask(item: string) {
    this.todoList.push({ id: this.todoList.length, name: item })
    console.log(this.todoList);
  };

  removeTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id !== id)
  };


  data = 10;
  updateChild() {
    this.data = Math.floor(Math.random() * 10 + 1);
  };

  UsersDetails = [
    { name: 'Anil', email: 'anil@gmail.com', phone: 9384787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
    { name: 'Bhaker', email: 'bhaker@gmail.com', phone: 7984787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
    { name: 'Sam', email: 'sam@gmail.com', phone: 8684787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
    { name: 'Pater', email: 'pater@gmail.com', phone: 9084787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
  ];

  updateData(item: string) {
    console.log(item);
  };


  names: any;

  pipesTitle = 'Angular basic pipes';
  today = Date();
}
