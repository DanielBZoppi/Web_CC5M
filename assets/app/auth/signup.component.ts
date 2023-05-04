import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import {User} from './user.model'
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html',
})

export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(public authService: AuthService) {}

    onSubmit() {
        let userInfo = this.myForm.value
        const user = new User(
            this.myForm.value.emailTS,
            this.myForm.value.passwordTS,
            this.myForm.value.firstNameTS,
            this.myForm.value.lastNameTS,
            this.myForm.value.birthdayTS,
            this.myForm.value.genreTS,
        )
        this.authService.signup(user).subscribe(
            dadosSucesso => console.log(dadosSucesso),
            erro => console.log(erro)
        )
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            genreTS: new FormControl(null, Validators.required),
            birthdayTS: new FormControl(null, Validators.required),
            termsTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        });
    }
}
