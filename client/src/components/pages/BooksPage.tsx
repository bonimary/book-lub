import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { deleteBookThunk, getBooksThunk, getOneBookThunk } from '../../redux/books/booksThunk';
import { setModalContent } from '../../redux/books/bookSlice';
import EditModalForm from '../ui/EditModalForm';

export default function BooksPage(): JSX.Element {
  const books = useAppSelector((store) => store.books.books);
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = React.useState<string>('');

  React.useEffect(() => {
    void dispatch(getBooksThunk());
  }, []);

  const handleBookClick = (id: number): void => {
    void dispatch(getOneBookThunk(id));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.autor.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="book-page">
      <input
        type="text"
        placeholder="Книга или автор"
        value={searchText}
        onChange={handleSearchChange}
        style={{ margin: '20px', padding: '10px', width: '300px' }}
      />
      <div className="card-container">
        {filteredBooks.map((el) => (
          <Card style={{ width: '18rem', margin: '10px' }} key={el.id}>
            <Card.Img variant="top" src={el.imge} style={{ height: '500px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.autor}</Card.Text>
              <Link to={`/books/${el.id}`} onClick={() => handleBookClick(el.id)}>
                <Button variant="warning">Подробнее</Button>
              </Link>
              <Button variant="danger" onClick={() => void dispatch(deleteBookThunk(el.id))}>
                Удалить
              </Button>
              <Button variant="danger" onClick={() => dispatch(setModalContent(el))}>
                Изменить
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <EditModalForm />
    </div>
  );
}
