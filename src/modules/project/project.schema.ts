import { Schema } from 'mongoose'

export const projectSchema = new Schema({
  url: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  cdn_url: { type: String },
})
