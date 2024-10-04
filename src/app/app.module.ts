import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
