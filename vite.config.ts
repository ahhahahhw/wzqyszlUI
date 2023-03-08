import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    console.log('当前指令是：', command)
    return {
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': resolve('./src/'),
            },
        },
        server: {
            port: 80,
        },
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            }
        },
    }
})
