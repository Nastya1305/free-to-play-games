import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { gameSlice } from "store/reducers/GameSlice";
import { fetchGameDetails } from "store/reducers/AsyncThunks";
import { Link, useParams } from "react-router-dom";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Alert, Button, Col, Divider, Row, Space, Spin, Typography } from "antd";
import GameDescriptions from "./GameDescriptions";
import SystemRequirments from "./SystemRequirements";
import AboutGame from "./AboutGame";




const SingleGamePage: FC = () => {
   const { gameDetails, error, isLoading } = useAppSelector(state => state.gameReducer);
   const dispatch = useAppDispatch();
   const setGameDetails = gameSlice.actions.setGameDetails;
   const { id } = useParams();


   useEffect(() => {
      window.scrollTo(0, 0);

      let gameFromStorage = sessionStorage.getItem('game' + id);

      if (gameFromStorage && JSON.parse(gameFromStorage).id == id) {
         dispatch(setGameDetails(JSON.parse(gameFromStorage)))
      } else {
         dispatch(fetchGameDetails(Number(id))).then((res) => {
            sessionStorage.setItem('game' + id, JSON.stringify(res.payload));
            setTimeout(() => sessionStorage.removeItem('game' + id), 300000)
         });
      }

      return () => sessionStorage.removeItem('game' + id);
   }, [id]);



   return (
      <Spin size="large" spinning={isLoading} tip="Loading">
         {
            error ? <Alert message={error} type="error" showIcon />
               : gameDetails ?
                  <Row gutter={[30, 30]} justify='space-between'>
                     <Col lg={7} md={24} >
                        <Space direction='vertical' style={{ width: '100%' }} align='end'>
                           <div style={{ width: '100%' }}>
                              <img style={{ width: '100%', overflow: 'hidden' }} alt={gameDetails.title} src={gameDetails.thumbnail} />
                           </div>
                           <Space wrap>
                              <Link to='/'>
                                 <Button icon={<ArrowLeftOutlined />}>
                                    to other games
                                 </Button>
                              </Link>
                              <Button type="primary"
                                 href={gameDetails.gameUrl} target="_blank"
                                 icon={<ArrowRightOutlined />}
                              >
                                 PLAY NOW
                              </Button>
                           </Space>
                        </Space>
                     </Col>

                     <Col lg={16} md={24}>
                        <Space direction='vertical' style={{ width: '100%' }}>
                           <Typography.Title>{gameDetails.title}</Typography.Title>
                           <GameDescriptions game={gameDetails} />
                           <AboutGame gameDetails={gameDetails} />
                           <Divider />
                           {
                              gameDetails.minimumSystemRequirements &&
                              <SystemRequirments systemRequirements={gameDetails.minimumSystemRequirements} />
                           }
                        </Space>
                     </Col>
                  </Row> : null}
      </Spin>
   )
}

export default SingleGamePage;