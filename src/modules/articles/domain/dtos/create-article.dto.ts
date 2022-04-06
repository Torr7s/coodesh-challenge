import { ApiProperty } from '@nestjs/swagger';

import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';

import { IProvider } from '@modules/articles/infra/mongoose/models/article.model';

export interface ProviderProps extends Omit<IProvider, 'id'> { }

export class CreateArticleDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newsSite: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  summary: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  publishedAt: string;

  @ApiProperty({ example: [] })
  @IsArray()
  @ValidateNested({ each: true })
  launches: ProviderProps[];

  @ApiProperty({ example: [] })
  @IsArray()
  @ValidateNested({ each: true })
  events: ProviderProps[];
}