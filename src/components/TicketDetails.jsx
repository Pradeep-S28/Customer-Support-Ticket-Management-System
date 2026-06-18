const TicketDetails = ({ ticket, onClose }) => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">Ticket Details</h5>

          <button className="btn btn-sm btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>

        <p>
          <strong>Ticket ID:</strong> #{ticket.id}
        </p>
        <p>
          <strong>Customer Name:</strong> {ticket.customerName}
        </p>
        <p>
          <strong>Email:</strong> {ticket.email}
        </p>
        <p>
          <strong>Subject:</strong> {ticket.subject}
        </p>
        <p>
          <strong>Description:</strong> {ticket.description}
        </p>
        <p>
          <strong>Priority:</strong> {ticket.priority}
        </p>
        <p>
          <strong>Status:</strong> {ticket.status}
        </p>
        <p>
          <strong>Created Date:</strong> {ticket.createdDate}
        </p>
      </div>
    </div>
  );
};

export default TicketDetails;
