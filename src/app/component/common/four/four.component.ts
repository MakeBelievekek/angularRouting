import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../service/message.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }


  sendSubject() {
    this.messageService.setSubjectMessage('ez ment a négyesből, egyszere léteznek!!!')
  }
}
