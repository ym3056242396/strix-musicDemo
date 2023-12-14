/*
 * @Author: 星野梦美 222736
 * @Date: 2023-12-14 16:15:39
 * @LastEditors: 174050379@qq.com
 * @LastEditTime: 2023-12-14 17:29:44
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    // host:'0.0.0.0' ,//ip地址
    port: 8090, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  },
  plugins: [vue()]
})
