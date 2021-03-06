import { Controller, Get, Query } from '@nestjs/common'
import { IHttpResponse } from '@app/common/interfaces/http.interface'
import YiYan from '@app/api/yiyan'
import nodemailer from 'nodemailer'
import emailConfig from '@app/config/email'
import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

@Controller('yiyan')
export class YiYanController extends YiYan {
  @Get('/get_today_card')
  async findTodayCard(): Promise<IHttpResponse<any>> {
    return {
      data: await this.getTodayCard(),
    }
  }

  @Get('/get_feeds')
  async findFeeds() {
    return { data: await this.getFeeds() }
  }

  @Get('/get_all_text_card')
  async findAllTextCard() {
    return { data: await this.getAllTextCard() }
  }

  @Get('/get_text_card_sinbook')
  async findTextCardSinBook(@Query('bookid') bookid: string) {
    return { data: await this.getTextCardSinBook(bookid) }
  }

  @Get('/check_liked')
  async checkLiked(@Query('cardid') cardid: string) {
    return { data: await this.checkLikedByCardid(cardid) }
  }

  async getHtml(data) {
    const yiyanEjs = await fs.readFileSync(
      path.resolve(__dirname, '../../common/email/yiyan.ejs'),
      'utf8',
    )
    return await ejs.render(yiyanEjs, data, {
      cache: true,
      filename: 'yiyan',
      async: true,
    })
  }

  transporter = nodemailer.createTransport(emailConfig)
  @Get('/send_mail')
  async sendMail(@Query('email') email: string) {
    const todayCard = await this.findTodayCard()
    const html = await this.getHtml({
      bingUrl: 'https://api.yang143.cn/geek/other/bing',
      yiyanList: todayCard?.data?.textcardlist || [],
    })
    // const transporter = nodemailer.createTransport(emailConfig)
    // send mail with defined transport object
    const info = await this.transporter.sendMail({
      from: '"Jonathan" <18270487784@163.com>', // sender address
      to: email, // list of receivers
      subject: 'Hello ✔', // Subject line
      // text: 'Hello world?', // plain text body
      html, // html body
    })
    return { data: 'Message sent: ' + info.messageId }
  }
}
