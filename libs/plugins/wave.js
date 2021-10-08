import Vue from 'vue'
import VWave from 'v-wave'

const options = {
  color: 'currentColor',
  easing: 'ease-in-out',
  duration: 0.7,
  initialOpacity: 0.2,
  finalOpacity: 0.1,
  cancellationPeriod: 75,
}

Vue.use(VWave, options)
