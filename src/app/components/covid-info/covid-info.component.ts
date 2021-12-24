import { Component, OnInit } from '@angular/core';
import { TestService } from "src/app/services/test.service";
import { Observable } from "rxjs";
import { CovidInfoModel } from "src/app/components/covid-info/covid-info.model";
import { Subject } from "rxjs";


@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.css']
})
export class CovidInfoComponent implements OnInit {

  constructor(private covidService: TestService) {
  }
  countryInfo$: Observable<CovidInfoModel[]> = new Subject();


  ngOnInit() {
    this.covidService.test().subscribe((r) => {
      console.log(r)
    })
  }

  onCountryChanged(selectedCountry: string) {
    this.countryInfo$ = this.covidService.getCovidDataByCountry(selectedCountry);
  }
}
