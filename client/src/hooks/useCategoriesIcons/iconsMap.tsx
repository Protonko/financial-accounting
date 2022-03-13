import type {ReactElement} from 'react';
import ShoppingCart from '@assets/icons/shopping-cart.svg'
import QuestionMark from '@assets/icons/question-mark.svg'

export const ICONS_MAP = new Map<string, ReactElement>()
ICONS_MAP.set('SHOPPING_CART', <ShoppingCart className="icon icon--shopping-cart" />)
ICONS_MAP.set('DEFAULT', <QuestionMark className="icon icon--question-mark" />)
