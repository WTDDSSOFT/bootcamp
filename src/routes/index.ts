import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();
// redireciona para a rota de appointments.
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
