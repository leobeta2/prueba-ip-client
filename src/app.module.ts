import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpController } from './ip.controller';

@Module({
  imports: [],
  controllers: [AppController, IpController],
  providers: [AppService],
})
export class AppModule {}
