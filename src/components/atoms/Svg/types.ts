import { IIconProps } from '@src/types/icon';

export interface ISvgProps extends IIconProps {
  viewBox: string;
  form?: 'stroke' | 'fill';
}
