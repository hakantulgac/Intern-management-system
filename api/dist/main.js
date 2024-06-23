"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
const dotenv_1 = require("dotenv");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    (0, dotenv_1.config)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:5000',
        credentials: true
    });
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map