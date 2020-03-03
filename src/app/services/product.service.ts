import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ProductsInterface } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl : string = 'https://jsonplaceholder.typicode.com/albums';
 
  constructor(
    private http: HttpClient,
  ) { }

  public getProducts() : Observable<Object[]> {
    return this.http.get<ProductsInterface[]>(this.apiUrl); // <-- O service é responsável por toda requisição externa
    // Obs: Sempre utilizar uma interface como tipo da requisição para previnir possíveis erros
  }

  public getOneProduct(id : Number) : Observable<Object> {
    return this.http.get<ProductsInterface>(this.apiUrl + '/' + id);
  }

}

