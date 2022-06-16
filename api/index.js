import server from "./src/server.js";
import { db } from "./src/db.js";
const { PORT } = process.env;

db.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
