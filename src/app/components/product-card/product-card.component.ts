import { Component, OnInit, Input } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '300px'
      })),
      state('closed', style({
        width: '250px'     
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})
export class ProductCardComponent implements OnInit {

  @Input() title : String;
  @Input() id : Number;
  isOpen : boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  switchOpen(event: any) : void {
    console.log(event.target, !this.isOpen)
    this.isOpen = !this.isOpen;
  }

}
