import { Component } from "@angular/core";
import { MessageService } from "./message.services";
import { NgForm } from "@angular/forms";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent{
    constructor (private messageService: MessageService){}

    onSubmit(form: NgForm){
        const messageAux = new Message(form.value.myContentngForm, 'Vini');
        this.messageService.addMessage(messageAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
            console.log(form);
            form.resetForm();
    }

    onSave(textoConsole: string) {
        console.log(textoConsole)
    }
}