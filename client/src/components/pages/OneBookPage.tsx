import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getOneBookThunk } from '../../redux/books/booksThunk';
import { getCategorysThunk } from '../../redux/category/categoryThunk';

export default function OneBookPage(): JSX.Element {
  const { id } = useParams();
  const book = useAppSelector((store) => store.books.currentBook);
  const categorys = useAppSelector((store) => store.categorys.caregorys);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getCategorysThunk());
  }, []);

  React.useEffect(() => {
    void dispatch(getOneBookThunk(Number(id)));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const categoryIt = categorys.find((category) => category.id === book.categoryId);

  return (
    <div className="one-book-page">
      <div className="book-info">
        <img src={book.imge} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Автор: {book.autor}</ListGroup.Item>
        <ListGroup.Item>Количество печатных станиц: {book.pages} шт.</ListGroup.Item>
        <ListGroup.Item>Язык: {book.language} </ListGroup.Item>
        <ListGroup.Item>Категория: {categoryIt ? categoryIt.name : 'Не найдена'} </ListGroup.Item>
      </ListGroup>
      <div className="book-actions">
        <Button variant="warning">Читать</Button>
      </div>
    </div>
  );
}
