import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bidder-selector',
  templateUrl: './bidder-selector.component.html',
  styleUrls: ['./bidder-selector.component.css']
})
export class BidderSelectorComponent implements OnInit {

  @Input() initialSelected: string = "";

  @Input() players: string[] = [];
  @Output('bidder') bidder: EventEmitter<string> = new EventEmitter();
  selected: string = "";

  constructor() { }

  ngOnInit() {
    this.selected = this.initialSelected;
  }

  emit(player: string) {
    this.selected = player;
    this.bidder.emit(player);
  }

}
