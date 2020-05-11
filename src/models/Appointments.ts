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
  ManyToOne,
  JoinColumn,
} from 'typeorm'; // algo que vai ser salvo no db

import User from './User';

/** decoretor
 * Funciona com ser foçe uma função
 * vai pega a função Entity e como parametro para essa função vai enviar
 * a classe Apointments, ou seja a class e um parametro da Entity
 */

/** KISS  - key simple a Stupid */
@Entity('appointments') // passando o nome da table on  db.
class Appointment {
  /** classe :aqui podemos propriedades da classe que não são conlunas do db */

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  /** propriedade */
  /**
   * Relacionamento no db
   *  one to one
   *  ono to many
   *  many to many mais de prestado de servico pode participa
   */
  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Appointment;
