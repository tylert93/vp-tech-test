import { ElementType, ComponentPropsWithoutRef } from 'react';

interface IFlexOwnProps<T extends ElementType = ElementType> {
  as?: T;
  direction?: 'col' | 'row' | 'col-reverse' | 'row-reverse';
  justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  wrap?: boolean;
}

export type FlexProps<T extends ElementType> = IFlexOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IFlexOwnProps<T>>;
