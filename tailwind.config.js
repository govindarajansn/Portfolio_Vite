import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            dropShadow: {
                green: '0 0 10rem #29c26f',
            },
        },
        colors: {
            primary: {
                400: '#f28482',
                500: '#2ec4b6',
                600: '#f6bd60',
                700: '#f5cac3',
                800: '#354f52'
            },
            grayscale: {
                50: '#ffffff',
                100: '#efefef',
                200: '#FDFDFF',
                950: '#16161b',
            },
        },
    },
    plugins: [tailwindcss, autoprefixer],
};
