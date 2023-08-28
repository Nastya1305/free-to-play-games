

export type SortBy = 'release-date' | 'popularity' | 'alphabetical' | 'relevance';

export type Platform = 'pc' | 'browser' | 'all';

export type Category = 'mmorpg' | 'shooter' | 'strategy' | 'moba' | 'racing' | 'sports' | 'social' |
   'sandbox' | 'open-world' | 'survival' | 'pvp' | 'pve' | 'pixel' | 'voxel' | 'zombie' | 'turn-based' |
   'first-person' | 'third-Person' | 'top-down' | 'tank' | 'space' | 'sailing' | 'side-scroller' |
   'superhero' | 'permadeath' | 'card' | 'battle-royale' | 'mmo' | 'mmofps' | 'mmotps' | '3d' | '2d' |
   'anime' | 'fantasy' | 'sci-fi' | 'fighting' | 'action-rpg' | 'action' | 'military' | 'martial-arts' |
   'flight' | 'low-spec' | 'tower-defense' | 'horror' | 'mmorts';


export interface FilterState {
   category: Category | null,
   platform: Platform,
   'sort-by': SortBy
}