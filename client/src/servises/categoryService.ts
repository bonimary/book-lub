import type { AxiosInstance } from 'axios';
import { type CategoryType, categorySchema } from '../types/categoryTypes';
import axiosInstance from './axiosInstance';

class CategoryService {
  constructor(private readonly client: AxiosInstance) {}

  async getAllCategorys(): Promise<CategoryType[]> {
    const { data } = await this.client<CategoryType[]>('/categorys');

    return categorySchema.array().parse(data);
  }
}

export default new CategoryService(axiosInstance);
