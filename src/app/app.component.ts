import { Component, OnInit } from '@angular/core';
import { TestService } from "src/app/services/test.service";
import { CurrencyRateServiceService } from "src/app/services/currency-rate-service.service";
import { zip } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  constructor(private testService: TestService, private currencyRateServiceService: CurrencyRateServiceService) {
  }

  ngOnInit() {




  }
}
