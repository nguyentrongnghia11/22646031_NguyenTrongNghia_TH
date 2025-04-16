import { useState } from 'react';
import axios from 'axios';

function AddModal({ onClose, onAdd }) {
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    company: '',
    orderValue: 0,
    orderDate: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/customers', newCustomer);
      onAdd();
      onClose();
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add User</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="addName" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="addName"
                  name="name"
                  value={newCustomer.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="addCompany" className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="addCompany"
                  name="company"
                  value={newCustomer.company}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="addOrderValue" className="form-label">Order Value</label>
                <input
                  type="number"
                  className="form-control"
                  id="addOrderValue"
                  name="orderValue"
                  value={newCustomer.orderValue}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="addOrderDate" className="form-label">Order Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="addOrderDate"
                  name="orderDate"
                  value={newCustomer.orderDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="addStatus" className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="addStatus"
                  name="status"
                  value={newCustomer.status}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;