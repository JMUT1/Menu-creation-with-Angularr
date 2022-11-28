import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoopingListComponent } from './components/shooping-list/shooping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoopingListComponent,
    RecipeBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
