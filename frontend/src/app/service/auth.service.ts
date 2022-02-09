import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://desafiomicroblog.herokuapp.com/usuarios/logar', userLogin);
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://desafiomicroblog.herokuapp.com/usuarios/cadastrar', usuario);

  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://desafiomicroblog.herokuapp.com/usuarios/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false;

    if(environment.token != '') {
      ok =true;
    }

    return ok
  }
}


