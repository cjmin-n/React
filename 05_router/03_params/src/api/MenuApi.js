// 데이터를 처리하는 로직을 별도의 파일로 분리하여 
// api 처럼 사용하기 위함..

import menus from "../data/Menu-detail.json";

// 1. 메뉴 전체 반환
export function getMenuList (){
    return menus;
}

// 검색 함수
export function searchMenu(menuName){
    return menus.filter(menu => menu.menuName.match(menuName));
}

// 디테일 페이지 함수
export function getMenuDetail(menuCode){

    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]; 
    // 필터링된 결과에서 제일 위에것만 반환 // 혹시나 메뉴코드가 중복되었을 때 사용가능
}

