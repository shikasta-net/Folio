import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-forme',
  templateUrl: './forme.component.html',
  styleUrls: ['./forme.component.scss'],
})
export default class FormeComponent implements OnInit, DoCheck {
  @Input() id!: string;

  @Input() top!: number;

  @Input() left!: number;

  @Input() width!: number;

  @Input() height!: number;

  constructor(
    private renderer: Renderer2,
    private container: ElementRef,
  ) { }

  ngOnInit(): void {
    this.container.nativeElement.id = this.id;
    this.setSize();
    this.setLocation();
  }

  ngDoCheck(): void {
    this.setSize();
    this.setLocation();
  }

  private setLocation(): void {
    this.renderer.setStyle(this.container.nativeElement, 'transform', `translate(${this.left}px,${this.top}px)`);
  }

  private setSize(): void {
    this.renderer.setStyle(this.container.nativeElement, 'width', `${this.width}px`);
    this.renderer.setStyle(this.container.nativeElement, 'height', `${this.height}px`);
  }
}
