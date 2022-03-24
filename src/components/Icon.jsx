import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from '@use-expo/font';
import { number, string, oneOf } from 'prop-types';

import icomoon from '../../assets/fonts/icomoon.ttf'
import selection from '../../assets/fonts/selection.json'


export default function Icon({name, size, color}) {
  const [fontLoaded] = useFonts({ icomoon })
  const CustomIcon = createIconSetFromIcoMoon(selection)

  if (!fontLoaded) {
    return null
  }
  return (
    <CustomIcon name={name} size={size} color={color} style={{ lineHeight: size - 1 }} />
  )
}

Icon.propTypes = {
  name: oneOf(['plus', 'delete', 'pencil', 'check']).isRequired,
  size: number,
  color: string,
}

Icon.defaultProps = {
  size: 24,
  color: '#000000',
}