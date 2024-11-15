import './App.css';
import TextInput from './components/TextInput';

function App() {
  return (
      <div className="container">
        <TextInput text="First Name" />
        <TextInput text="Last Name" />
        <TextInput text="Email" />
        <TextInput text="Contact" />
      </div>
  );
}

export default App;
