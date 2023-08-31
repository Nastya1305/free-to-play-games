import { FC } from "react";
import { Carousel, Divider, Typography } from "antd";
import { IGameDetails } from "models/game";


interface AboutGameProps {
   gameDetails: IGameDetails
}

const AboutGame: FC<AboutGameProps> = ({ gameDetails }) => {
   return (
      <>
         <Divider>About {gameDetails.title}</Divider>

         <Typography.Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Read more' }}>
            {gameDetails.description}
         </Typography.Paragraph>

         <Carousel autoplay>
            {
               gameDetails.screenshots.map(screen =>
                  <img key={screen.id} alt={'screen ' + screen.id} src={screen.image} />
               )
            }
         </Carousel>
      </>
   )
}

export default AboutGame;