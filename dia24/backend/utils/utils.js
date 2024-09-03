export function getLastId(array) {

    const lastId = array.reduce ( (max, obj) => ( (obj.id > max) ? obj.id : max ), 0)
    
    return lastId
}
