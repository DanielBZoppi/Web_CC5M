
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo-component.html', 
    template: `
    <div class="col-md8 col-md-offset-2">
            <app-catalogo [messageVarClasse]=""
            (editClicked_MessageMetodoClasse)="msg.content = $event"
            *ngFor="let msg of messageS">
        </app-catalogo>
    </div>`,
    styleUrls:["catalogo-component.css"]
})

export class CatalogoComponent {
    

}
