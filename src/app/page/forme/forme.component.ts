import {
  Component, ElementRef, Input, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-forme',
  templateUrl: './forme.component.html',
  styleUrls: ['./forme.component.scss'],
})
export default class FormeComponent implements OnInit {
  @Input() id!: number;

  @Input() top!: number;

  @Input() left!: number;

  @Input() width!: number;

  @Input() height!: number;

  constructor(private container: ElementRef) { }

  ngOnInit(): void {
    this.container.nativeElement.id = this.id;
    this.container.nativeElement.style.top = `${this.top}px`;
    this.container.nativeElement.style.left = `${this.left}px`;
    this.container.nativeElement.style.width = `${this.width}px`;
    this.container.nativeElement.style.height = `${this.height}px`;
  }
}
