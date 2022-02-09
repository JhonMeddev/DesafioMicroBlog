import { Postagem } from './../model/Postagem';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor( private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens (): Observable<Postagem[]>{

    return this.http.get<Postagem[]>('https://desafiomicroblog.herokuapp.com/postagens', this.token)
  }

  getByIdPostagens (id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://desafiomicroblog.herokuapp.com/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{

    return this.http.post<Postagem>('https://desafiomicroblog.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://desafiomicroblog.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://desafiomicroblog.herokuapp.com/postagens/${id}`, this.token)
  }

}
