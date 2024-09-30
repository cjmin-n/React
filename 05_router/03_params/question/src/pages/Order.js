import CoffeeItem from "../components/CoffeeItem";

const Order = ({shopList}) => {

    return (
        <main>
            <h2>주문 확인</h2>
            {   
                
                shopList.length===0 ? <p>주문한거 없음  ~~</p>: <ul>{shopList.map(menu => <CoffeeItem /* key={menu.id} */ menu={menu} />)}</ul>
            }
            
            
        </main>
    )
}

export default Order;