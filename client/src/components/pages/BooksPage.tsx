import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getBooksThunk } from '../../redux/books/booksThunk';

export default function BooksPage(): JSX.Element {
  const books = useAppSelector((store) => store.books.books);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(getBooksThunk());
  }, []);

  return (
    <>
      {books.map((el) => (
        <Card sx={{ maxWidth: 345 }} key={el.id}>
          <CardMedia sx={{ height: 140 }} image={el.imge} title={el.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {el.autor}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

