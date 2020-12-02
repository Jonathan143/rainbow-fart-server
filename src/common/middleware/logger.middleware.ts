import { Request, Response } from 'express'

export default (req: Request, res: Response, next: () => void): void => {
  const { method, path } = req
  console.log(`${method} ${path}`)
  next()
}
