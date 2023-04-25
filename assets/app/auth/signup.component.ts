import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators  } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html'
})

export class SignupComponent implements OnInit{
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        });
    }
}
