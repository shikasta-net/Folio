import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ChaseComponent from './chase/chase.component';

@NgModule({
  declarations: [ChaseComponent],
  imports: [
    CommonModule,
  ],
  exports: [ChaseComponent],
})
export default class PageModule { }
