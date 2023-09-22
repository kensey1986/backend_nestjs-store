import { Transform } from 'class-transformer';
import {
    IsDate,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength
  } from 'class-validator';
  export class LoginDto {

    @IsString()
    @IsNotEmpty()
    userName: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @IsNotEmpty()
    password: string;
  }