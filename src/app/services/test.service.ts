import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TestService {
  covidApiUrl = 'https://covid-19-data.p.rapidapi.com';

  constructor(private httpClient: HttpClient) {
  }

  getCovidDataByCountry(code: string): Observable<any> {
    const headerDict = {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'a2be6da4c0mshbbdec467b737b20p11a67ejsnd67a8ceb8a48'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.httpClient.request('get', this.covidApiUrl + '/country/code?code='+ code, requestOptions)
  }

  getListOfCountries() {
    const headerDict = {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': 'a2be6da4c0mshbbdec467b737b20p11a67ejsnd67a8ceb8a48'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.httpClient.request('get', this.covidApiUrl + '/help/countries', requestOptions)

  }

  test() {
    const headerDict = {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      // 'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
      // 'x-rapidapi-key': 'a2be6da4c0mshbbdec467b737b20p11a67ejsnd67a8ceb8a48',
      'x-access-token': 'a178f5b65a824a9f54d30f2f37421ac2'
    }


    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.httpClient.request('get', 'http://localhost:4200/prices/cheap?origin=LWO&destination=HKT&token=a178f5b65a824a9f54d30f2f37421ac2', requestOptions)
  }
}
