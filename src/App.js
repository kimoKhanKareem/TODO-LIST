import './App.css';
import Footer from './Components/Footer';
import FormInput from './Components/FormInput';
import List from './Components/List';
import { DataProvider } from './Context/ContextData';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>
          To Do List
        </h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
