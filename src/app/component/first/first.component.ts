import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  message: string;


  constructor(private messageService: MessageService) {

    this.message = 'első komp';
  }


  ngOnInit(): void {
    if (this.messageService.getMessage()) {
      this.message = this.messageService.getMessage();
    }
  }
  onNext() {
    this.messageService.setMessage('hello innen first');
  }

  sendSubject() {
    this.messageService.setSubjectMessage('subject jött');
  }
}
