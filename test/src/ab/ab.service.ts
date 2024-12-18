import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';

@Injectable()
export class AbService {
    getAb():string{
        return "ab"
    }
    private users =[]
    add(data)
    {
        this.users.push(data)
        return{message:"data Inserted",data}

    }
    getAll()
    {
        return this.users
    }

    spec(name)
    {
        return this.users.find((user)=>user.name==name)||{message:'not found'}
    }

}
