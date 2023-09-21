import { Transform } from 'class-transformer';
import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength
  } from 'class-validator';
  export class RegisterDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firtsName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  address: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  userName: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsDate()
  createdAt: Date = new Date();

  }