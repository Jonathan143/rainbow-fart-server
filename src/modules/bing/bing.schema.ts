// bing.schema.ts
import dayjs from 'dayjs'
import { Schema } from 'mongoose'

export const bingSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  cdn_url: { type: String },
})

export const cronSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  is_opened: {
    type: Boolean,
    default: false,
  },
  created_time: {
    type: String,
    default: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  },
  start_time: String,
  end_time: String,
  execution_count: {
    type: Number,
    default: 0,
  },
  execution_total: {
    type: Number,
    default: 0,
  },
  day_of_week: Number,
  month: Number,
  day_of_month: Number,
  hour: Number,
  minute: Number,
  second: Number,
})
