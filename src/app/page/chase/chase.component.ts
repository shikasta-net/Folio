import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
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

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.formeFactory = this.componentFactoryResolver.resolveComponentFactory(FormeComponent);
  }

  onMouseClick(event: MouseEvent): void {
    const x = event.pageX;
    const y = event.pageY;
    const width = 80;
    const height = 80;

    const newForme: ComponentRef<FormeComponent> = this.formeHost
      .createComponent(this.formeFactory);
    this.formes.push(newForme);
    newForme.instance.id = this.formes.length;
    newForme.instance.top = y - height / 2;
    newForme.instance.left = x - width / 2;
    newForme.instance.height = height;
    newForme.instance.width = width;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    const target = event.target as Element;
    if (target.id) {
      console.log(`down on ${target.id}`);
    } else {
      this.onMouseClick(event);
    }
  }
}
