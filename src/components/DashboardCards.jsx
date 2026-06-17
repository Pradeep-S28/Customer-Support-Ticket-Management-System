import React from "react";

const DashboardCards = ({
  totalTickets,
  openTickets,
  inProgressTickets,
  resolvedTickets,
}) => {
  return (
    <div className="row g-3 mb-4">
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <p className="text-muted mb-1">Total Tickets</p>
            <h3 className="mb-0">{totalTickets}</h3>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <p className="text-muted mb-1">Open Tickets</p>
            <h3 className="mb-0">{openTickets}</h3>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <p className="text-muted mb-1">In Progress</p>
            <h3 className="mb-0">{inProgressTickets}</h3>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <p className="text-muted mb-1">Resolved Tickets</p>
            <h3 className="mb-0">{resolvedTickets}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
