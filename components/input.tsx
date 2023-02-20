import {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";
import clsx from "clsx";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(
    ({className, children, ...rest}, ref) => <input
        ref={ref}
        className={clsx(className, 'px-4 py-2 bg-white border rounded')}
        {...rest}
    >
        {children}
    </input>
)
Input.displayName = 'Input';
