import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {

  constructor(public messagesService: MessagesService){}

  message: string = "";

  addMessage(){
    this.messagesService.addMessage(this.message);
    this.message = "";
  }
}
