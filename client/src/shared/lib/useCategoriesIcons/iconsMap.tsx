import type {ReactElement} from 'react';
import ShoppingCart from '@assets/icons/shopping-cart.svg'
import Clothes from '@assets/icons/clothes.svg'
import Tableware from '@assets/icons/tableware.svg'
import Paw from '@assets/icons/paw.svg'
import Mask from '@assets/icons/mask.svg'
import RockingHorse from '@assets/icons/rocking-horse.svg'
import Domino from '@assets/icons/domino.svg'
import House from '@assets/icons/house.svg'
import Cosmetics from '@assets/icons/cosmetics.svg'
import Internet from '@assets/icons/internet.svg'
import Car from '@assets/icons/car.svg'
import Application from '@assets/icons/application.svg'
import Dumbbell from '@assets/icons/dumbbell.svg'
import CannedFood from '@assets/icons/canned-food.svg'
import Pills from '@assets/icons/pills.svg'
import PipeSmoke from '@assets/icons/pipe-smoke.svg'
import Gamepad from '@assets/icons/gamepad.svg'
import Present from '@assets/icons/present.svg'
import CleaningMop from '@assets/icons/cleaning-mop.svg'
import Oasis from '@assets/icons/oasis.svg'
import QuestionMark from '@assets/icons/question-mark.svg'

export const ICONS_MAP = new Map<string, ReactElement>()
ICONS_MAP.set('SHOPPING_CART', <ShoppingCart className="icon icon--shopping-cart" />)
ICONS_MAP.set('CLOTHES', <Clothes className="icon icon--clothes" />)
ICONS_MAP.set('TABLEWARE', <Tableware className="icon icon--tableware" />)
ICONS_MAP.set('PAW', <Paw className="icon icon--paw" />)
ICONS_MAP.set('MASK', <Mask className="icon icon--mask" />)
ICONS_MAP.set('ROCKING_HORSE', <RockingHorse className="icon icon--rocking-horse" />)
ICONS_MAP.set('DOMINO', <Domino className="icon icon--domino" />)
ICONS_MAP.set('HOUSE', <House className="icon icon--house" />)
ICONS_MAP.set('COSMETICS', <Cosmetics className="icon icon--cosmetics" />)
ICONS_MAP.set('INTERNET', <Internet className="icon icon--internet" />)
ICONS_MAP.set('CAR', <Car className="icon icon--car" />)
ICONS_MAP.set('APPLICATION', <Application className="icon icon--application" />)
ICONS_MAP.set('DUMBBELL', <Dumbbell className="icon icon--dumbbell" />)
ICONS_MAP.set('CANNED_FOOD', <CannedFood className="icon icon--canned-food" />)
ICONS_MAP.set('PILLS', <Pills className="icon icon--pills" />)
ICONS_MAP.set('PIPE_SMOKE', <PipeSmoke className="icon icon--pipe-smoke" />)
ICONS_MAP.set('GAMEPAD', <Gamepad className="icon icon--gamepad" />)
ICONS_MAP.set('PRESENT', <Present className="icon icon--present" />)
ICONS_MAP.set('CLEANING_MOP', <CleaningMop className="icon icon--cleaning-mop" />)
ICONS_MAP.set('OASIS', <Oasis className="icon icon--oasis" />)
ICONS_MAP.set('DEFAULT', <QuestionMark className="icon icon--question-mark" />)