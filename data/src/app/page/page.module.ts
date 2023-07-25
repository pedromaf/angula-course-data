import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { PageHomeComponent } from './page-home/page-home.component';


@NgModule({
  declarations: [
    PageListComponent,
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
