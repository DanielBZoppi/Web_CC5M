import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'
import { Observable } from "rxjs/Observable";
import { error } from "console";
import { HttpResponse, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MessageService{
    private messageSService: Message [] = [];

    constructor(private http: HttpClient){}

    addMessage(message: Message){
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodReq = JSON.stringify(message);
        const myHeaders = new Headers ({'Content-Type' : 'application/json'});
        return this.HttpClient.post('http://localhost:3000/message', bodReq, {headers: myHeaders})
        .map((responseRecebida: Response) => responseRecebida.json())
        .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages(){
        return this.messageSService;
    }

    deleteMessage(message:Message){
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}