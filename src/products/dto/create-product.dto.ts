import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
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

  @IsOptional()
  @IsDate()
  createdAt: Date = new Date();
}
