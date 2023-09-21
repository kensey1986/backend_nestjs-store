import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
    lastname: string;

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
    username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
    password: string;

  @IsString()
  @IsOptional()
    image: string;

  @IsString()
  @IsNotEmpty()
    email: string;

  @IsOptional()
  @IsDate()
    createdAt: Date = new Date();
}
