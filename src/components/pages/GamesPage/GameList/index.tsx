import { FC, useRef, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import GameCard from "../GameCard";
import { IGame } from "models/game";


interface GamesListProps {
   games: IGame[]
}


const GamesList: FC<GamesListProps> = ({ games }) => {
   const [page, setPage] = useState<number>(1);
   const gamesPerPage = useRef<number>(20);

   function isMoreGamesToShow(): boolean {
      return Math.ceil(games.length / gamesPerPage.current) > page;
   }

   return (
      <Space direction="vertical" align="center" size={50}>
         <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {
               games.slice(0, page * gamesPerPage.current).map(game =>
                  <Col xl={6} lg={8} md={12} key={game.id}>
                     <GameCard game={game} />
                  </Col>
               )
            }
         </Row>
         {
            isMoreGamesToShow() &&
            <Button type="primary" onClick={() => setPage(prev => prev + 1)}>Show more</Button>
         }
      </Space>
   )
}

export default GamesList;