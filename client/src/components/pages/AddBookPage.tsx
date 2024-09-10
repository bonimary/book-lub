import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { submitBookThunk } from '../../redux/books/booksThunk';
import { getCategorysThunk } from '../../redux/category/categoryThunk';
import type { BookAddType } from '../../types/bookTypes';

export default function AddBookPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((store) => store.categorys.caregorys);

  const navigate = useNavigate();

  useEffect(() => {
    void dispatch(getCategorysThunk());
  }, []);

  const [input, setInput] = useState<BookAddType>({
    title: '',
    autor: '',
    description: '',
    imge: '',
    pages: 0,
    language: '',
    categoryId: 0,
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        void dispatch(submitBookThunk(input));
        setInput({
          title: '',
          autor: '',
          description: '',
          imge: '',
          pages: 0,
          language: '',
          categoryId: 0,
        });
        navigate('/books');
      }}
    >
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label>Название книги</Form.Label>
        <Form.Control type="text" name="title" value={input.title} onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAuthor">
        <Form.Label>Автор</Form.Label>
        <Form.Control type="text" name="autor" value={input.autor} onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupDescription">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={input.description}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupImage">
        <Form.Label>Фото книги</Form.Label>
        <Form.Control type="text" name="imge" value={input.imge} onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPages">
        <Form.Label>Количество печатных страниц</Form.Label>
        <Form.Control type="number" name="pages" value={input.pages} onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupLanguage">
        <Form.Label>Язык</Form.Label>
        <Form.Control type="text" name="language" value={input.language} onChange={changeHandler} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupCategory">
        <Form.Label>Категория</Form.Label>
        <Form.Select name="categoryId" value={input.categoryId} onChange={handleSelectChange}>
          <option value="">Выберите категорию</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="warning" type="submit">
        Добавить книгу
      </Button>
    </Form>
  );
}
