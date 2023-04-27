import { NgModule } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MessageListComponent } from './messages/message-list.component';
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent} from './messages/message-input.component'
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { myrouting } from './app.routing';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
    
        
    ],
    imports: [BrowserModule, FormsModule, myrouting, ReactiveFormsModule, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}