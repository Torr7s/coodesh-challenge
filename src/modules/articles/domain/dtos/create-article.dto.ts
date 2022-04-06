import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  ValidateNested
} from 'class-validator';

import { IProvider } from '@modules/articles/infra/mongoose/models/article.model';

interface ProviderProps extends Omit<IProvider, 'id'> { }

export class CreateArticleDto {
  @IsBoolean()
  @IsNotEmpty()
  featured: boolean;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  newsSite: string;

  @IsString()
  @IsNotEmpty()
  summary: string;

  @IsString()
  @IsNotEmpty()
  publishedAt: string;

  @IsArray()
  @ValidateNested({ each: true })
  launches: ProviderProps[];

  @IsArray()
  @ValidateNested({ each: true })
  events: ProviderProps[];
}