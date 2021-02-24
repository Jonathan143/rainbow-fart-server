import { Controller, Get, Param } from '@nestjs/common'
import { IHttpResponse } from '@app/common/interfaces/http.interface'
import YiYan from '@app/api/yiyan'

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
  async findTextCardSinBook(@Param('bookid') bookid: string) {
    return { data: await this.getTextCardSinBook(bookid) }
  }

  @Get('/check_liked')
  async checkLiked(@Param('cardid') cardid: string) {
    return { data: await this.checkLikedByCardid(cardid) }
  }
}
