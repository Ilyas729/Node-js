export{}

type Game={
    name: string,
    price: number
}

const games: Game[]=[
    {
        name:'Call Of Duty MW2',
        price: 10
    },
    {
        name:'GTA V',
        price: 12
    },
    {
        name:'Dota 2',
        price: 12
    },
    {
        name:'CS GO',
        price: 2
    },
    {
        name:'PUBG',
        price: 0
    }
]

const names = games
.filter(game => game.price > 10)
.map(game => `${game.name} $${game.price}`)

console.log(names);
