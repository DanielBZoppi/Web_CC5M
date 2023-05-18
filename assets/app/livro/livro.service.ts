import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class LivroService {
  constructor(private http: Http) {}

  getLivros() {
    return this.http
      .get("http://localhost:3000/livros")
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        console.log(jsonData)
        return jsonData.books;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  addLivro(book: any) {
    const bodyReq = JSON.stringify(book);

    return this.http
      .post("http://localhost:3000/addLivro", book)
      .subscribe(
        (response) => {
          const jsonData = response; // Faça algo com a resposta do servidor
          console.log(jsonData);
        },
        (error) => {
          console.error(error); // Trate qualquer erro que ocorrer
        }
      );
  }

  getCarrinho() {
    return this.http
      .get("http://localhost:3000/carrinho")
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        console.log(jsonData)
        return jsonData.books;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  deleteCarrinho(id: String) {
    return this.http
      .delete("http://localhost:3000/deleteCarrinho/"+id, )
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        alert(jsonData.message)
        return jsonData.message;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

}