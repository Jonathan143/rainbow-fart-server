import { Controller, Get, Res } from '@nestjs/common'
import { IHttpResponse } from '@app/common/interfaces/http.interface'
import { Response } from 'express'
import http from '@app/lib/http'

@Controller('bing')
export class BingController {
  @Get('/today')
  async findBingToday(): Promise<IHttpResponse<any>> {
    const data: any = await http.get(
      'http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',
    )
    const { url, enddate, startdate, copyright } = data.images[0]
    const bingUrl = `https://cn.bing.com/${url}`
    return {
      data: {
        url: bingUrl,
        enddate,
        startdate,
        title: copyright,
      },
    }
  }

  @Get('/img_today')
  async findBingTodayForImg(@Res() res: Response): Promise<any> {
    const data: any = await http.get(
      'http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',
    )
    const { url } = data.images[0]
    res.status(302).redirect(`https://cn.bing.com/${url}`)
    return {}
  }
}
