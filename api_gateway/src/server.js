import app from "./app.js";
import env from "./env.js";

const { PORT } = env;

const bootstrap = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Available at : http://localhost:${PORT}`);
  });
};

bootstrap();
