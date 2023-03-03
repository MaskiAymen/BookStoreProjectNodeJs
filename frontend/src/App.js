import './App.css';
import { Route, Routes } from 'react-router-dom';
import Booklist from './components/admin/component.book.list';
import BookNew from './components/admin/component.book.new';
import ClientLayout from './components/client/component.client.layout';
import AdminLayout from './components/admin/component.admin.layout';
import BookListClient from './components/client/component.client.book.list';
import BookDetail from './components/client/component.client.book.detail';
function App() {
  return (
    <>
    <Routes>
        <Route path={'/admin'} element={<AdminLayout/>}>
          <Route path={'books'} element={<Booklist/>}></Route>
          <Route path={'books/new'} element={<BookNew/>}></Route>
        </Route>
        <Route path={'/'} element={<ClientLayout/>}>
          <Route path={'books'} element={<BookListClient/>}></Route>
          <Route path={'books/:id'} element={<BookDetail/>}></Route>
        </Route>
    </Routes>
    </>
  );
}

export default App;
