import express from "express"
import { ENV } from '../config/env.js';
import { router } from '../router/user.router.js';
router


const app = express();
const PORT = ENV.PORT;

app.use(express.json())
app.use('/api/v1',router)

app.get('/api/test', (req, res) => {
  res.status(200).json({
   success:true,
  })
  app.get('/', (req, res) => {
    res.send(200).json({
      success:true,
    })
  })
})

export default app;
