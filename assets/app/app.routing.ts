import { Routes, RouterModule } from "@angular/router";
import { MessageComponent } from "./messages/message.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.router";

const APP_ROUTES: Routes = [ 
    {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
    {path: 'mensagens', component: MessageComponent},
    {path: 'autenticacao',component: AuthenticationComponent, children: AUTH_ROUTES},
]

export const myrouting = RouterModule.forRoot(APP_ROUTES);