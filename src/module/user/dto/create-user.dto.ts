import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserCreatableInterface } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsStrongPassword } from 'src/common/decorators/is-strong-password/is-strong-password';

export class CreateUserDto implements UserCreatableInterface {

    @ApiProperty({
        type: 'string',
        description: 'username para acessar a aplicação',
        example: 'fulaninho123'
    })
    @IsString()
    username!: string;

    @ApiProperty({
        type: 'string',
        description: 'password para acessar a aplicação',
        example: 'Fulano1234'
    })
    @IsString()
    @IsStrongPassword()
    password!: string;

    @ApiProperty({
        type: 'string',
        description: 'firstname para acessar a aplicação',
        example: 'Fulano'
    })
    @IsString()
    firstName!: string;

    @ApiProperty({
        type: 'string',
        description: 'lastname para acessar a aplicação',
        example: 'Silva'
    })
    @IsString()
    @IsOptional()
    lastName!: string;

    @ApiProperty({
        type: 'string',
        description: 'email para acessar a aplicação',
        example: 'email@email.com'
    })
    @IsString()
    @IsEmail()
    email!: string;
}