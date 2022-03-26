import './App.css';
import data from './data.js'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
function App() {
  return (
    <div className="App">
      <DropdownTreeSelect data={data}/>
    </div>
  );
}

export default App;
