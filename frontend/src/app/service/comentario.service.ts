import { Comentario } from './../model/Comentario';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllComentario(): Observable<Comentario[]>{

    return this.http.get<Comentario[]>('https://desafiomicroblog.herokuapp.com/comentarios', this.token)
  }

  getByIdComentario(id: number): Observable<Comentario>{
    return this.http.get<Comentario>(`https://desafiomicroblog.herokuapp.com/comentarios/${id}`, this.token)
  }

  postComentario(comentario: Comentario): Observable<Comentario>{

    return this.http.post<Comentario>('https://desafiomicroblog.herokuapp.com/comentarios', comentario, this.token)
  }

  putComentario(comentario: Comentario): Observable<Comentario>{

    return this.http.put<Comentario>('https://desafiomicroblog.herokuapp.com/comentarios', comentario, this.token)
  }

  deleteComentario(id: number){

    return this.http.delete(`https://desafiomicroblog.herokuapp.com/comentarios/${id}`, this.token)
  }

}
