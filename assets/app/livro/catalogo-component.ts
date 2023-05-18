import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Http, Response, Headers } from "@angular/http";

import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { LivroService } from "./livro.service";

@Component({
  selector: "app-catalogo",
  templateUrl: "./catalogo-component.html",
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
      },
      (error) => {
        console.error("Erro ao obter a lista de itens:", error);
      }
    );
  }
}
