import { Component, Input, OnInit } from '@angular/core';
import { Item } from './interfaces/item.interface';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'shared-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  // animations: [
  //   trigger('animation', [
  //     transition('void => visible', [
  //       style({ transform: 'scale(0.5)' }),
  //       animate('300ms', style({ transform: 'scale(1)' })),
  //     ]),
  //     transition('visible => void', [
  //       style({ transform: 'scale(1)' }),
  //       animate('300ms', style({ transform: 'scale(0.5)' })),
  //     ]),
  //   ]),
  //   trigger('animation2', [
  //     transition(':leave', [
  //       style({ opacity: 1 }),
  //       animate('200ms', style({ opacity: 0.8 })),
  //     ]),
  //   ]),
  // ],
})
export class GalleryComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage: boolean = false;
  showMask: boolean = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentGalleryIndex = 0;
  showControls: boolean = true;
  totalImageCount: number = 0;

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number): void {
    document.body.style.overflow = 'hidden';
    this.showMask = true;
    this.previewImage = true;
    this.currentGalleryIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onClosePreview() {
    document.body.style.overflow = 'auto';
    this.previewImage = false;
    this.showMask = false;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onNext(): void {
    this.currentGalleryIndex = this.currentGalleryIndex + 1;
    if (this.currentGalleryIndex > this.galleryData.length - 1) {
      this.currentGalleryIndex = 0;
    }

    this.currentLightboxImage = this.galleryData[this.currentGalleryIndex];
  }

  onPrev(): void {
    this.currentGalleryIndex = this.currentGalleryIndex - 1;

    if (this.currentGalleryIndex < 0) {
      this.currentGalleryIndex = this.galleryData.length - 1;
    }

    this.currentLightboxImage = this.galleryData[this.currentGalleryIndex];
  }
}
