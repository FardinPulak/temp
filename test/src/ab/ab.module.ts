import { Module } from '@nestjs/common';
import { AbController } from './ab.controller';
import { AbService } from './ab.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  
    imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost' ,
      port: 5432,
      username: 'postgresql',
      password: '1234',
      database: 'test',
      entities: [],
      synchronize: true,
    })],
  controllers: [AbController],
  providers: [AbService],
})
export class AbModule {}
