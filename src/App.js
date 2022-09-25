import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil';
import CharacterCounter from './Components/CharacterCounter'

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
