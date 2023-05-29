import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
