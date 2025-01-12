export class Pokemon {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Ability[]
    forms: Form[]
    game_indices: Index[]
    held_items: HeldItem[]
    location_area_encounters: string
    moves: Mfe[]
    species: Species
    sprites: Sprites | undefined
    cries: Cries
    stats: Stat[]
    types: Type[]
    past_types: PastType[]
    constructor(data: Pokemon) {
        this.id = data.id;
        this.name = data.name;
        this.base_experience = data.base_experience;
        this.height = data.height;
        this.is_default = data.is_default;
        this.order = data.order;
        this.weight = data.weight;
        this.abilities = data.abilities;
        this.forms = data.forms;
        this.game_indices = data.game_indices;
        this.held_items = data.held_items;
        this.location_area_encounters = data.location_area_encounters;
        this.moves = data.moves;
        this.species = data.species;
        this.sprites = data.sprites;
        this.cries = data.cries;
        this.stats = data.stats;
        this.types = data.types;
        this.past_types = data.past_types;
  }
}
  export interface Ability {
    is_hidden: boolean
    slot: number
    ability: Ability2
  }
  
  export interface Ability2 {
    name: string
    url: string
  }
  
  export interface Form {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface HeldItem {
    item: Item
    version_details: VersionDetail[]
  }
  
  export interface Item {
    name: string
    url: string
  }
  
  export interface VersionDetail {
    rarity: number
    version: Version2
  }
  
  export interface Version2 {
    name: string
    url: string
  }
  
  export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number
    version_group: VersionGroup
    move_learn_method: MoveLearnMethod
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface MoveLearnMethod {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
  export interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
  }
  
  export interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
    showdown: Showdown
  }
  
  export interface DreamWorld {
    front_default: any
    front_female: any
  }
  
  export interface Home {
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface OfficialArtwork {
    front_default: any
    front_shiny: string
  }
  
  export interface Showdown {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": GenerationVi
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
  }
  
  export interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
  }
  
  export interface RedBlue {
    back_default: string
    back_gray: string
    front_default: any
    front_gray: string
  }
  
  export interface Yellow {
    back_default: string
    back_gray: string
    front_default: any
    front_gray: string
  }
  
  export interface GenerationIi {
    crystal: Crystal
    gold: Gold
    silver: Silver
  }
  
  export interface Crystal {
    back_default: string
    back_shiny: string
    front_default: any
    front_shiny: string
  }
  
  export interface Gold {
    back_default: string
    back_shiny: string
    front_default: any
    front_shiny: string
  }
  
  export interface Silver {
    back_default: string
    back_shiny: string
    front_default: any
    front_shiny: string
  }
  
  export interface GenerationIii {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
  }
  
  export interface Emerald {
    front_default: any
    front_shiny: string
  }
  
  export interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: any
    front_shiny: string
  }
  
  export interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: any
    front_shiny: string
  }
  
  export interface GenerationIv {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
  }
  
  export interface DiamondPearl {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface HeartgoldSoulsilver {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Platinum {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationV {
    "black-white": BlackWhite
  }
  
  export interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Animated {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
  }
  
  export interface OmegarubyAlphasapphire {
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface XY {
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationVii {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
  }
  
  export interface Icons {
    front_default: any
    front_female: any
  }
  
  export interface UltraSunUltraMoon {
    front_default: any
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationViii {
    icons: Icons2
  }
  
  export interface Icons2 {
    front_default: any
    front_female: any
  }
  
  export interface Cries {
    latest: string
    legacy: string
  }
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
  
  export interface Type {
    slot: number
    type: Type2
  }
  
  export interface Type2 {
    name: string
    url: string
  }
  
  export interface PastType {
    generation: Generation
    types: Type3[]
  }
  
  export interface Generation {
    name: string
    url: string
  }
  
  export interface Type3 {
    slot: number
    type: Type4
  }
  
  export interface Type4 {
    name: string
    url: string
  }
  