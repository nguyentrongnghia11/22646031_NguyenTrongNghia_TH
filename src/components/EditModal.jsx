import { useState, useEffect } from 'react';
import axios from 'axios';

function EditModal({ customerId, onClose, onSave }) {
  

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Customer</h5>
            <button type="button" className="btn-close" ></button> 
            {/* onClick={onClose} */}
          </div>
          <div className="modal-body">
            <form >
              {/* onSubmit={handleSubmit} */}
              <div className="mb-3">
                <label htmlFor="editName" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="editName"
                  name="name"
                  // value={customer.name}
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editCompany" className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="editCompany"
                  name="company"
                  // value={customer.company}
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editOrderValue" className="form-label">Order Value</label>
                <input
                  type="number"
                  className="form-control"
                  id="editOrderValue"
                  name="orderValue"
                  // value={customer.orderValue}
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editOrderDate" className="form-label">Order Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="editOrderDate"
                  name="orderDate"
                  // value={customer.orderDate}
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editStatus" className="form-label">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="editStatus"
                  name="status"
                  // value={customer.status}
                  // onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">Close</button>
                {/*  onClick={onClose} */}
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;