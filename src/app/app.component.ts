import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public title = 'Flights';
  public filterOptions: string[] = [];
  public selectedFilters: string[] = [];
  public flightResults: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('./assets/flights.json').subscribe((data: any) => {
      this.flightResults = [...data.flights];
      this.createFilterOptions(this.flightResults);
    });
  }

  private createFilterOptions(flights: any[]) {
    flights.forEach((flight: any) => {
      if (
        !this.filterOptions.find(
          (option: string) =>
            option === flight.flight.flightSegments[0].airlineName
        )
      ) {
        this.filterOptions.push(flight.flight.flightSegments[0].airlineName);
      }
    });
  }
}
