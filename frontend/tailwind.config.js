/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                bg_landing_light: '#FFFFFF',
                bg_landing_dark: '#222222',
                text_heading_light: '#34364C',
                logo_purple: '#7B61FF',
                logo_shade: '#FBF4F4',
                btn_text_light: '#7B61FF',
                board_light_light: '#E8EDF9',
                board_dark_light: '#B7C0D8',
                board_light_dark: '#969FA8',
                board_dark_dark: '#4C5B6A',
                bg_popup_light: '#E8EDF9',
                bg_popup_dark: '#2A2E35',
                overlay_outer_layer_light: 'rgba(255,255,255,0.6)',
                overlay_outer_layer_dark: 'rgba(0,0,0,0.6)',
                bg_game_dark: '#1B2837',
                bg_chess_frame_dark: '#101B27',
                bg_game_light: '#FFFFFF',
                bg_chess_frame_light: '#E8EDF9',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}