// modelo.

// Entidade, praticamente e o mesmo de interface

/** aqui discrve o appointements define o formato dos dados
 * A responsabilidade de cria os appointments estão aqui nesse arquivo
 * ou seja formato dos dados.
 */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'; // algo que vai ser salvo no db
/** decoretor
 * Funciona com ser foçe uma função
 * vai pega a função Entity e como parametro para essa função vai enviar
 * a classe Apointments, ou seja a class e um parametro da Entity
 */
@Entity('users') // passando o nome da table on  db.
class User {
  /** classe :aqui podemos propriedades da classe que não são conlunas do db */

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default User;
