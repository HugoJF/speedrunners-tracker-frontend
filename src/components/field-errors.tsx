import {FC} from "react";
import {FieldError} from "react-hook-form";

type Props = {
    error?: FieldError
};

const errorMessages: Partial<Record<NonNullable<Props['error']>['type'], string>> = {
    required: 'This field is required',
}

export const FieldErrors: FC<Props> = ({error}) => {
    if (!error) {
        return null;
    }

    const message = errorMessages[error.type] || error.message || error.type || 'Unknown error';

    return <p className="text-sm text-red-600 font-medium">{message}</p>
}
