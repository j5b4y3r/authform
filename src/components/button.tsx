import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           type = 'button',
                                           onClick,
                                           className = '',
                                           children,
                                       }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent group focus:outline-none ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
