// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
// import * as React from 'react';
// import { useAppDispatch, useAppSelector } from '../../redux/hook';
// import { setModalContent } from '../../redux/books/bookSlice';
// import type { BookAddType } from '../../types/bookTypes';
// import { editBookThunk } from '../../redux/books/booksThunk';

// export default function EditModalForm(): JSX.Element {
//   const book = useAppSelector((store) => store.books.currentBook);
//   const dispatch = useAppDispatch();

//   const handleClose = (): void => {
//     dispatch(setModalContent(null));
//   };

//   return (
//     <Dialog
//       open={!!book}
//       onClose={handleClose}
//       PaperProps={{
//         component: 'form',
//         onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
//           event.preventDefault();
//           const formData = Object.fromEntries(new FormData(event.currentTarget)) as BookAddType;
//           if (book?.id) {
//             void dispatch(editBookThunk({ id: book?.id, formData }));
//             handleClose();
//           }
//         },
//       }}
//     >
//       <DialogTitle>Edit post</DialogTitle>
//       <DialogContent>
//         <TextField name="title" label="title" variant="standard" defaultValue={book?.title} />
//         <TextField name="autor" label="autor" variant="standard" defaultValue={book?.autor} />
//         <TextField
//           name="description"
//           label="description"
//           variant="standard"
//           defaultValue={book?.description}
//         />
//         <TextField name="imge" label="imge" variant="standard" defaultValue={book?.imge} />
//         <TextField name="pages" label="pages" variant="standard" defaultValue={book?.pages} />
//         <TextField
//           name="language"
//           label="language"
//           variant="standard"
//           defaultValue={book?.language}
//         />
//         <TextField
//           name="categoryId"
//           label="categoryId"
//           variant="standard"
//           defaultValue={book?.categoryId}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button type="submit">Save</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setModalContent } from '../../redux/books/bookSlice';
import type { BookAddType } from '../../types/bookTypes';
import { editBookThunk } from '../../redux/books/booksThunk';

export default function EditModalForm(): JSX.Element {
  const book = useAppSelector((store) => store.books.currentBook);
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(setModalContent(null));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: Partial<BookAddType> = {
      title: formData.get('title') as string,
      autor: formData.get('autor') as string,
      description: formData.get('description') as string,
      imge: formData.get('imge') as string,
      pages: parseInt(formData.get('pages') as string, 10),
      language: formData.get('language') as string,
      categoryId: parseInt(formData.get('categoryId') as string, 10),
    };

    if (book?.id) {
      void dispatch(editBookThunk({ id: book.id, formData: data as BookAddType }));
      handleClose();
    }
  };

  return (
    <Dialog
      open={!!book}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Edit post</DialogTitle>
      <DialogContent>
        <TextField name="title" label="title" variant="standard" defaultValue={book?.title} />
        <TextField name="autor" label="autor" variant="standard" defaultValue={book?.autor} />
        <TextField
          name="description"
          label="description"
          variant="standard"
          defaultValue={book?.description}
        />
        <TextField name="imge" label="imge" variant="standard" defaultValue={book?.imge} />
        <TextField
          name="pages"
          label="pages"
          variant="standard"
          defaultValue={book?.pages}
          type="number"
        />
        <TextField
          name="language"
          label="language"
          variant="standard"
          defaultValue={book?.language}
        />
        <TextField
          name="categoryId"
          label="categoryId"
          variant="standard"
          defaultValue={book?.categoryId}
          type="number"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
