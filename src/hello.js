import {sayHi} from './function'


const name = "Tapanit"

console.log(sayHi(name))


import axios from 'axios'
const pokeUrl = 'http://pokeapi.co/api/v2/pokemon/'
axios.get(pokeUrl)
.then(response => {
        console.log(response.data.name)
    })
