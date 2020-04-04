import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subjectMessage = new Subject<string>();
  message: string;

  constructor() {
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }

  getSubjectMessage(): Subject<string> {
    return this.subjectMessage;
  }

  setSubjectMessage(message: string) {
    this.subjectMessage.next(message);
  }

}
