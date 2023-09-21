import React from 'react';
import { ThemeInput, ThemeInputError } from './AppInput.style';

type AppInputProps = {
    type: 'tel' | 'password' | 'text' | 'email'
    inputPlaceholder: string
    isError?: boolean,
    errorText?: string
}

export const AppInput = ({ inputPlaceholder, type, isError, errorText, ...props }: AppInputProps) => {
    return (
        <>
            <ThemeInput
                placeholder={inputPlaceholder}
                type={type}
                {...props}
            />
            {isError &&
                <ThemeInputError isError={isError}>
                    {errorText}
                </ThemeInputError>
                }
        </>
    )
}