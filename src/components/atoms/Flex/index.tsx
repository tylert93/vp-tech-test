import { ElementType } from 'react';
import clsx from 'clsx';
import { FlexProps } from './types';
import { directionClasses, justifyClasses, alignItemsClasses } from './styles';

const defaultElement = 'div';

export const Flex = <T extends ElementType = typeof defaultElement>({
  as,
  direction = 'row',
  justify = 'start',
  alignItems = 'start',
  wrap = false,
  className,
  children,
  ...props
}: FlexProps<T>) => {
  const TagName = as || defaultElement;

  const overallClass = clsx(
    'flex',
    directionClasses[direction],
    justifyClasses[justify],
    alignItemsClasses[alignItems],
    wrap ? 'flex-wrap' : 'flex-nowrap',
    className && className
  );

  return (
    <TagName className={overallClass} {...props}>
      {children}
    </TagName>
  );
};
