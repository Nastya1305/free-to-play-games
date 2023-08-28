import { GAME } from 'constants/urlConstants';
import { Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
   return (
      <Routes>
         <Route index element={<div>главная</div>} />
         <Route path={GAME + '/:id'} element={<div>игра</div>} />
      </Routes>
   )
}
