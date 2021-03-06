import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('Projects') private readonly projectModel: Model<any>,
  ) {}
}
