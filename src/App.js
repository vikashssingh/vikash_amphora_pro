import './App.css';
import Slider from './Redux/Features/Slider';
import { Provider } from 'react-redux';
import Store from './App/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Slider />
      </div>
    </Provider>
  );
}

export default App;
