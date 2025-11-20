import { useNavigate } from 'react-router-dom';
import IncidentForm from '../components/IncidentForm'; // Import the new component

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Assuming you store user info in localStorage
  const user = JSON.parse(localStorage.getItem('user')); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user ? user.name : 'User'}
        </h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      </div>

      {/* Render the Incident Form here */}
      <IncidentForm />

      {/* Later you can add an IncidentList component below here */}
    </div>
  );
};

export default Dashboard;
