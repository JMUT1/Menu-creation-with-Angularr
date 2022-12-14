import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
@ViewChild('nameInput', {static: false})  nameInputRef: ElementRef
@ViewChild ('amountInput', {static:false}) amountInputRef: ElementRef
@Output() ingredientAdded = new EventEmitter<Ingredients>()
  constructor() { }

  ngOnInit(): void {}

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount =  this.amountInputRef.nativeElement.value
    const newIngrediant = new  Ingredients(ingName, ingAmount)
    this.ingredientAdded.emit(newIngrediant)
  }

}
