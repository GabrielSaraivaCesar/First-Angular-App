import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Possui o ngModel que pode ser utilizado para a manipulação de states com [(ngModel)]
import { Location } from '@angular/common'; // <-- Serviço para controlar rotas
import { HttpClientModule } from '@angular/common/http'; // Modulo para requisicoes http
import { StoreModule } from '@ngrx/store'; // <-- Redux Store module

// Redux
import { store } from './redux/store';

// Components
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoadingComponent } from './components/loading/loading.component';

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductCardComponent,
    LoadingComponent,
    ProductDetailComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot(store),
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }