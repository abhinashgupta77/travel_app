import './App.less';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  const [changeView, setChangeView] = useState(false);
  const viewChanged = (action) => {
    setChangeView(action);
  }
  return (
    <div className="App">
      <div className="full-height">
        <Sidebar/>
        <div className="main-wrap">
          <Header onViewChanged={viewChanged}/>
          <Main changeView={changeView}/>
        </div>
      </div>
    </div>
  );
}

export default App;
