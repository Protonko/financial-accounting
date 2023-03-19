import {ICONS_MAP} from './iconsMap';

export const useCategoriesIcons = () => {
  return (iconKey: string) => {
    if (ICONS_MAP.has(iconKey)) {
      return ICONS_MAP.get(iconKey)
    }

    return ICONS_MAP.get('DEFAULT')
  }
}