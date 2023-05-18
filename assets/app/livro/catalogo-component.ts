import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Http, Response, Headers } from "@angular/http";

import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { LivroService } from "./livro.service";

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo-component.html",
  // template: `
  // <div class="col-md8 col-md-offset-2">
  //         <app-catalogo [messageVarClasse]="imagePath"
  //         (editClicked_MessageMetodoClasse)="imagePath.content = $event"
  //         *ngFor="let msg of messageS">
  //     </app-catalogo>
  // </div>`,
  styleUrls: ["catalogo-component.css"],
})
export class CatalogoComponent {
  Data: any[];

  constructor(private livroService: LivroService, private http: Http) {}

  AddtoCart(book: string) {
    const index = this.Data.findIndex((obj) => obj._id === book);

    this.livroService.addLivro(this.Data[index])
  }

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(
      (data) => {
        this.Data = data;
        console.log(data);
        // Faça algo com a lista de itens aqui
      },
      (error) => {
        console.error("Erro ao obter a lista de itens:", error);
      }
    );
  }
}
