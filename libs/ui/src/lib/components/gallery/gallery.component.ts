import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zummy-gallery',
  templateUrl: './gallery.component.html',
  styles: [],
})
export class GalleryComponent implements OnInit {
  selectedImageUrl: string;

  @Input() image: string;

  ngOnInit(): void {
    this.selectedImageUrl = this.image;
  }

  changeSelectedImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  get hasImage() {
    return this.image.length > 0;
  }
}
