import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import {getCategorysThunk} from '../../redux/category/categoryThunk';
import { getBooksThunk } from '../../redux/books/booksThunk';

export default function ChoisePage(): JSX.Element {
  const categorys = useAppSelector((store) => store.categorys.caregorys);
  const books = useAppSelector((store) => store.books.books);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getCategorysThunk());
    void dispatch(getBooksThunk());
  }, []);

  if (!categorys || !books) {
    return <div>Loading...</div>;
  }

  const categoryButtons = categorys.map((category) => {
    const booksInCategory = books.filter((book) => book.categoryId === category.id);
    return (
      <Button key={category.id} variant="warning" style={{ margin: 10 }}>
        {category.name} ({booksInCategory.length})
      </Button>
    );
  });
  return (
    <div>
      <h1>Категория книг</h1>
      {categoryButtons}
    </div>
  );
}
