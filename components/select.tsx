import {DetailedHTMLProps, forwardRef, SelectHTMLAttributes} from "react";
import clsx from "clsx";

type Props = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
export const Select = forwardRef<HTMLSelectElement, Props>(
    ({className, children, ...rest}, ref) => <select
        ref={ref}
        className={clsx(className, 'p-2 bg-gray-50 border rounded')}
        {...rest}
    >
        {children}
    </select>
)
Select.displayName = 'Select';
