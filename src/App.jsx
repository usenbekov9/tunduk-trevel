// App.jsx
import Header from "./layout/header/Header"
import Hero from "./components/hero/Hero"
import TourSearch from "./components/TourSearch/TourSearch"

const App = () => {
  return (
    <div className="container-app">
      <Header />
      <Hero />
      <TourSearch />

    </div>
  )
}

export default App