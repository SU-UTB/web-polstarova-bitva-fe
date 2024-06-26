import { classNames } from '../../utils';
import { Icon, type IconName } from './Icon';

type Props = { text: string; size: 'sm' | 'md' | 'lg'; variant: 'primary' | 'gray' | 'white' } & {
  type: 'link';
  href: string;
  icon?: IconName;
  rel?: string;
  target?: string;
};

export const Button = (props: Props) => {
  const className = classNames(
    'flex items-center justify-center font-semibold tracking-wide rounded-xl transition duration-300 gap-4 group relative',
    props.size === 'sm' && 'py-3 px-6 text-base',
    props.size === 'md' && 'py-3 sm:py-4 px-8 sm:text-lg',
    props.size === 'lg' && 'py-4 sm:py-5 px-8 sm:px-9 text-lg sm:text-xl',
    props.variant === 'primary' &&
      'bg-primary-600 text-primary-50 shadow shadow-primary-600/20 hover:shadow-lg hover:shadow-primary-600/30 hover:text-white',
    props.variant === 'gray' &&
      'bg-gray-200 shadow-gray-300/20 text-gray-800 hover:bg-gray-700 hover:text-gray-50 hover:shadow',
    props.variant === 'white' &&
      'bg-stone-50 text-primary-600 hover:text-primary-550 hover:bg-white shadow hover:shadow-lg',
  );

  if (props.type === 'link')
    return (
      <a className={className} href={props.href} rel={props.rel} target={props.target}>
        <div className="absolute inset-0 rounded-xl transition duration-300 group-hover:bg-white/20"></div>
        <span className="relative">{props.text}</span>
        {props.icon && (
          <Icon className="relative -mr-3 h-6 w-6 transition duration-300 group-hover:scale-110" name={props.icon} />
        )}
      </a>
    );
};
