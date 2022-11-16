import { useContext, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Keyboard from './components/Keyboard/Keyboard';
import Monitor from './components/Screen/Monitor';
import { ScreenContext } from './store/ScreenContext';

function App() {
  const { setFullScreen } = useContext(ScreenContext);
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, []);
  const detectKeyDown = (e) => {
    if (e.key === 'Escape') {
      setFullScreen(false);
    }
  };
  return (
    <>
      <Monitor />
      <Keyboard />
      <Footer />
    </>
  );
}

export default App;
