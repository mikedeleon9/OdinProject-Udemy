
import './index.css';
import Header from './components/header'
import Intro from './components/Intro'
import MiddleSection from './components/middleSection';

function App() {
  return (
    <div className="App  py-8  h-screen">
      <Header />
      <Intro />
      <MiddleSection />
    </div>
  );
}

export default App;
