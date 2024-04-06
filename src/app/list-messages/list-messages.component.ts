import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-list-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-messages.component.html',
  styleUrl: './list-messages.component.css'
})
export class ListMessagesComponent {

  constructor(public messagesService: MessagesService){}

}
