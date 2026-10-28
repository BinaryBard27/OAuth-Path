import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#172b26', moss: '#365e4b', lime: '#d8fa72', paper: '#f7f7f1' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] } satisfies Config;
