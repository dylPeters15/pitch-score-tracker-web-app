import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-point-selector',
  templateUrl: './point-selector.component.html',
  styleUrls: ['./point-selector.component.css']
})
export class PointSelectorComponent implements OnInit {

  @Input() points: number = 0;
  @Output('points') change: EventEmitter<number> = new EventEmitter();
  @ViewChild('slider') slider: MatSlider = {} as MatSlider;

  @Input() max: number = 10;
  @Input() min: number = 0;
  @Input() label: string = "";

  constructor() {
  }

  ngOnInit() {

    console.log(this.slider);
    this.slider.valueChange.subscribe(() => {
      this.change.emit(this.slider.value as number);
    });
  }

}
