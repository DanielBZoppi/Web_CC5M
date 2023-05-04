import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-logout',
    templateUrl: `
        <div class = "col-md-8 col-md-offset-2">
            <button class = "btn btn-danger" (click)="onLogout()">Logout</button>
            </div>
    `,
    providers: [AuthService]
})

export class LogoutComponent{

    constructor(public authService: AuthService) {}

    onLogout(){
        this.authService.logout()
    }
}