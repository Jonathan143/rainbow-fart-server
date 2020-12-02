export enum RCode {
  OK,
  FAIL,
  ERROR,
}

// HTTP 状态返回
export interface IHttpResponseBase<T = unknown> {
  code?: RCode
  message?: string
  data?: T
}

// 翻页数据
export interface IHttpResultPaginate {
  code?: RCode
  message?: string
  data: {
    list: []
    tatal: number
    pageSize: number
    pageIndex: number
    totalPage: number
  }
}
