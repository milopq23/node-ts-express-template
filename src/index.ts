import express, { Request, Response } from 'express';
import appConfig from './config/app.config';

const app = express();


// Middleware (tuỳ chọn)
app.use(express.json());

// Định nghĩa route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


// Lắng nghe cổng
app.listen(appConfig.PORT, () => {
  console.log(`Server is running at http://localhost:${appConfig.PORT}`);
});
