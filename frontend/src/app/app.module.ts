import { LayoutsModule } from './core/layouts/layouts.module';
import { ServicesModule } from './core/services/services.module';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './core/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule,
    ServicesModule,
    BrowserModule,
    LayoutsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
