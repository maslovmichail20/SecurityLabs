import path from 'path'

import {readFile} from '../utils'

export const lab7 = async () => {
    const solution = await readFile(path.join(__dirname, 'solution.txt'))
    console.log(solution)
}
