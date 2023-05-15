import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { Jwtdto } from '../model/jwtdto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL= environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) { }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<Jwtdto>{
    return this.httpClient.post<Jwtdto>(this.URL + 'login', loginUsuario)
  }
}
