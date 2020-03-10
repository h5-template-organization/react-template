import { init } from '@rematch/core'
import count from './modules/count'

const store = init({
  models: {
    count
  }
})

export default store
