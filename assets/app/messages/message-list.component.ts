import { Component, OnInit} from "@angular/core";
import { Message } from "./message.model";

import { MessageService } from "./message.services"

@Component({
    selector: 'app-message-list',
    template: `
    <div class="col-md8 col-md-offset-2">
            <app-message [messageVarClasse]="msg"
            (editClicked_MessageMetodoClasse)="msg.content = $event"
            *ngFor="let msg of messageS">
        </app-message>
    </div>`,
    providers: [MessageService]
})

export class MessageListComponent implements OnInit {

    constructor(private messageService: MessageService) {}

    messageS: Message[] = []

    ngOnInit(): void {
        this.messageService.getMessages()
        .subscribe(
                (dadosSucesso: Message[]) => {console.log(dadosSucesso); this.messageS = dadosSucesso;}
                ,
                dadosErro => console.log(dadosErro)
            )
    }
}