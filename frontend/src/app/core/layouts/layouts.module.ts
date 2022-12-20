import { MaterialModule } from './../../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MaterialModule,
  ],
  exports: [ToolbarComponent, SidenavComponent]
})
export class LayoutsModule { }
