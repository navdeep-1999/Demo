import { Dimensions, PixelRatio } from 'react-native';

export const vw = (width: number) => PixelRatio?.roundToNearestPixel?.((Dimensions?.get?.('window')?.width * width) / 375) ?? 0

export const vh = (height: number) => PixelRatio?.roundToNearestPixel?.((Dimensions?.get?.('window')?.height * height) / 812) ?? 0
