import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, deleteList, onToggle }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                deleteList={() => deleteList(item)} 
                onToggle={(e)=> onToggle(id, e.currentTarget.getAttribute('data-toggle'))} 
                {...itemProps}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;