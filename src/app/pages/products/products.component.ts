import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

// Redux
import { Store, select } from '@ngrx/store';
import { StoreInterface } from '../../interfaces/store';
import {setOn, setOff} from '../../redux/actions/loadingAction';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loading: boolean;
  products : Object[];

  constructor(
    private productService: ProductService,
    private store: Store<StoreInterface>
  ) { }

  ngOnInit() {
    this.store.pipe(select('loading'))
    .subscribe(loadingValue => {
      this.loading = loadingValue;
    })

    this.getProducts();
  }

  getProducts() {
    this.setLoading(true);
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products
      this.setLoading(false);
    })
  }

  setLoading(stateValue : boolean) {
    if (stateValue) {
      this.store.dispatch(setOn());
    }
    else {
      this.store.dispatch(setOff());
    }
  }

}
