import { useContext } from 'react';

import { CheckoutItemContainer, ImageContainer, Name, Price, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles';

import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

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