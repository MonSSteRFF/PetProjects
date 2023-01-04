import './app.scss';
import {Select} from "./components/select";

function App() {

  const optionsList = ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5']

  const numberSelect = Select({optionsList:optionsList, placeholder:'Just click'})
  const value = numberSelect.value;

  return (
    <div className="App">
      <button onClick={(e)=> {e.preventDefault(); console.log(value)}} >send select value in console</button>


      {numberSelect.SelectUi}


    </div>
  );
}

export default App;
