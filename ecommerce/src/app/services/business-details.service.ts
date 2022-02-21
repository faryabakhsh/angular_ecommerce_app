import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { BusinessComponent } from '../pages/business/business.component';
@Injectable({
  providedIn: 'root'
})
export class BusinessDetailsService {

  constructor(public httpClient: HttpClient) { }

  getBusiness(): Observable<any> {

    return this.httpClient.get('http://localhost:3000/business');
  }


  // In the create method, we are doing 
  //  a post, because we are creating a new resource
  createBusiness(data: any) {

    return this.httpClient.post('http://localhost:3000/business', data);

  }

}
