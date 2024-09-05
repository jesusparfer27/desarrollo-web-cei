export function getLastId(array) {

    //  reduce nuestro array al id más alto
    const lastId = array.reduce ( (max, obj) => ( (obj.id > max) ? obj.id : max ), 0)
    
    // [1,2,5,242,2323]
    // const ids= array.map( obj => obj.id);
    // const lastId = Math.max(...ids)
    
    return lastId
}
