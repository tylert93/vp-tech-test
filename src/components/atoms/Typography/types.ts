import { ElementType, ComponentPropsWithoutRef } from 'react';

interface ITypographyOwnProps<T extends ElementType = ElementType> {
  as?: T;
  display?: 'block' | 'inline' | 'inline-block';
  variant?: Variants;
  component?: Components;
  align?: Alignments;
  numberOfLines?: number;
}

export type Variants =
  | 'titleLG'
  | 'titleMD'
  | 'titleSM'
  | 'titleXS'
  | 'bodyLG'
  | 'bodyMD'
  | 'bodySM'
  | 'bodyXS';

export type Components = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

type Alignments = 'left' | 'center' | 'right' | 'top' | 'bottom';

export type TypographyProps<T extends ElementType> = ITypographyOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ITypographyOwnProps<T>>;
