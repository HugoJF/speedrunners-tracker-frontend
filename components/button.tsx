import React, {FC} from "react";
import clsx from "clsx";
import {omit} from "lodash";
import {Loader} from "react-feather";


type NativeProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
type NewProps = {
    color?: 'primary' | 'secondary' | 'dark' | 'red',
    size?: 'sm' | 'md',
    loading?: boolean,
    disabled?: boolean,
    children: React.ReactNode,
}
type Props = NativeProps & NewProps;

// TODO add red color
// TODO add hover state for secondary
export const Button: FC<Props> = ({
                                      color = 'primary',
                                      size = 'md',
                                      className,
                                      disabled = false,
                                      loading = false,
                                      children,
                                      ...props
                                  }) => {
    const rest = omit(props, loading ? ['onClick'] : [])

    const primary = color === 'primary';
    const dark = color === 'dark';
    const sm = size === 'sm';
    const md = size === 'md';

    return <a
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
        <div className={clsx({'opacity-0': loading})}>{children}</div>
        {loading && <div className="absolute">
          <Loader size="24" className="animate-spin"/>
        </div>}
    </a>
}
