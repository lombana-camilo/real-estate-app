import server from "./src/server.js";
import { db } from "./src/db.js";
const { PORT } = process.env;

db.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
