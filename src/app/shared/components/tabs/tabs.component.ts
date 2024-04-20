import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'shared-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {
  @Input() tabs: string[] = [];

  @Output() onTabChanged = new EventEmitter<number>();

  activatedTab: number = 0;
  isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize(event.target.innerWidth);
  }

  checkScreenSize(width: number) {
    this.isMobile = width < 900;
  }

  onDropdownChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.setTab(Number(element.value));
  }

  setTab(index: number): void {
    this.activatedTab = index;
    this.onTabChanged.emit(this.activatedTab);
  }
}
