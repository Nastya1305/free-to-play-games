import { FC } from "react";
import { Descriptions } from "antd";

import { IGame } from "models/game";
import formatDate from "utils/formatDate";


interface GameDescriptionsProps {
   game: IGame
}

const GameDescriptions: FC<GameDescriptionsProps> = ({ game }) => {
   return (
      <Descriptions size="small" bordered layout="vertical" column={{ xs: 2, lg: 5 }}
         items={[
            { key: '1', label: 'Genre', children: game.genre },
            { key: '2', label: 'Platform', children: game.platform },
            { key: '3', label: 'Publisher', children: game.publisher },
            { key: '4', label: 'Developer', children: game.developer },
            { key: '5', label: 'Release date', children: formatDate(game.releaseDate) }
         ]}
      />
   )
}

export default GameDescriptions;