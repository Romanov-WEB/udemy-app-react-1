import './search-panel.css';

const SearchPanel = ({onUpdateSearch}) => {
    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
               onChange={(e) => onUpdateSearch(e.target.value)}
        />
    )
}

export default SearchPanel;