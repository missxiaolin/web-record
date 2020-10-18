import request from '../utils/request'

export function wordcloud() {
    return request({
        url: '/test',
        method: 'get'
    })
}