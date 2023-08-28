import { ElementType } from 'react';
import clsx from 'clsx';

import { GridProps, DivisionOption } from './types';
import {
  directionClasses,
  justifyClasses,
  alignItemsClasses,
  widthClasses,
  gridSpacingClasses,
  gridSpacingXClasses,
  gridSpacingYClasses,
} from './styles';

const defaultElement = 'div';

export const Grid = <T extends ElementType = typeof defaultElement>({
  as = 'div',
  container,
  item,
  direction = 'row',
  justify = 'start',
  alignItems = 'start',
  xs = 12,
  sm,
  md,
  lg,
  xl,
  spacing,
  spacingY,
  spacingX,
  className,
  children,
}: GridProps<T>) => {
  const TagName = as || defaultElement;

  const cleanseScreen = (screen: DivisionOption | true) => {
    if (screen === true) {
      return 12;
    }

    return screen as DivisionOption;
  };

  const containerClass = clsx(
    'inline-flex',
    'flex-wrap',
    'w-full',
    directionClasses[direction],
    justifyClasses[justify],
    alignItemsClasses[alignItems],
    spacing && gridSpacingClasses[spacing],
    spacingX && gridSpacingXClasses[spacingX],
    spacingY && gridSpacingYClasses[spacingY]
  );

  const itemClass = clsx(
    'border-box',
    widthClasses.xs[cleanseScreen(xs)],
    sm && widthClasses.sm[cleanseScreen(sm)],
    md && widthClasses.md[cleanseScreen(md)],
    lg && widthClasses.lg[cleanseScreen(lg)],
    xl && widthClasses.xl[cleanseScreen(xl)]
  );

  const overallClass = clsx(
    container && containerClass,
    item && itemClass,
    className && className
  );

  return <TagName className={overallClass}>{children}</TagName>;
};
