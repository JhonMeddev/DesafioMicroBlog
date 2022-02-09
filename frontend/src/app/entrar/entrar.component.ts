import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin();

  constructor(
    private auth : AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo;

      console.log(environment.tipo);


      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha Incorreto!')
      }
    })
  }

}
