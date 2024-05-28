import type { Plugin } from 'vue'
import _AutoHeightHover from './components/AutoHeight'

export default {
  install(app) {
    app.component('AutoHeightHover', _AutoHeightHover)
  },
} as Plugin

export const AuthHeightHover = _AutoHeightHover
