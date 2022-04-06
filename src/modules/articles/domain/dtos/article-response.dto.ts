import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

import { ProviderProps } from './create-article.dto';

export class ArticleResponseDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  id: number;
  
  @ApiProperty()
  featured: boolean;

  @ApiProperty()
  title: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  newsSite: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  publishedAt: string;

  @ApiProperty({ example: [] })
  launches: ProviderProps[];

  @ApiProperty({ example: [] })
  events: ProviderProps[];

  @ApiProperty()
  created_at: Date;
}