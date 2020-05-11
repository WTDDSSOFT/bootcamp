import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

// agora estamos  ultilizando o typeorm will

/** agora will cada retorno nos usamos aas promisse e preciso usa o async e await */
import AppointmentsRepository from '../repositories/AppointmentsRepositort';
import CreateAppointmentsServices from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

/* * List all appointments */
appointmentsRouter.get('/', async (request, response) => {
  const appointemnetsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointemnetsRepository.find();

  return response.json(appointments);
});

//* * router create appointments */
appointmentsRouter.post('/', async (request, response) => {
  try {
    /**
     *  parsedDate-> converte o date(dia),de string que vem do body
     *  to formato de data, em javascript
     *  Salvando a data no formato certo.
     * */
    const { provider_id, date } = request.body;
    /** transformando o dado */
    const parsedDate = parseISO(date);
    /** appointments de hora em hora, ou seja regra de negocio */
    /** regra de nogocio de appointemnets */
    const CreateAppointment = new CreateAppointmentsServices();
    /** execulta esse servicer */
    const appointment = await CreateAppointment.execute({
      provider_id,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
