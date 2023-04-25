import { Component } from '@angular/core';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers : [MessageService]
})
export class AppComponent {
    valorNgSwitch: number;
    nomeNgSwitch: string = "";

    mostrarElemento: boolean = true;
    onMudaMostrarElemento() {
        this.mostrarElemento = !this.mostrarElemento;
    }
    messageBinding: Message = new Message("harry", "Minha mensagem? ;-;", "idMessage", "idUser");
    messageBindingAlias: Message = new Message("Seila", "Another Message on Alias", "idMessage", "idUser");

    messageS: Message[] = [
        new Message("user1", "Texto 1", "", ""),
        new Message("user2", "Texto 2", "", ""),
    ]
}