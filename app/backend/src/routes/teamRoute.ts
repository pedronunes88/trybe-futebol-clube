import { Request, Response, Router } from 'express';
import TeamsController from '../controller/teamsController';
// instancia
const TeamsControllerX = new TeamsController();
const routerInstance = Router();

// rota all teams
routerInstance.get('/', (req: Request, res: Response) => {
  TeamsControllerX.getAllTeams(req, res);
});

routerInstance.get('/:id', (req: Request, res: Response) => {
  TeamsControllerX.getTeamById(req, res);
});

export default routerInstance;
