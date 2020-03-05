
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { loadProducts } from '../actions/productsActions';
import { EMPTY } from 'rxjs';


@Injectable()
export class ProductsEffects {

    constructor(
        private actions$ : Actions,
        private productService : ProductService
    ) {}

    setProducts$ = createEffect(() => this.actions$.pipe(
        ofType(loadProducts),
        mergeMap(() => this.productService.getProducts()
        .pipe(
            map(products => {
                console.log('PRODUCTS', products)
                return ({type: '[Products Api] Products load success', payload: products})
            })
        )),
        catchError(() => EMPTY)
    ))
}