import { Component } from "@angular/core";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
    <div class="col-md8 col-md-offset-2">
            <app-message [messageVarClasse]="msg"
            (editClicked_MessageMetodoClasse)="msg.content = $event"
            *ngFor="let msg of messageS">
        </app-message>
    </div>`
})

export class MessageListComponent{
    messageS: Message[] = [
        new Message("user1", "Texto 1", "", ""),
        new Message("user2", "Texto 2", "", ""),
    ]
}