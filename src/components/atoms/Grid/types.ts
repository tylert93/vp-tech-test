import { ElementType, ComponentPropsWithoutRef } from 'react';

interface GridOwnProps<T extends ElementType> {
  as?: T | 'div';
  container?: boolean;
  item?: boolean;
  direction?: 'col' | 'row' | 'col-reverse' | 'row-reverse';
  justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  xs?: DivisionOption | true;
  sm?: DivisionOption | true;
  md?: DivisionOption | true;
  lg?: DivisionOption | true;
  xl?: DivisionOption | true;
  spacing?: spacingOption;
  spacingY?: spacingOption;
  spacingX?: spacingOption;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

type spacingOption = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

export type DivisionOption =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto'
  | 'rest';

export type GridProps<T extends ElementType> = GridOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof GridOwnProps<T>>;
