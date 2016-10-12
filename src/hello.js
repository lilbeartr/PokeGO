import {sayHi} from './function'


const name = "Tapanit"

console.log(sayHi(name))


import axios from 'axios'
const pokeUrl = 'http://pokeapi.co/api/v2/pokemon-form/12/'
axios.get(pokeUrl)
.then(response => {
        console.log(response.data.name)
    })
