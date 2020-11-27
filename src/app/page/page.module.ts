import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ChaseComponent from './chase/chase.component';
import FormeComponent from './forme/forme.component';

@NgModule({
  declarations: [ChaseComponent, FormeComponent],
  entryComponents: [FormeComponent],
  imports: [
    CommonModule,
  ],
  exports: [ChaseComponent],
})
export default class PageModule { }
