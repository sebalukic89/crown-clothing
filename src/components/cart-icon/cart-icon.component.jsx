import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { CartIconContainer, IconCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<IconCount>{cartCount}</IconCount>
		</CartIconContainer>
	);
};

export default CartIcon;
