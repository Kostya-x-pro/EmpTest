import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';




// test
import TestApp from '../../test-component/who-am-i';

// ------------------

const App = () => {

  const data = [
    {name:"John. C", salary:800, increase: false, id: 1},
    {name:"Alex. M", salary:3000, increase: true, id: 2},
    {name:"Carl. W", salary:7000, increase: false, id: 3},
    {name:"Kostya. V", salary:10000, increase: false, id: 4},
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>

      <TestApp/>
    </div>
  );
}

export default App;