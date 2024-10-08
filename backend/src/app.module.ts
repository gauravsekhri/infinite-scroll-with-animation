import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
