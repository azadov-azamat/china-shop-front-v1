import React from 'react';

interface LoadingProps {
    size?: string; // Spinnerning o'lchami, masalan 'w-8 h-8'
    color?: string; // Spinner rangini o'rnatish uchun TailwindCSS rangi, masalan 'text-blue-500'
}

const Loading: React.FC<LoadingProps> = ({ size = 'w-10 h-10', color = 'text-primary-blurple' }) => {
    return (
        <div className={`flex justify-center items-center`}>
            <div
                className={`${size} ${color} border-4 border-t-transparent border-solid rounded-full animate-spin`}
                role="status"
                aria-label="loading"
            />
        </div>
    );
};

export default Loading;
