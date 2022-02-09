import { Comentario } from './Comentario';
import { Usuario } from "./Usuario";

export class Postagem{
  public id: number;
  public titulo: string;
  public texto: string;
  public data: Date;
  public usuario: Usuario;
  public comentario: Comentario[]
}
