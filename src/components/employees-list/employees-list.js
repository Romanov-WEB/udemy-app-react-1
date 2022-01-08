import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, deleteList, onToggle }) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                deleteList={() => deleteList(item)} 
                toggleIncrease={()=> onToggle(id, 'increase')} 
                toggleRise={() => onToggle(id, 'rise')} 
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