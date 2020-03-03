import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // <-- Informações e ações com a rota
import { ProductService } from '../../services/product.service';

// Redux
import { Store, select } from '@ngrx/store';
import { StoreInterface } from '../../interfaces/store';
import {setOn, setOff} from '../../redux/actions/loadingAction';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Object = {};
  loading : boolean;

  constructor(
    private productService : ProductService,
    private route : ActivatedRoute,
    private router : Router,
    private store: Store<StoreInterface>
  ) { }

  ngOnInit() {
    this.store.pipe(select('loading'))
    .subscribe(loadingValue => {
      this.loading = loadingValue;
    })

    this.getProduct();
  }

  getProduct() {
    this.setLoading(true);
    this.productService.getOneProduct(this.route.snapshot.params.id)
    .subscribe(
      product => {
      this.product = product;
      this.setLoading(false);
      },
      error => {
        this.router.navigate(['products']); // <-- Redirect para pagina products
      }
    )
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
