import { useEffect, useState } from "react";
import { truncateText } from "../utils/helper";

const TicketTable = ({ tickets, onSelectTicket }) => {
  // console.log(tickets);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, statusFilter, priorityFilter, sortOrder]);

  let filteredTickets = tickets;

  // Search filter
  if (searchText != "") {
    filteredTickets = tickets.filter((ticket) => {
      const search = searchText.toLowerCase().trim();
      return (
        ticket.customerName.toLowerCase().includes(search) ||
        ticket.subject.toLowerCase().includes(search)
      );
    });
  }

  // status filter
  if (statusFilter != "all") {
    // console.log("status filter");
    filteredTickets = filteredTickets.filter((ticket) => {
      return ticket.status == statusFilter;
    });
  }

  // priority filter
  if (priorityFilter != "all") {
    // console.log("status filter");
    filteredTickets = filteredTickets.filter((ticket) => {
      return ticket.priority == priorityFilter;
    });
  }

  //sort by date
  filteredTickets = [...filteredTickets].sort((a, b) => {
    if (sortOrder == "newest") {
      return new Date(b.createdDate) - new Date(a.createdDate);
    } else {
      return new Date(a.createdDate) - new Date(b.createdDate);
    }
  });

  const totalPages = Math.ceil(filteredTickets.length / recordsPerPage);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentTickets = filteredTickets.slice(firstIndex, lastIndex);

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title mb-3 text-center">Ticket List</h5>

        <div className="row mb-3 g-2">
          {/* Search filter column */}
          <div className="col-md-3">
            {/* Search input */}
            <input
              type="text"
              className="form-control"
              placeholder="Search by customer name or subject"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          {/* status filter column */}
          <div className="col-md-3">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          {/* priority filter column */}
          <div className="col-md-3">
            <select
              className="form-select"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* sort dropdown */}
          <div className="col-md-3">
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
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
              {currentTickets.map((ticket, index) => (
                <tr
                  key={index}
                  onClick={() => onSelectTicket(ticket)}
                  style={{ cursor: "pointer" }}
                >
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

        {/* pagination buttons */}
        {filteredTickets.length > 0 && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="mb-0">
              Page {currentPage} of {totalPages}
            </p>

            <div>
              <button
                className="btn btn-outline-primary btn-sm me-2"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>

              <button
                className="btn btn-outline-primary btn-sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* if no tickets */}
        {filteredTickets.length === 0 && (
          <p className="text-muted text-center mt-3">No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default TicketTable;
