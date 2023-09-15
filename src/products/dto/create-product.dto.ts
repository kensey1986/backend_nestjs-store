import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
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

  @IsOptional()
  @IsDate()
  createdAt: Date = new Date();
}
