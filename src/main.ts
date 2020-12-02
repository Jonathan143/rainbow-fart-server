import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 全局中间件

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter())

  // 全局拦截器
  app.useGlobalInterceptors(new LoggingInterceptor())

  await app.listen(3000)
}
bootstrap()
