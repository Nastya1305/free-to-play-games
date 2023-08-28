
export interface IGame {
   id: number,
   title: string,
   thumbnail: string,
   short_description: string,
   game_url: string,
   genre: string,
   platform: string,
   publisher: string,
   developer: string,
   release_date: Date,
   freetogame_profile_url: string
}

export interface IGameDetails extends IGame {
   status: string,
   description: string,
   screenshots: Array<{ id: number, image: string }>,
   minimum_system_requirements: SystemRequirements
}

interface SystemRequirements {
   os: string,
   processor: string,
   memory: string,
   graphics: string,
   storage: string
}


export interface GameState {
   games: IGame[],
   gameDetails: IGame | null,
   isLoading: boolean,
   error: string
}