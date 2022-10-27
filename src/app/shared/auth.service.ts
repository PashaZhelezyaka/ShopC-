import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { UserLoginAdmin } from "../../interface/interface";
import { tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: UserLoginAdmin) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
      user).pipe(tap(res => this.setToken(res)));
  }

  private setToken(response: any) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem("fb-expDate-token", expDate.toDateString());
      localStorage.setItem("fb-token", response.idToken);
    }
    else {
      localStorage.clear();
    }
  }

  private get token(): string | null {
    const exDate = new Date(localStorage.getItem("fb-expDate-token") as string);
    if (exDate > new Date) {
      this.logout();
      return null;
    }
    else {
      return localStorage.getItem("fb-token");
    }
  }

  logout() {
    this.setToken(null);
  }

  isAuth(): boolean {
    return !!this.token
  }

}
