import { Module } from '@nestjs/common'
// import { MongooseModule } from '@nestjs/mongoose'
import { YiYanController } from './yiyan.controller'
// import { yiyanSchema } from './yiyan.schema'
import { YiYanService } from './yiyan.service'

@Module({
  //   imports: [MongooseModule.forFeature([{ name: 'YiYans', schema: yiyanSchema }])],
  controllers: [YiYanController],
  providers: [YiYanService],
})
export class YiYanModule {}
