import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class WechatService {
  constructor(
    @InjectModel('Wechats') private readonly wechatModel: Model<any>,
  ) {}
}
