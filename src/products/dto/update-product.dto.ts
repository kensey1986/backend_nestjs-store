import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @IsInt()
  stock: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  base_price: number;

  @IsNumber()
  @IsOptional()
  sale_price: number;

  @IsOptional()
  @IsString()
  image: string;
}
