import express from 'express';
import { MenuController } from '../controllers/MenuController';

const Router = express.Router();

Router.get('/', (req, res, next) => {
	res.send('get');
});

Router.post('/', (req, res, next) => {
	try {
    const menuController = new MenuController();
    menuController.createMenu(req);
	} catch(error) {

	}
	res.send('post');
});

Router.get('/:id', (req, res, next) => {
	res.send('get');
});

Router.put('/:id', (req, res, next) => {
	res.send('put');
});

Router.delete('/:id', (req, res, next) => {
	res.send('delete');
});

export const router = Router;
