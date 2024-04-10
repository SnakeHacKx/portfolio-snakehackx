import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {
  @Input() tabs: string[] = [];

  @Output() onTabChanged = new EventEmitter<number>();

  activatedTab: number = 0;

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  setTab(index: number): void {
    this.activatedTab = index;
    this.onTabChanged.emit(this.activatedTab);
  }
}
