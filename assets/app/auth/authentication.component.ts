import { Component} from "@angular/core";

@Component({
    selector : 'app-authentication',
    template: `<h1> Componente de autenticação </h1>
                <header class = "row spacing">
                    <nav class = "col-md-8 col-md-offset-2">
                        <ul class = "nav nav-tabs">
                            <li routerLinkActive = "active"><a [routerLink] = "['signup']">SignUp</a></li>
                            <li routerLinkActive = "active"><a [routerLink] = "['signin']">SignIn</a></li>
                            <li routerLinkActive= "active"><a [routerLink] = "['logout']">LogOut</a></li>
                        </ul>
                    </nav>
                </header>
                <div class= "row spacing">
                <router-outlet></router-outlet>
                </div>
    `
                
})
export class AuthenticationComponent{

}