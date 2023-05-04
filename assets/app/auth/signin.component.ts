
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin-component.html',
})

export class SigninComponent {
    myForm: FormGroup;

    constructor(private authService: AuthService) {}

    onSubmit() {
        const { emailTS, passwordTS } = this.myForm.value
        this.authService.login(emailTS, passwordTS).subscribe(
            dadosSucesso => console.log(dadosSucesso),
            erro => console.log(erro)
        )
        this.myForm.reset()
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        });
    }
}