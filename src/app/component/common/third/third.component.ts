import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../service/message.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  message: string;

  constructor(private messageService: MessageService) {
    this.message = 'alap szöveg nem történt még semmi, subject nem jött át';
  }

  ngOnInit(): void {
    // this.message = this.messageService.getMessage();
    this.messageService.getSubjectMessage().subscribe(
      value => this.message = value
    );
  }

}
