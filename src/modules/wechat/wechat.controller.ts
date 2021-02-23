import { Controller, Get, Query } from '@nestjs/common'
import { WechatAuthDto } from './wechat.dto'
import sha1 from 'sha1'
import { IHttpResponse } from '@app/common/interfaces/http.interface'
import wechatConfig from '@app/config/wechat'

@Controller('wechat')
export class WechatController {
  @Get()
  async wechatAuth(
    @Query()
    query: WechatAuthDto,
  ): Promise<string> {
    const { signature, nonce, timestamp, echostr } = query
    const str = [wechatConfig.token, timestamp, nonce].sort().join('')
    const sha = sha1(str)
    return sha === signature ? echostr + '' : 'failed'
  }

  @Get('access_token')
  async wechatAccessToken(): Promise<IHttpResponse> {
    return
  }
}
