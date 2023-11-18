import {AnchorHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from "react";
import clsx from "clsx";
import {omit} from "lodash";
import {Icon, Loader} from "react-feather";


type NativeAnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
type NativeButtonProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type ComponentProps = {
    color?: 'primary' | 'secondary' | 'dark' | 'red',
    size?: 'sm' | 'md',
    loading?: boolean,
    disabled?: boolean,
    icon?: Icon,
    children: ReactNode,
}
type AnchorProps = NativeAnchorProps & ComponentProps & {
    as?: 'a',
}
type ButtonProps = NativeButtonProps & ComponentProps & {
    as: 'button',
}
type Props = AnchorProps | ButtonProps;

// TODO add red color
// TODO add hover state for secondary
export const Button: FC<Props> = ({
                                      as: Element = 'a',
                                      color = 'primary',
                                      size = 'md',
                                      className,
                                      disabled = false,
                                      loading = false,
                                      icon: Icon,
                                      children,
                                      ...props
                                  }) => {
    const rest = omit(props, loading ? ['onClick'] : [])

    const primary = color === 'primary';
    const dark = color === 'dark';
    const sm = size === 'sm';
    const md = size === 'md';

    // @ts-ignore there is no clean way to show that the props are correct
    return <Element
        className={clsx(className, 'relative flex gap-2 justify-center items-center border rounded cursor-pointer disabled:cursor-auto', {
            'text-white bg-blue-500 border-blue-500': primary,
            'hover:bg-blue-600': primary && !loading && !disabled,
            'bg-gray-800 border-gray-700': dark,
            'hover:bg-gray-700': dark && !loading && !disabled,
            'px-4 py-2 text-sm': sm,
            'px-6 py-3 text-md': md,
            'cursor-not-allowed opacity-75': loading || disabled,
        })}
        {...rest}
    >
        <span className={clsx('flex items-center gap-2', {'opacity-0': loading})}>
            {Icon && <Icon size={18}/>}
            {children}
        </span>
        {loading && <span className="absolute">
          <Loader size={24} className="animate-spin"/>
        </span>}
    </Element>
}
