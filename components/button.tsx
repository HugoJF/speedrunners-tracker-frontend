import React, {FC} from "react";
import clsx from "clsx";

type NativeProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
type NewProps = {
    color: 'primary' | 'dark',
    size: 'sm' | 'md',
    children: React.ReactNode,
}
type Props = NativeProps & NewProps;

export const Button: FC<Props> = ({color, size, className, children, ...rest}) => (
    <a
        className={clsx(className, 'flex gap-2 justify-center items-center border rounded', {
            'text-white bg-blue-500 hover:bg-blue-600 border-blue-500': color === "primary",
            'bg-gray-800 hover:bg-gray-700 border-gray-700': color === 'dark',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-md': size === 'md',
        })}
        {...rest}
    >
        {children}
    </a>
)
