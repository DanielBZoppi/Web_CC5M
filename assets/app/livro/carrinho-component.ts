import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Http, Response, Headers } from "@angular/http";

import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { LivroService } from "./livro.service";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho-component.html",
  styleUrls: ["./carrinho-component.css"],
})
export class CarrinhoComponent {
  Data: any[];
  preco: number;

  constructor(private livroService: LivroService, private http: Http) {}

  ngOnInit(): void {
    this.livroService.getCarrinho().subscribe(
      (data) => {
        this.Data = data;
        const sum = data.reduce(
          (accumulator, currentValue) => accumulator + currentValue.livro.price
        );

        let total = 0;

        data.forEach((item) => {
          total += item.livro.price;
        });

        this.preco = total;
        // Faça algo com a lista de itens aqui
      },
      (error) => {
        console.error("Erro ao obter a lista de itens:", error);
      }
    );
  }

  deleteCarrinho(livro: String) {
    this.livroService.deleteCarrinho(livro)
      .subscribe(
        (data) => {
          this.Data = data;
          console.log(data)
          // Faça algo com a lista de itens aqui
        },
        (error) => {
          console.error('Erro ao obter a lista de itens:', error);
        }
      );
  }
}
