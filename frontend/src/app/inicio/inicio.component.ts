import { Postagem } from './../model/Postagem';
import { PostagemService } from './../service/postagem.service';
import { AuthService } from './../service/auth.service';
import { Usuario } from './../model/Usuario';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from '../model/Comentario';
import { ComentarioService } from '../service/comentario.service';
import { map, mergeMap, Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem();
  listaPostagens : Postagem[]

  comentario: Comentario = new Comentario();
  listaComentarios : Comentario[]
  idComentario: number

  user: Usuario = new Usuario();
  idUser = environment.id

  todosPostsAndComents: any

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private comentarioService: ComentarioService,
    private authService: AuthService,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

   if(environment.token == '') {
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.authService.refreshToken()
    //this.getAllPostagens()
    //this.getAllComentario()
    this.getAllComentsAndPosts()
  }

  getAllComentsAndPosts(){
    this.getAllPostagens().pipe(
      mergeMap((posts)=>this.getAllComentario().pipe(
        map((coments)=>({posts, coments}))
      ) )

    ).subscribe((resp: any)=> {
      this.todosPostsAndComents = resp
    })
  }

  getAllComentario(): Observable<any>{
    return this.comentarioService.getAllComentario()/*.subscribe((resp: Comentario[]) => {
      this.listaComentarios = resp
    })*/
  }

  findByIdComentario(){
    this.comentarioService.getByIdComentario(this.idComentario).subscribe((resp: Comentario) => {
      this.comentario = resp
    })
  }

  getAllPostagens(): Observable<any>{
    return this.postagemService.getAllPostagens()/*.subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })*/
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp

    })
  }

  publicar(){

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  comentar({post, coment}: any) {

    console.log(post.id, coment.id)



    /*this.user.id = this.idUser
    this.comentario.usuario = this.user

    this.comentarioService.postComentario(this.comentario).subscribe((resp: Comentario) => {
      this.comentario = resp
      alert('Comentario realizado com sucesso!')
      this.comentario = new Comentario()
      this.getAllComentario()
    })*/
  }

}


