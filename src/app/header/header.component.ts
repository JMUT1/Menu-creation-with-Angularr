import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featurSelected = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {}

onSelect(feature: string){
 this.featurSelected.emit(feature)
}

onSelectShopingList(feature:string){
  this.featurSelected.emit(feature)
}

}
