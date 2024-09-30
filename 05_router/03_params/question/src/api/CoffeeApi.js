import coffee from '../data/Coffee-info.json';

export function getAllCoffee (){
    return coffee;
}

// 선택한 커피 하나만 반환
export function selectCoffee(id){
    return coffee.filter(item => item.id === parseInt(id))[0];
}