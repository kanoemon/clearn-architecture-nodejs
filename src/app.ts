import express from 'express';

import { router as menusRouter } from './routes/menus';

const app = express()
const port = 3000

app.use('/menus', menusRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
