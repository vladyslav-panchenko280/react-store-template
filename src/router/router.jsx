import { Routes, Route, Navigate } from 'react-router-dom';
import Bag from '../pages/Bag/Bag';
import Catalog from '../pages/Catalog/Catalog';
import Favourite from '../pages/Favourite/Favourite';

function Router() {
     return (
          <Routes>
               <Route exact path='/OnlineStore' element={
                    <Navigate to='/catalog' />
               } />
               <Route path="/catalog" element={
                    <Catalog />
               } />
               <Route path='/bag' element={
                    <Bag />
               } />
               <Route path='/favourite' element={
                    <Favourite />
               } />
          </Routes>
     )
}

export default Router;