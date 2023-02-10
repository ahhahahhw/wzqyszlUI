import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    console.log('当前指令是：', command)
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@': resolve('./src/'),
            },
        },
        server: {
            port: 80,
            proxy: {
                '/api:': {
                    // target: 'http://124.222.231.228:8080/',
                    target: 'http://localhost:8088/',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, "") // 不可以省略rewrite
                },
            }
        },
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            }
        },
    }
})
