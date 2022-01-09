import "./app-filter.css";

const AppFilter =({clazz, onUpdateFilter}) => {
    const arrBtn = [
        {text: 'Все сотрудники', dataAttribute: 'all'},
        {text: 'На повышение', dataAttribute: 'rise'},
        {text: 'З/П больше 1000$', dataAttribute: 'min1000'},
    ]
    const elemBtn = arrBtn.map(item => {
        return(
            <button type="button"
                    className={ `btn ${item.dataAttribute === clazz? 'btn-light':'btn-outline-light' }`}
                    data-term={item.dataAttribute}
                    onClick={(e) => onUpdateFilter(e.currentTarget.getAttribute('data-term'))}
                    key={item.dataAttribute}
            >
                {item.text}
            </button>
        )
    });

    return (
        <div className="btn-group">
            { elemBtn }
        </div>
    )
}

export default AppFilter;