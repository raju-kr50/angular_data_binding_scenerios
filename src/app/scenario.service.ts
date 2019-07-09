import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  constructor() { }

  private user = new BehaviorSubject<string>('anything');
  cast = this.user.asObservable();
  editUser(newUser) {
    this.user.next(newUser);
  }
}

