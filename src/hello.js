import {sayHi} from './function'
import {sayBye} from './function'

const name = "Arteezy Artour Babeav"

console.log(sayHi(name))
console.log(sayBye(name))

import axios from 'axios'
const civilUrl = 'http://www.omdbapi.com/?t=captain+america+civil+war&y=&plot=short&r=json'
axios.get(civilUrl)
.then(response => {
        console.log(response.data.Title)
    })
