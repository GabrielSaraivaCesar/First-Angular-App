
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class LoadingEffects {

    constructor(
        private actions$ : Actions,
        private productService : ProductService
    ) {}

    setLoading$ = createEffect(() => this.actions$.pipe(
        ofType('[Loading Component] SetOn'),
        mergeMap(() => this.productService.getProducts()
        .pipe(
            map(products => ({type: '[Products Api] Products loaded success', payload: products}))
        )),
        catchError(() => EMPTY)
    ))
}