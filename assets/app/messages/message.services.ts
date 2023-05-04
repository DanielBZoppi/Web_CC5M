import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class MessageService{
    private messageSService: Message [] = [];

    constructor(private http: Http, private authService: AuthService) { }

    addMessage(content: string) {
        const session = this.authService.getSession();
        const token = session ? 'Bearer ' + session.token : null

        const bodyReq = JSON.stringify({content});
        const myHeaders = new Headers({ 
            'Content-Type': 'application/json',
            'authorization': token
        });

        return this.http.post('http://localhost:3000/message/add', bodyReq, { headers: myHeaders })
            .map((responseRecebida: Response) => {
                return console.log(responseRecebida)
                /*const response = responseRecebida.json()

                const {content, user, _id } = response.messageSaved
                const message = new Message(content, user.username, _id, user._id);
                this.messageSService.push(message);
                
                return response*/
            })
            .catch((errorRecebido: Response) => Observable.throw(console.log(errorRecebido.json())));
    }

    getMessages() {
        return this.http.get('http://localhost:3000/message/pegar')
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const messageSResponseRecebida = responseEmJSON.objSMessageSRecuperadoS;
                let transfomedCastMessagesModelFrontend: Message[] = [];
                for(let msg of messageSResponseRecebida) {
                    transfomedCastMessagesModelFrontend.push(
                        new Message(msg.content, msg.user.firstName + " " + msg.user.lastName, msg._id, msg.user._id)
                    )
                }
                this.messageSService = transfomedCastMessagesModelFrontend;
                return transfomedCastMessagesModelFrontend;
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    deleteMessage(message:Message){
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}