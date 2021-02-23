class PromisePool {
  pool = []
  urls = []
  max = 0
  fn

  constructor(max, fn) {
    this.max = max
    this.fn = fn
  }
  start(urls) {
    this.urls = urls
    while (this.pool.length < this.max) {
      const url = this.urls.shift()
      this.setTask(url)
    }
    const race = Promise.race(this.pool)
    return this.run(race)
  }
  run(race) {
    race.then(() => {
      const url = this.urls.shift()
      this.setTask(url)
      return this.run(Promise.race(this.pool))
    })
  }
  setTask(url) {
    if (!url) return
    const task = this.fn(url)
    this.pool.push(task)
    console.log(`${url} 开始，当前并发数：${this.pool.length}`)
    task.then(() => {
      this.pool.splice(this.pool.indexOf(task), 1)
      console.log(`${url} 结束，当前并发数：${this.pool.length}`)
    })
  }
}
const URLs = [
  'bytedance.com',
  'tencent.com',
  'alibaba.com',
  'microsoft.com',
  'apple.com',
  'hulu.com',
  'amazon.com',
]
let dur = 0
const requestFn = url => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`任务 ${url} 完成`)
    }, 1000 * dur++)
  }).then(res => {
    console.log('外部逻辑 ', res)
  })
}
const pool = new PromisePool(3, requestFn)
pool.start(URLs)
