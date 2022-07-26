import Data from './data.json'

export  function getAll(){
    return Promise.resolve(Data);
}
export function getId(id){
    const product = Data.find(item=>item.id===id);
    return Promise.resolve(product);
}
