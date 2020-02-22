import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather7';
  @Input() tempType;
  @Input() isC: boolean;
  @Output() receiveIsCP = new EventEmitter<boolean>();
  @Output() receiveIsKmP = new EventEmitter<boolean>();
  distanceType = true;
  @Input() isKm: boolean;
  isCParent: boolean;
  isKMParent: boolean;
  image: string;

  counterC = 1;
  counterKm = 1;

  ngOnInit() {
    this.getBackgroundImage();
  }

  receiveIsC(isC: boolean) {
    this.isCParent = isC;
    this.receiveIsCP.emit(this.isC);
  }

  receiveIsKm(isKm: boolean) {
    this.isKMParent = isKm;
    this.receiveIsKmP.emit(this.isKm);
  }


  getBackgroundImage() {
    const date = new Date();
    const hour = date.getHours();

    if (hour === 0 || hour === 6 || hour === 12 || hour === 18) {
      this.image = 'weather3';
    } else if (hour === 1 || hour === 7 || hour === 13 || hour === 19) {
      this.image = 'weather2';
    } else if (hour === 2 || hour === 8 || hour === 14 || hour === 20) {
      this.image = 'weather3';
    } else if (hour === 3 || hour === 9 || hour === 15 || hour === 21) {
      this.image = 'weather4';
    } else if (hour === 4 || hour === 10 || hour === 16 || hour === 22) {
      this.image = 'weather5';
    } else if (hour === 5 || hour === 11 || hour === 17 || hour === 23) {
      this.image = 'weather6';
    }

    return hour;
  }

}
