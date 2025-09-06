import express from 'express';
import { ENV } from './config/env.js';
import { router } from './router/user.router.js';

const app = express();
const PORT = ENV.PORT;

app.use(express.json());
app.use('/api/v1', router);

// Test route
app.get('/api/test', (req, res) => {
  res.status(200).json({
    success: true,
  });
});

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend is running 🚀',
  });
});

app.listen(PORT, () => {
  console.log("app is listen the port ",PORT);
})
