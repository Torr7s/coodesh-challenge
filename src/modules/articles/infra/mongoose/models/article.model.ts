import { v4 as uuid } from 'uuid';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ArticleDocument = ArticleModel & Document

export interface IProvider {
  id: string;
  provider: string
}

@Schema()
export class ArticleModel {
  @Prop({
    type: mongoose
      .Schema
      .Types
      .String,
    auto: true
  })
  _id: string;

  @Prop({ type: Number, unique: true })
  id: number;

  @Prop({ type: Boolean, default: false })
  featured: boolean;

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String })
  imageUrl: string;

  @Prop({ type: String })
  newsSite: string;

  @Prop({ type: String })
  summary: string;

  @Prop({ type: String })
  publishedAt: string;

  @Prop({
    type: [{
      id: {
        type: mongoose
          .Schema
          .Types
          .String,
        auto: true
      },
      provider: {
        type: String
      }
    }]
  })
  launches: IProvider[];

  @Prop({
    type: [{
      id: {
        type: mongoose
          .Schema
          .Types
          .String,
        auto: true
      },
      provider: {
        type: String
      }
    }]
  })
  events: IProvider[];

  @Prop({ type: Date, default: Date.now() })
  created_at: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(ArticleModel)

ArticleSchema.pre<ArticleDocument>('save', async function () {
  if (this.isNew) this._id = uuid()
})