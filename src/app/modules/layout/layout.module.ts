import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  exports:[LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule
    
  ]
})
export class LayoutModule { }
