import { useState, useEffect } from 'react';
import axios from 'axios';


import avt1 from '../assets/Lab_05/Avatar_1.png';
import avt2 from '../assets/Lab_05/Avatar2.png';
import avt3 from '../assets/Lab_05/Avatar3.png';
import avt4 from '../assets/Lab_05/Avatar4.png';
import avt5 from '../assets/Lab_05/Avatar5.png';
import '../components/component.css'

function DataTable({ onEdit, onAdd }) {
  const [customers, setCustomers] = useState([]);


  var arr = [avt1, avt2, avt3, avt4, avt5]

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    try {
      const response = await axios.get('http://localhost:3001/customers');
      setCustomers(response.data);
    } catch (error) {
      alert("Chạy lênh: npx json-server --watch public/db.json --port 3001")
      console.error('Error fetching table data:', error);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h3 style={{ color: "#f54983" }}>Detailed Report</h3>
        <div>
          <button className="btn btn-outline-pink me-2">Import</button>
          <button className="btn btn-outline-pink me-2">Export</button>
          <button className="btn btn-primary" onClick={onAdd}>Add User</button>

        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Company</th>
              <th scope="col">Order Value</th>
              <th scope="col">Order Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((row) => (
              <tr key={row.id}>
                <td className="d-flex align-items-center">
                  <input type="checkbox" className="me-2" />
                  <img
                    src={arr[Math.floor(Math.random() * arr.length)]}
                    className="rounded-circle me-2"
                    width="32"
                    height="32"
                    alt="avatar"
                  />
                  {row.name}
                </td>
                <td>{row.company}</td>
                <td>${row.orderValue}</td>
                <td>{row.orderDate}</td>
                <td>
                  <span
                    className={`badge ${row.status === 'Completed'
                      ? 'bg-success'
                      : row.status === 'In-progress'
                        ? 'bg-warning'
                        : 'bg-primary'
                      }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => onEdit(row.id)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <p>63 results</p>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DataTable;