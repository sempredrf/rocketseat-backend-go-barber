import { Router, Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();
  const respSession = await authenticateUser.execute({
    email,
    password,
  });

  delete respSession.user.password;

  return response.json(respSession);
});

export default sessionsRouter;
