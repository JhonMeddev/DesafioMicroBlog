import { Comentario } from "./Comentario";
import { Postagem } from "./Postagem";

export class Usuario{
  public id: number;
  public nome: string;
  public usuario: string;
  public senha: string;
  public tipo: string;
  public postagem: Postagem[];
  public comentario: Comentario[];
}
