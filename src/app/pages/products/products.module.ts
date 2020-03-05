import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '../../redux/effects/products.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
