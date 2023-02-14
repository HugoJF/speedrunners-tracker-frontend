import {DetailedHTMLProps, FC, SelectHTMLAttributes} from "react";
import clsx from "clsx";

type Props = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

export const Select: FC<Props> = ({className, children, ...rest}) => (
    <select
        className={clsx(className, 'p-2 bg-gray-50 border rounded')}
        {...rest}
    >
        {children}
    </select>
)
