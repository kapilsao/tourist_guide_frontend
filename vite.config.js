import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest:{
        name: 'guide me buddy ',
        short_name: 'guidemebuddy',
        description: 'guide me buddy is a simplified tourist guide application',
        theme_color: '#1e3a8a',
        background_color:'#f0f9ff',
        icons:[
          {
            src: '/icons/cropped.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/cropped (1).png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
           
          },
          {
            src: '/icons/cropped (2).png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
            
          },
          {
            src: '/icons/flight (1).png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icons/camera (1).png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },

        ]


      }
    })
  ],
  server: {

    https: {

      key :fs.readFileSync('./key.pem'),
      cert:fs.readFileSync('./cert.pem') 

    },


    
    
    strictPort: true, // Vite will automatically try the next available port
  },
})
