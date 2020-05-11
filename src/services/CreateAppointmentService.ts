import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepositort';
// responsavel pela criação dos appintements
/**
 * [X]Recebimento das informações.
 * [X]Tratativa de erros/execessões.
 * [x]Acesso ao repositorio.
 */

/** service  nunca  tem acesso a requisição e a resposta ou use do express */

interface Request {
  // DTO
  provider_id: string;
  date: Date;
}
// Dependency Inversion (SOLID).
// Single Reponsability Principal.

/**
 * toda vez que temos uma função asincro nos retornamos uma  promise
 */

class CreateAppointmentService {
  // private appointmentsRepository: AppointementsRepository;

  // /** execultando a criação de algo, no caso appointments repositories */
  // constructor(appointmentsRepository: AppointementsRepository) {
  //   this.appointmentsRepository = appointmentsRepository;
  // }

  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    /** aqui estão todos os metodos que queremos Ex: create, find etc */
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentsInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentsInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    /** salvando o o registro no banco de dados. */
    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
