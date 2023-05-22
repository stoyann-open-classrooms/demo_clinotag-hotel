import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/header/header/Header'
import Home from './pages/home/Home'
import Demo from './pages/demo/Demo'
import Satisfaction from './pages/satisfaction/Satisfaction'
import Thanks from './pages/thanks/Thanks'
import AskCleaning from './pages/askCleaning/AskCleaning'
import DonotDisturbConf from './pages/doNotDisturbConf/DonotDisturbConf'
import CleaningConfirmation from './pages/cleaningConfiramtion/CleaningConfirmation'
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/make-room" element={<Home />} />
          <Route path="/ask-cleaning" element={<AskCleaning />} />
          <Route
            path="/do-not-disturb-confirmation"
            element={<DonotDisturbConf />}
          />
          <Route
            path="/cleaning-confirmation"
            element={<CleaningConfirmation />}
          />
          <Route path="/satisfaction" element={<Satisfaction />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
