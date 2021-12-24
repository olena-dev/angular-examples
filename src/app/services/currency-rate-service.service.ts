import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateServiceService {

  constructor(private httpService: HttpClient) { }

  getExchangeRate(date: string) {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.httpService.request('GET', `https://bank.gov.ua/NBU_Exchange/exchange?json&date=${date}`, requestOptions)
  }
//${date.toLocaleDateString().split(',')[0]}
}
