import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#00A3FF',      // Bright Blue
          secondary: '#14B8A6',    // Teal
          surface: '#FFFFFF',
          background: '#FFFFFF',
          'surface-variant': '#F8FAFC',
          'on-surface': '#0F172A', // Almost black text
          'on-background': '#0F172A',
          'on-primary': '#FFFFFF'
        }
      }
    }
  }
})
