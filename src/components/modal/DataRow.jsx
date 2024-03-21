import './DataRow.css';

export default function DataRow({category,value,max}){
    return(
        <tr className='row'>
            <td className="category">{category}</td>
            <td className="stat-value">{value}</td>
            {
            max &&
            <td className="range-slide">
                <div className="range-slide-fill" style={{ width: (value / max) * 100 + '%'}}></div>
            </td>}
        </tr>
    )
}