import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProjectController } from './project.controller'
import { projectSchema } from './project.schema'
import { ProjectService } from './project.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Projects', schema: projectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
