import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = false; // We are in production for this script
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      if (req.url) {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } else {
        res.statusCode = 400;
        res.end('Bad Request');
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
