import React, {useState} from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Table = () => {

    const dummyData = [
        {
            "id": "100",
            "vendor": "Hankok",
            "amount": "$23.00",
            "date": "10/26/2019"
        },
        {
            "id": "120",
            "vendor": "Maximburg",
            "amount": "$92.50",
            "date": "07/11/2019"
        },
        {
            "id": "140",
            "vendor": "Riverdale",
            "amount": "$48.00",
            "date": "08/21/2019"
        },
        {
            "id": "160",
            "vendor": "Bloston",
            "amount": "$18.00",
            "date": "04/16/2019"
        }
    ]

    const [data, setData] = useState(dummyData)


    const remove = (id) => {
        let newData = data.filter(d => d.id !== id)
        setData(newData)
    }

    return (
        <div className="table-div">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Vendor</th>
                    <th>Invoice</th>
                    <th>Actions</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                {data.length > 0 ? data.map(d => (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.vendor}</td>
                        <td>{d.vendor}</td>
                        <td>
                            <div className="btn-container">
                                <button className="ok" onClick={() => remove(d.id)}><ThumbUpIcon className="icon"/></button>
                                <button className="nook" onClick={() => remove(d.id)}><ThumbDownIcon className="icon"/></button>
                                <button className="text" onClick={() => remove(d.id)}><p>50%</p></button>
                                <button className="cloud" onClick={() => remove(d.id)}><CloudUploadIcon className="icon"/></button>
                            </div>
                        </td>
                        <td>{d.amount}</td>
                        <td>{d.date}</td>
                    </tr>
                )) : null}
            </table>
            {data.length === 0 && ( <p style={{color: "#fff", width: "100%"}}>No invoice available.</p>)}
        </div>
    )
}

export default Table
