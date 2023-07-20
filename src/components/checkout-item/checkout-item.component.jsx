import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';

import { CheckoutItemContainer, ImageContainer, Name, Price, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity } = cartItem;
    const cartitems = useSelector(selectCartItems);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartitems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartitems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartitems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;