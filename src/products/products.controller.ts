import { Controller, Get, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get('records')
  async getAllProducts(@Query('page') page: string) {
    return await this.ProductsService.getProducts(page);
  }

  @Post('insert-one')
  async insertOne() {
    return await this.ProductsService.insertOneProduct();
  }

  @Post('insert-tenk')
  async insertTenK() {
    return await this.ProductsService.insertTenThousand();
  }
}
