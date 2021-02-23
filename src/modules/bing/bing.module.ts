import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { BingController } from './bing.controller'
import { bingSchema } from './bing.schema'
import { BingService } from './bing.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bings', schema: bingSchema }])],
  controllers: [BingController],
  providers: [BingService],
})
export class BingModule {}
