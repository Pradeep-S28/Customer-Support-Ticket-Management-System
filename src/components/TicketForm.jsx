import { useState } from "react";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    subject: "",
    description: "",
    priority: "low",
    status: "open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">
        <h5 className="card-title mb-3">Create New Ticket</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                className="form-control"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-md-6">
              <label className="form-label">Priority</label>
              <select
                className="form-select"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Save Ticket
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
