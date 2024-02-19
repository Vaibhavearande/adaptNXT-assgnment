import {useState} from 'react'
import './App.css'

const Sidebar = ({setActiveTab}) => {
  return (
    <div className="sidebar">
      <button type="button" onClick={() => setActiveTab('dashboard')}>
        Dashboard
      </button>
      <button type="button" onClick={() => setActiveTab('analytics')}>
        Analytics
      </button>
      <button type="button" onClick={() => setActiveTab('settings')}>
        Settings
      </button>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard Content</h2>
      <p>
        Welcome to the dashboard! Here, you can display various widgets and
        information.
      </p>
      {/* Add your dashboard components here */}
      <div className="widget">
        <h3>Recent Activities</h3>
        {/* Add a list of recent activities */}
        <ul>
          <li>User logged in</li>
          <li>New data uploaded</li>
          {/* Add more items */}
        </ul>
      </div>
    </div>
  )
}

const Analytics = () => {
  return (
    <div className="container p-3 my-5 bg-light border border-primary">
      {/* DataTable Code starts */}
      <table
        id="example"
        className="table table-striped nowrap"
        style={{width: '100%'}}
      >
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No.</th>
            <th>Order date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Valur</th>
            <th>Status</th>
            <th>Operation.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#TKN20203754</td>
            <td>TKN20203754</td>
            <td>2022-05-04</td>
            <td>Lucknow</td>
            <td>Abhishek Dixit</td>
            <td>0.00</td>
            <td>Pending</td>
            <td>
              <select></select>Actions
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Settings = () => {
  return (
    <div className="container p-3 my-5 bg-light border border-primary">
      {/* DataTable Code starts */}
      <table
        id="example"
        className="table table-striped nowrap"
        style={{width: '100%'}}
      >
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No.</th>
            <th>Order date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Valur</th>
            <th>Status</th>
            <th>Operation.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#TKN20203754</td>
            <td>TKN20203754</td>
            <td>2022-05-04</td>
            <td>Lucknow</td>
            <td>Abhishek Dixit</td>
            <td>0.00</td>
            <td>Pending</td>
            <td>
              <select></select>Actions
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="app">
      <Sidebar setActiveTab={setActiveTab} />
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'analytics' && <Analytics />}
      {activeTab === 'settings' && <Settings />}
    </div>
  )
}

export default App
