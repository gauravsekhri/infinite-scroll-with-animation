import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Aggregate, AggregateOptions, Model, PipelineStage } from 'mongoose';
import { Product } from './products.model';
import { v4 as uuidv4 } from 'uuid';
import {
  uniqueNamesGenerator,
  Config,
  names,
  languages,
  countries,
} from 'unique-names-generator';
import ApiResponse from 'src/utils/ApiResponse';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

const name_config: Config = {
  dictionaries: [names, languages],
  separator: ' - ',
};
const country_config: Config = {
  dictionaries: [countries],
};

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async insertOneProduct(): Promise<Product> {
    return await new this.productModel({
      productId: 'pId-' + uuidv4(),
      productName: uniqueNamesGenerator(name_config),
    }).save();
  }

  async insertTenThousand(): Promise<any> {
    const req_products: any[] = [];

    for (let k = 0; k < 10000; k++) {
      req_products.push({
        productId: 'pId-' + uuidv4(),
        productName: uniqueNamesGenerator(name_config),
        country: uniqueNamesGenerator(country_config),
      });
    }

    return await this.productModel.insertMany(req_products);
  }

  async getProducts(page: string): Promise<ApiResponse> {
    if (!page) {
      return new ApiResponse(true, 200, 'Page number is required.', []);
    }

    const loadCount: number = 10;
    const req_aggreg: PipelineStage[] = [
      {
        $skip: (parseInt(page) + 1 - 1) * loadCount,
      },
      {
        $limit: loadCount,
      },
    ];

    const chache_key = JSON.stringify(req_aggreg);
    const cache_value = await this.cacheManager.get(chache_key);

    if (cache_value) {
      return new ApiResponse(true, 200, 'Records found', cache_value);
    } else {
      const result: Product[] = await this.productModel.aggregate(req_aggreg);
      await this.cacheManager.set(chache_key, result, 1000);
      return new ApiResponse(true, 200, 'Records found', result);
    }
  }
}
