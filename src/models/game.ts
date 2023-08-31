
export interface IGame {
   id: number,
   title: string,
   thumbnail: string,
   shortDescription: string,
   gameUrl: string,
   genre: string,
   platform: string,
   publisher: string,
   developer: string,
   releaseDate: string,
   freetogameProfileUrl: string
}

export interface IGameDetails extends IGame {
   status: string,
   description: string,
   screenshots: Array<{ id: number, image: string }>,
   minimumSystemRequirements?: SystemRequirements
}

export interface SystemRequirements {
   os: string,
   processor: string,
   memory: string,
   graphics: string,
   storage: string
}


export interface GameState {
   games: IGame[],
   gameDetails: IGameDetails | null,
   isLoading: boolean,
   error: string
}