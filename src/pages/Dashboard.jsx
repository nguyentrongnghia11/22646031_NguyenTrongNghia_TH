import { useState } from 'react';
import OverviewCards from '../components/OverviewCards';
import DataTable from '../components/DataTable';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import Overview from '../assets/Lab_05/Squares four 1.png';
import data from '../assets/Lab_05/Squares four 1.png';

function Dashboard() {
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);

  const handleEdit = (id) => {
    setEditCustomerId(id);
  };

  const handleCloseEdit = () => {
    setEditCustomerId(null);
  };

  const handleSave = () => {
    setRefreshTable((prev) => !prev);
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleCloseAdd = () => {
    setShowAddModal(false);
  };

  return (
    <div>
      <div className="d-flex ">
        <img className='mt-1' src={Overview} width="32"
          height="32"
          alt="User Avatar" />
        <h2 className="mx-2"><b>Overview</b></h2>
      </div>
      <OverviewCards />
      <DataTable onEdit={handleEdit} onAdd={handleAdd} key={refreshTable} />
      {editCustomerId && (
        <EditModal
          customerId={editCustomerId}
          onClose={handleCloseEdit}
          onSave={handleSave}
        />
      )}
      {showAddModal && (
        <AddModal onClose={handleCloseAdd} onAdd={handleSave} />
      )}
    </div>
  );
}

export default Dashboard;