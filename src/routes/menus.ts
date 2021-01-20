import express from 'express';

const Router = express.Router();

Router.get('/', (req, res, next) => {
	res.send('get');
});

Router.post('/', (req, res, next) => {
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
