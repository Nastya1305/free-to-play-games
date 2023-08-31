
type ValueOf<T> = T[keyof T];


export const SortBy = {
   RELEASE_DAY: 'release-date',
   POPULARITY: 'popularity',
   ALPHABETICAL: 'alphabetical',
   RELEVANCE: 'relevance'
};
export type SortBy = ValueOf<typeof SortBy>;


export const Platform = {
   PC: 'pc',
   BROWSER: 'browser',
   ALL: 'all'
};
export type Platform = ValueOf<typeof Platform>;


export const Category = {
   MMORPG: 'mmorpg',
   SHOOTER: 'shooter',
   STRATEGY: 'strategy',
   MOBA: 'moba',
   RACING: 'racing',
   SPORTS: 'sports',
   SOCIAL: 'social',
   SANDBOX: 'sandbox',
   OPEN_WORLD: 'open-world',
   SURVIVAL: 'survival',
   PVP: 'pvp',
   PVE: 'pve',
   PIXEL: 'pixel',
   VOXEL: 'voxel',
   ZOMBIE: 'zombie',
   TURN_BASED: 'turn-based',
   FIRST_PERSON: 'first-person',
   THIRD_PERSON: 'third-Person',
   TOP_DOWN: 'top-down',
   TANK: 'tank',
   SPACE: 'space',
   SAILING: 'sailing',
   SIDE_SCROLLER: 'side-scroller',
   SUPERHERO: 'superhero',
   PERMADEATH: 'permadeath',
   CARD: 'card',
   BATTLE_ROYALE: 'battle-royale',
   MMO: 'mmo',
   MMOFPS: 'mmofps',
   MMOTPS: 'mmotps',
   _3D: '3d',
   _2D: '2d',
   ANIME: 'anime',
   FANTASY: 'fantasy',
   SCI_FI: 'sci-fi',
   FIGHTING: 'fighting',
   ACTION_RPG: 'action-rpg',
   ACTION: 'action',
   MILITARY: 'military',
   MARTIAL_ARTS: 'martial-arts',
   FLIGHT: 'flight',
   LOW_SPEC: 'low-spec',
   TOWER_DEFENSE: 'tower-defense',
   HORROR: 'horror',
   MMORTS: 'mmorts',
};
export type Category = ValueOf<typeof Category>;



export interface FilterState {
   category: Category | null,
   platform: Platform,
   'sort-by': SortBy
}