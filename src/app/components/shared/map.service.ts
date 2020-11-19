import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from 'immutable';
import { Data } from '@angular/router';
import { Employee } from 'src/app/app.service';

@Injectable()
export class MapService {

//   private messageSource = new BehaviorSubject('default message');
//   currentMessage = this.messageSource.asObservable();

//   constructor() { }

// //   changeMessage(message: string) {
// //     this.messageSource.next(message)
// //   }

currentName: Data = new Employee();
response = [];

private messageSource = new BehaviorSubject('');
currentMessage = this.messageSource.asObservable();

constructor() { }

// private _todos: BehaviorSubject<List<Todo>> = new BehaviorSubject(List([]));

//     public readonly todos: Observable<List<Todo>> = this._todos.asObservable();

//     constructor(private todoBackendService: TodoBackendService) {
//         this.loadInitialData();
//     }



}