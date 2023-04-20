import Application from "./components/Application"
import Header from "./components/Header"
import { AppContainer } from "./styles"



function App() {

  return (
    <div className={AppContainer}>
      <Header />
      <Application />

    </div>
  )
}

export default App
