const Navbar = ({ onNewTicket }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">SupportDesk</a>
        <button className="btn btn-primary" type="button" onClick={onNewTicket}>
          New Ticket
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
