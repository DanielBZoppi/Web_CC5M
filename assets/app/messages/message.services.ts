import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Message } from "./message.model";
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable'
/** */
@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: HttpClient){}
    

    addMessage(message : Message){
        this.messageSService.push(message);
        console.log(this.messageSService)

        const bodyReq = JSON.stringify(message)
        return this.http.post('http://localhost:3000/message', bodyReq)
            .map((responseRecebida: Response) => responseRecebida.json() )
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()))
    }
    getMessages(){
        return this.messageSService
    }
    deleteMessages(message : Message){
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}