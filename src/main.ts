import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import logger from './common/middleware/logger.middleware'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 全局中间件
  app.use(logger)

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000)
}
bootstrap()
