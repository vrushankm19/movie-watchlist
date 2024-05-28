import React from 'react';

const Sidebar = ({ user, onLogout }) => {
  return (
    <div className="sidebar">
      <h1>Watchlists</h1>
      <input type="text" placeholder="Search" className="sidebar-search" />
      <nav>
        <a href="#">Home</a>
      </nav>
      <div className="profile">
        <div className="profile-icon">👤</div>
        <p>{user || 'GUEST'}</p>
        {user && <button onClick={onLogout}>Logout</button>}
      </div>
    </div>
  );
};

export default Sidebar;
