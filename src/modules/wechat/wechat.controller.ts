import { Controller, Get, Query } from '@nestjs/common'
import { WechatAuthDto } from './wechat.dto'
import sha1 from 'sha1'
import { IHttpResponse } from '@app/common/interfaces/http.interface'

const wechatConfig = {
  appID: 'wxe17qw13824c12c',
  appSecret: 'bb6586f9c6307fc92',
  token: '123',
}

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
