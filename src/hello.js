import {sayHi} from './function'


const name = "Tapanit"

console.log(sayHi(name))


import axios from 'axios'
const civilUrl = 'http://www.omdbapi.com/?t=captain+america+civil+war&y=&plot=short&r=json'
axios.get(civilUrl)
.then(response => {
        console.log(response.data.Title)
    })
