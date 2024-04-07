import { Provider } from "react-redux"
import store from "./store/store"
import Counter from "./components/Counter"
import Todo from "./components/Todo"

function App() {
  

  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Redux App</h1>
          <Counter/>
          <Todo/>
        </div>
      </Provider>
    </>
  )
}

export default App
