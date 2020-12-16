import { get } from './helper.js'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')
const getRatings = get('/api/seller')

export {
    getSeller,
    getGoods,
    getRatings
}