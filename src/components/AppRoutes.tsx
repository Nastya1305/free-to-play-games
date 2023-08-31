import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import GamesPage from 'components/pages/GamesPage';
import SingleGamePage from 'components/pages/SingleGamePage';

import { GAME } from 'constants/urlConstants';



const AppRoutes: FC = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<GamesPage />} />
            <Route path={GAME + '/:id'} element={<SingleGamePage />} />
         </Route>
      </Routes>
   )
}

export default AppRoutes;