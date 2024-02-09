/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4527A0',
        wall: '#EDE7F6',
        success: '#198754',
        info: '#2962FF',
        danger: '#D32F2F',
        'content-header': '#ff9e22',
        'content-body': '#ffddb0',
        'form-label': '#343A40'
      }
    }
  },
  plugins: []
}
