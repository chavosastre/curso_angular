import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [];

  addMessage(message: string){
    this.messages.push(message);
  }
}
