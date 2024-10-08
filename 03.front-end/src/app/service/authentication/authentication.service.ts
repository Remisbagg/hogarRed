import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "../../app-constant";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  login(account: any) {
    return this.httpClient.post<any>(AppConstants.BASE_URL_API + "/v1/auth", account);
  }  
}
