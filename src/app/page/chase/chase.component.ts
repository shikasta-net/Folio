import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import FormeComponent from '../forme/forme.component';

@Component({
  selector: 'app-chase',
  templateUrl: './chase.component.html',
  styleUrls: ['./chase.component.scss'],
})
export default class ChaseComponent implements OnInit {
  @ViewChild('formes', { read: ViewContainerRef }) formeHost!: ViewContainerRef;

  private formeFactory!: ComponentFactory<FormeComponent>;

  private formes: Array<ComponentRef<FormeComponent>> = [];

  private focusedForme?: ComponentRef<FormeComponent>;

  private dragOffset = {
    y: 0,
    x: 0,
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private bounds: ElementRef,
  ) { }

  static bound(value: number, min:number = 0, max: number = 1): number {
    return Math.max(Math.min(value, max), min);
  }

  ngOnInit(): void {
    this.formeFactory = this.componentFactoryResolver.resolveComponentFactory(FormeComponent);
  }

  addNewForme(event: MouseEvent): string {
    const x = event.offsetX;
    const y = event.offsetY;
    const width = 80;
    const height = 80;

    const newForme: ComponentRef<FormeComponent> = this.formeHost
      .createComponent(this.formeFactory);
    this.formes.push(newForme);
    newForme.instance.id = String(this.formes.length);
    newForme.instance.top = y - height / 2;
    newForme.instance.left = x - width / 2;
    newForme.instance.height = height;
    newForme.instance.width = width;
    return newForme.instance.id;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    let selectedId = (event.target as Element).id;
    if (!selectedId) {
      selectedId = this.addNewForme(event);
    }
    this.focusedForme = this.formes.find((forme) => selectedId === forme.instance.id);
    this.dragOffset = {
      y: event.pageY - (this.focusedForme?.instance.top || 0),
      x: event.pageX - (this.focusedForme?.instance.left || 0),
    };
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.focusedForme) {
      const top = ChaseComponent.bound(
        event.pageY - this.dragOffset.y,
        0,
        this.bounds.nativeElement.offsetHeight,
      );
      this.focusedForme.instance.top = top;

      const left = ChaseComponent.bound(
        event.pageX - this.dragOffset.x,
        0,
        this.bounds.nativeElement.offsetWidth,
      );
      this.focusedForme.instance.left = left;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(): void {
    this.focusedForme = undefined;
  }
}
