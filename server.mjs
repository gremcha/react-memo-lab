import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const createServer = (name, port, distPath) => {
  const app = express();
  const absolutePath = path.resolve(__dirname, distPath);

  // Раздаем статические файлы (JS, CSS, картинки)
  app.use(express.static(absolutePath));

  // SPA fallback: любой запрос, не подошедший под статику, отправляем в index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(absolutePath, 'index.html'));
  });

  app.listen(port, () => {
    console.log(`🚀 ${name} build is running at http://localhost:${port}`);
  });
};

// Запускаем оба сервера
createServer('React 18', 8018, 'apps/app-react-18/dist');
createServer('React 19', 8019, 'apps/app-react-19/dist');
