import { Postagem } from './Postagem';
import { Usuario } from "./Usuario";

export class Comentario{
  public id: number;
  public texto: string;
  public data: Date;
  public postagem : Postagem;
  public usuario: Usuario;
}
