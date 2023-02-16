import {nanoid} from "nanoid";


import h1 from '../assets/health/h1.png'
import h2 from '../assets/health/h2.png'

import u1 from '../assets/useful/u1.png'
import u2 from '../assets/useful/u2.png'

import w1 from '../assets/world/w1.png'
import w2 from '../assets/world/w2.png'


export const plan = {
    health: {
        title: 'здоровое питание',
        plans: [
            {
                id: nanoid(),
                days: 'План питания на 3 дня',
                title: 'Здоровое питание',
                img: h1
            },
            {
                id: nanoid(),
                days: 'План питания на 7 дней',
                title: 'Здоровый завтрак',
                img: h2
            },
            {
                id: nanoid(),
                days: 'План питания на 14 дней',
                title: 'Чистое питание',
                img: h2
            }
        ]
    },
    useful: {
        title: 'полезные диеты',
        plans: [
            {
                id: nanoid(),
                days: 'План питания на 3 дня',
                title: 'Стань веганом',
                img: u1
            },
            {
                id: nanoid(),
                days: 'План питания на 7 дней',
                title: 'Без мяса',
                img: u2
            },
            {
                id: nanoid(),
                days: 'План питания на 14 дней',
                title: 'Строгая кетодиета',
                img: u2
            }
        ]
    },
    world: {
        title: 'со всего мира',
        plans: [
            {
                id: nanoid(),
                days: 'План питания на 3 дня',
                title: 'Нордический',
                img: w1
            },
            {
                id: nanoid(),
                days: 'План питания на 7 дней',
                title: 'Корейская кухня',
                img: w2
            },
            {
                id: nanoid(),
                days: 'План питания на 14 дней',
                title: 'Средиземноморский',
                img: w2
            }
        ]
    }
}