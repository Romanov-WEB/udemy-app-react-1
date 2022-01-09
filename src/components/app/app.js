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
            {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
            {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
            {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
        ],
        filter: 'all',
        term: ''
    }

    addList = (list) => {
        if (list.name.trim().length >= 2 && list.salary.trim()) {
            this.setState(({data})=> {
                return {
                    data: [list, ...data]
                }
            })
        }
    }

    deleteList = (list) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item !== list)
            }
        })
    }

    onToggle = (id, prop) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return{ ...item, [prop]: !item[prop] }
                    }
                    return item
                })
            }
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })
    }

    filterEmployee = (data, filter) => {
        switch (filter) {
            case 'rise':
                return data.filter(item => item.rise)
            case 'min1000':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }


    render(){
        const { data, filter, term } = this.state;
        const employees = this.state.data.length;
        const increases = this.state.data.filter(item => item.increase).length;
        const user = this.filterEmployee(this.searchEmployee(data, term), filter)

        return (
            <div className="app">
                <AppInfo 
                    employees={employees}
                    increases={increases}
                 />
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        onUpdateFilter={this.onUpdateFilter}
                        clazz={this.state.filter}
                    />
                </div>
                
                <EmployeesList 
                    data={user}
                    deleteList={this.deleteList}
                    onToggle={this.onToggle}
                />
                <EmployeesAddForm addList={this.addList}/>
            </div>
        )
    }
}

export default App;
