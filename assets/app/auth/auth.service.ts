import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";

type Session = {
    token: string
    email: string
    username: string
}

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    signup(user: User) {
        const bodyReq = JSON.stringify(user);
        const myHeaders = new Headers({ 'Content-Type': 'application/json' });
        
        return this.http.post('http://localhost:3000/authenticacao/signup', bodyReq, { headers: myHeaders })
            .map((responseRecebida: Response) => {
                alert("Sua conta foi cadastrada! =) .")
                return responseRecebida.json()
            })
            .catch((error: Response) => {
                alert("Essa conta ja existe aqui")
                return Observable.throw(error)
            });
    }

    login(email: string, password: string) {
        const bodyReq = JSON.stringify({ email, password });
        const myHeaders = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/authenticacao/login', bodyReq, { headers: myHeaders })
            .map((responseRecebida: Response) => {
                const response = responseRecebida.json()
                this.setSession({
                    token: response.token,
                    email: response.email,
                    username: response.firstName                
                })

                return response
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    private setSession(session: Session) {
        localStorage.setItem('user_session', JSON.stringify(session));
    }

    getSession = (): Session | null => {
        const userPayload = localStorage.getItem('user_session');
        return userPayload ? JSON.parse(userPayload) : null;
    };

    logout() {
        localStorage.removeItem("user_session");
        alert("Voce foi deslogado")
    }

    isLoggedIn(): boolean {
        return !!this.getSession()
    }
}