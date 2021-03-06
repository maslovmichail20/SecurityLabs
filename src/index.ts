import {entryTask} from './entry-task'
import {intro} from './intro'
import {lab1} from './lab1'
import {lab2} from './lab2'
import {lab3} from './lab3'
import {lab5} from './lab5'
import {lab6} from './lab6'
import {lab7} from './lab7'

(async function main() {
    await Promise.all([
        entryTask(),
        intro(),
        lab1(),
        lab2(),
        lab3(),
        lab5(),
        lab6(),
        lab7()
    ])
})()

