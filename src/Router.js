import React from 'react'
import { Route , Routes } from 'react-router-dom';

//layouts
import MainLayout from './layouts/MainLayout';
import NotFoundLayout from './layouts/NotFoundLayout';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Ebook from './pages/Ebook';
import Ebooks from './pages/Ebooks';
import NotFound from './pages/NotFound';


function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={
              <MainLayout>
                 <Home />
              </MainLayout>
            } />
            <Route path='/about' element={<MainLayout><About /></MainLayout>} />
            <Route path='/books' element={<MainLayout><Ebooks /></MainLayout>} />
            <Route path='/books/:id' element={<MainLayout><Ebook /></MainLayout>} />
            {/* <Route path='/products' element={<Products />}>
                 <Route index element={<Features />} />
                 <Route path='features' element={<Features />} />
                 <Route path='New' element={<New />} />
            </Route> */}
            <Route path='*' element={<NotFoundLayout> <NotFound /></NotFoundLayout>} />
        </Routes>
    </div>
  )
}

export default Router