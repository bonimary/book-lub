import type { AxiosInstance, AxiosResponse } from 'axios';
import { type BookAddType, bookSchema, type BookType } from '../types/bookTypes';
import axiosInstance from './axiosInstance';

class BooksService {
  constructor(private readonly client: AxiosInstance) {}

  // async getAllBooks(): Promise<BookType[]> {
  //   const { data } = await this.client<BookType[]>('/books');

  //   return bookSchema.array().parse(data);
  // }

  async getAllBooks(): Promise<BookType[]> {
    try {
      const { data } = await this.client<BookType[]>('/books');
      return bookSchema.array().parse(data);
    } catch (error) {
      console.error(error);
      throw new Error('Ошибка при получении книг');
    }
  }

  async getOneBook(id: BookType['id']): Promise<BookType> {
    const { data } = await this.client.get<BookType>(`/books/${id}`);
    console.log(data);
    return bookSchema.parse(data);
  }

  async submitBook(formData: BookAddType): Promise<BookType> {
    const { data } = await this.client.post<BookType>('/books', formData);

    return bookSchema.parse(data);
  }

  async deleteBook(id: BookType['id']): Promise<AxiosResponse> {
    return this.client.delete(`/books/${id}`);
  }
}

export default new BooksService(axiosInstance);
