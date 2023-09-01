import { FC } from "react";
import { Link } from "react-router-dom";
import formatDate from "utils/formatDate";

import { Card, Descriptions, Row, Space, Tag } from "antd";
import PlatformTag from "../PlatformTag";

import { IGame } from "models/game";
import { GAME } from "constants/urlConstants";


interface GameCardProps {
   game: IGame
}

const GameCard: FC<GameCardProps> = ({ game }) => {
   return (
      <Link to={`${GAME}/${game.id}`}>
         <Card hoverable
            cover={<img alt={game.title} src={game.thumbnail} />}
         >
            <Card.Meta
               title={game.title}
               description={
                  <Space direction="vertical" size='middle'>

                     <Descriptions size="small" column={1}
                        items={[
                           { key: '1', label: 'Publisher', children: game.publisher },
                           { key: '2', label: 'Release date', children: formatDate(game.release_date) }
                        ]}
                     />

                     <Row justify="end">
                        <Tag>{game.genre}</Tag>
                        <PlatformTag platform={game.platform} />
                     </Row>

                  </Space>
               }
            />
         </Card>
      </Link>
   )
}

export default GameCard;