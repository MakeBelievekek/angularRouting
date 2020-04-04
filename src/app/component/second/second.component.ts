import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  message: string;


  constructor(private messageService: MessageService) {

    this.message = 'masodik komp';
  }


  ngOnInit(): void {
    if (this.messageService.getMessage()) {
      this.message = this.messageService.getMessage();
    }
  }

  onNext() {
    this.messageService.setMessage('hello innen second');
  }

}
