import { useState } from "react";
import { truncateText } from "../utils/helper";

const TicketTable = ({ tickets }) => {
  const [searchText, setSearchText] = useState("");

  // Search funtionality
  const searchedTickets = tickets.filter((ticket) => {
    const search = searchText.toLowerCase().trim();
    if (search == "") return true;
    return (
      ticket.customerName.toLowerCase().includes(search) ||
      ticket.subject.toLowerCase().includes(search)
    );
  });

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title mb-3 text-center">Ticket List</h5>

        {/* Search input */}
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by customer name or subject"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        {/* table design */}
        <div className="table-responsive d-flex justify-content-center">
          <table className="table table-hover table-bordered w-auto">
            <thead className="table-light">
              <tr>
                <th>Ticket ID</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created Date</th>
              </tr>
            </thead>

            <tbody>
              {searchedTickets.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.id}</td>
                  <td>{ticket.customerName}</td>
                  <td>{ticket.email}</td>
                  <td>{truncateText(ticket.subject, 30)}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* table design ended*/}

        {tickets.length === 0 && (
          <p className="text-muted text-center mt-3">No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default TicketTable;
