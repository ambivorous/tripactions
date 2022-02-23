import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.less'],
})
export class FlightResultComponent implements OnInit {
  @Input()
  flight: any;

  constructor() {}

  ngOnInit(): void {}
}
