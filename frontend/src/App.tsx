import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppTestRouter } from './routers'
import { store } from './store'

export const AppTest = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <AppTestRouter />
      </BrowserRouter>
    </Provider>
  )
}