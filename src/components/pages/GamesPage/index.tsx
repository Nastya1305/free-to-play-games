import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { fetchGames } from "store/reducers/AsyncThunks";

import { Alert, Col, Divider, Row, Spin } from "antd";
import Filters from "./Filters";
import GamesList from "./GameList";
import BackToTopBtn from "./BackToTopBtn";



const GamesPage: FC = () => {
   const { games, error, isLoading } = useAppSelector(state => state.gameReducer);
   const filter = useAppSelector(state => state.filterReducer);
   const dispatch = useAppDispatch();


   useEffect(() => {
      dispatch(fetchGames(filter));
   }, [filter]);


   return (
      <>
         <Row justify='center'>
            <Col>
               <Filters />
            </Col>
         </Row>
         <Divider />
         <Spin size="large" spinning={isLoading} tip="Loading">
            {
               error ? <Alert message={error} type="error" showIcon />
                  : <GamesList games={games} />
            }
         </Spin>
         <BackToTopBtn />
      </>
   )
}

export default GamesPage;