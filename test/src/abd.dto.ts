import { IsEmail, IsNotEmpty } from "class-validator";

export class abDTO
{
    @IsNotEmpty({message:"Not Possible"})
    @IsEmail()
    name:string
}