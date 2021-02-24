import http from '@app/lib/http'
import yiyanConfig from '@app/config/yiyan'

interface apiParams {
  api: string
  method?: 'get' | 'post'
  params?: Record<string, any>
  config?: Record<string, any>
}

export default class YiYan {
  constructor() {}

  callYiyan(apiParams: apiParams): Promise<any> {
    const { api, method = 'post', params = {}, config = {} } = apiParams
    return http({
      url: `${yiyanConfig.domain}/yiyan/${api}`,
      method,
      data: params,
      params,
      headers: { Cookie: yiyanConfig.cookie },
      ...config,
    })
  }

  /**
   * 获取首页今日卡片
   */
  getTodayCard(): Promise<any> {
    return this.callYiyan({
      api: 'gettodaycard',
      params: {
        t: '79f9481caeab916fa300fe02fda34267',
      },
    })
  }

  /**
   * 获取订阅的卡片（每日推送）
   */
  getFeeds() {
    return this.callYiyan({ api: 'getfeeds' })
  }

  /**
   * 获取所有文本卡片(发现页)
   */
  getAllTextCard() {
    return this.callYiyan({ api: 'getalltextcard', method: 'get' })
  }

  /**
   * 获取文集
   */
  getTextCardSinBook(bookid: string | number) {
    return this.callYiyan({
      api: 'gettextcardsinbook',
      method: 'get',
      params: { bookid },
    })
  }

  /**
   * 根据cardid获取卡片详情
   */
  getCardDetail(cardid: string | number) {
    return this.callYiyan({
      api: 'getcarddetail',
      method: 'get',
      params: { cardid },
    })
  }

  /**
   * 查询是否喜欢
   */
  checkLikedByCardid(cardid: string | number) {
    return this.callYiyan({
      api: 'checkliked',
      method: 'get',
      params: { cardid },
    })
  }
}
