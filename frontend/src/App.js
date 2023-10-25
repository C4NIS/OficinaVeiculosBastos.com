import './App.css';
import Header from './components/layout/header';
import Entry from './components/module/module_entry';
import Service from './components/module/module_service';
import Localization from './components/module/module_localization';
import Vacancies from './components/module/module_jobs';

function App() {
  return (
    <>
      <Header />
      <Entry />
      <Service />
      <Localization />
      <Vacancies />
    </>

    );
}

export default App;
