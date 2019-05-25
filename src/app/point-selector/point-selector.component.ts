import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point-selector',
  templateUrl: './point-selector.component.html',
  styleUrls: ['./point-selector.component.css']
})
export class PointSelectorComponent implements OnInit {

  @Input() points: number = 0;
  @Input() max: number = 10;
  @Input() min: number = 0;
  @Input() label: string = "";

  constructor() { }

  ngOnInit() {
  }

}
