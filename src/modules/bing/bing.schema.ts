// bing.schema.ts
import { Schema } from 'mongoose'

export const bingSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  cdn_url: { type: String },
})
