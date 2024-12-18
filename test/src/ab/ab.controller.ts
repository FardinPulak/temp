import { Body, Controller, Get ,Param,Post} from '@nestjs/common';
import { AbService } from './ab.service';
import { abDTO } from 'src/abd.dto';

@Controller('ab')
export class AbController {
    constructor(private readonly abService: AbService) {}
    
    @Get()
    getHello(@Body() data:abDTO) {
      return data;
    }

    @Post("/add")
    add(@Body() data)
    {
      return this.abService.add(data)

    }

    @Get("/getall")
    getall()
    {
      return this.abService.getAll()
    }
    //param
    @Get("/getall/:name")
    spec(@Param('name')name)
    {
      return this.abService.spec(name)
    }

}
