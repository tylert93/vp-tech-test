import { ElementType } from 'react';
import clsx from 'clsx';
import { TypographyProps } from './types';
import { variantClasses, alignClasses } from './styles';

const defaultElement = 'span';

export const Typography = <T extends ElementType = typeof defaultElement>({
  as,
  display = 'block',
  variant,
  component = defaultElement,
  align,
  numberOfLines,
  className,
  children,
  ...rest
}: TypographyProps<T>) => {
  const TagName = as || component;

  const overallClass = clsx(
    'prose',
    display,
    variant && variantClasses[variant],
    align && alignClasses[align],
    numberOfLines && `line-clamp-${numberOfLines}`,
    className
  );

  return (
    <TagName className={overallClass} {...rest}>
      {children}
    </TagName>
  );
};
