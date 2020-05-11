import { EntityRepository, Repository } from 'typeorm';

import Appointement from '../models/Appointments';

// aqui estão o formato dos appointments

// arquivo responsavel por tudo que vair mexer nos dados de appointements de
// alguma forma.

/** o repositorio o detentor responsavel pelas operações que vamos fazer sobre
 * os dados na nossa aplicação.
 */
/** Agora aqui will esta utlizando o db com typeorm */

/** ultlizando o typeorm */
@EntityRepository(Appointement)
// extendendo a classe
class AppointementsRepository extends Repository<Appointement> {
  // aqui e uma interface Repository<Appointement> <- parametro de uma tipagem recebe o model
  public async findByDate(date: Date): Promise<Appointement | null> {
    const findAppointments = await this.findOne({
      where: { date },
    });
    // aqui e um else(si não).
    return findAppointments || null;
  }
}

export default AppointementsRepository;
