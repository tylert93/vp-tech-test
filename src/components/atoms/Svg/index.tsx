import { FC, PropsWithChildren } from 'react';
import { ISvgProps } from './types';

export const Svg: FC<PropsWithChildren<ISvgProps>> = ({
  width = '100%',
  height = '100%',
  children,
  style,
  form = 'fill',
  ...props
}) => {
  const isFill = form === 'fill';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isFill ? 'currentColor' : 'none'}
      stroke={isFill ? 'none' : 'currentColor'}
      strokeWidth={1.5}
      width={width}
      height={height}
      style={{ maxWidth: width, maxHeight: height, ...style }}
      {...props}
    >
      {children}
    </svg>
  );
};
