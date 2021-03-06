import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { IHttpResponse } from '@app/common/interfaces/http.interface'
import simpleGit from 'simple-git'

const git = (name = '') =>
  simpleGit({
    baseDir: process.cwd() + '/project/' + name,
    binary: 'git',
    maxConcurrentProcesses: 6,
  })

@Controller('project')
export class ProjectController {
  @Post('/clone')
  async projectClone(@Body('url') url: string): Promise<IHttpResponse> {
    const cloneTimeer = setTimeout(() => {
      return { data: 'waiting' }
    }, 6000)

    await git().clone(url)
    clearTimeout(cloneTimeer)

    return {
      data: `clone success ${url}`,
    }
  }

  /**
   * 查询提交日志
   * @param body
   * @returns
   */
  @Post('/logs')
  async projectLogs(@Body() body: any): Promise<IHttpResponse> {
    const log = await git(body.name).log({ n: 100 })

    return {
      data: { name: body.name, log },
    }
  }

  /**
   * 查询分支
   * @param name 项目名称
   * @param local 传入值则只返回本地分支
   * @returns {
   *    all: string[] 所有分支名
   *    branches: {}[]
   *    current: string 当前分支
   *    detached: boolean 独立的
   * }
   */
  @Get('/branch')
  async projectBranchLocal(
    @Param('name') name: string,
    @Param('type') local = '',
  ) {
    return {
      data: local ? await git(name).branchLocal() : await git(name).branch(),
    }
  }
}
