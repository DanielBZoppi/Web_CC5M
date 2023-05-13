import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.router";
import { MessagesComponent } from "./messages/messages.component";
import { CatalogoComponent } from "./livro/catalogo-component";
import { CarrinhoComponent } from "./livro/carrinho-component";

const APP_ROUTES: Routes = [ 
    {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
    {path: 'mensagens', component: MessagesComponent},
    {path: 'autenticacao',component: AuthenticationComponent, children: AUTH_ROUTES},
    {path: 'livro', component: CatalogoComponent },
    {path: 'cart', component: CarrinhoComponent }
   
]

export const myrouting = RouterModule.forRoot(APP_ROUTES);