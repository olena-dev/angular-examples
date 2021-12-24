import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent {
selectedCountry: string = 'UA';
@Output() country: EventEmitter<string> = new EventEmitter<string>();

  onCountrySelected() {
    this.country.emit(this.selectedCountry);
  }

}
