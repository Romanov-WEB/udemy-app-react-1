import { Component } from 'react/cjs/react.production.min';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    state= {
        data:[
            {name: 'John C.', salary: 800, increase: false, id: 1},
            {name: 'Alex M.', salary: 3000, increase: true, id: 2},
            {name: 'Carl W.', salary: 5000, increase: false, id: 3}
        ]
    }

    addList = (list) => {
        this.setState(({data})=> {
            return {
                data: [list, ...data]
            }
        })
    }

    deleteList = (list) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item !== list)
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeesList data={this.state.data} deleteList={this.deleteList} />
                <EmployeesAddForm addList={this.addList}/>
            </div>
        )
    }
}

export default App;
