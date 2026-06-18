# Customer Support Ticket Management System

## Project Overview

Customer Support Ticket Management System is a responsive React.js application for managing customer support tickets through a dashboard interface.

The application allows users to view ticket statistics, search and filter tickets, sort by created date, paginate ticket records, create new tickets, edit existing tickets, and view full ticket details.

## Live Demo

https://pradeep-s28.github.io/Customer-Support-Ticket-Management-System/

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Axios
- Postman
- JSONPlaceholder API

## Features Implemented

- Dashboard summary cards
  - Total Tickets
  - Open Tickets
  - In Progress Tickets
  - Resolved Tickets
- Ticket list table
- Search by customer name or subject
- Filter by status and priority
- Sort by created date
- Pagination with 5 records per page
- Create new ticket
- Edit existing ticket
- Ticket details view
- Form validation
  - Required fields
  - Email format validation
  - Minimum description length validation
- Responsive design for desktop, tablet, and mobile
- API integration using Axios
- Postman collection for API testing

## API Integration

This project uses JSONPlaceholder APIs.

### APIs Used

```txt
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
```

JSONPlaceholder does not provide direct support ticket data. So, users and posts data are combined to generate ticket records.

### API Data Mapping

```txt
user.name  → Customer Name
user.email → Email Address
post.title → Subject
post.body  → Description
custom data → Priority, Status, Created Date
```

## Folder Structure

```txt
customer-support-ticket-management-system
├── postman
│   └── Customer Support Ticket Management System.postman_collection.json
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── DashboardCards.jsx
│   │   ├── Navbar.jsx
│   │   ├── TicketDetails.jsx
│   │   ├── TicketForm.jsx
│   │   └── TicketTable.jsx
│   ├── pages
│   │   └── Dashboard.jsx
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   └── index.css
│   ├── utils
│   │   └── helper.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── notes.txt
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Setup Instructions

Clone the repository:

```bash
git clone https://github.com/pradeep-s28/Customer-Support-Ticket-Management-System.git
```

Go to the project folder:

```bash
cd Customer-Support-Ticket-Management-System
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Dependencies

Install Bootstrap:

```bash
npm install bootstrap
```

Install Axios:

```bash
npm install axios
```

Install GitHub Pages package:

```bash
npm install gh-pages --save-dev
```

## Deployment

The project is deployed using GitHub Pages.

Deploy command:

```bash
npm run deploy
```

Live link:

```txt
https://pradeep-s28.github.io/Customer-Support-Ticket-Management-System/
```

## Postman Collection

The Postman collection is included in the `postman` folder.

Included API requests:

```txt
GET Users
GET Posts
```

## Screenshots

Screenshots are included for the following:

## Screenshots

### Dashboard and Ticket Table

<img width="672" height="373" alt="dashboard table" src="https://github.com/user-attachments/assets/af235a14-25b1-4a51-bde9-65e43c9c860a" />

### Create Ticket Form

<img width="663" height="278" alt="create-form" src="https://github.com/user-attachments/assets/fe074f3c-1321-4893-8617-acc2f231493c" />

### Edit Ticket Form

<img width="686" height="293" alt="edit-form" src="https://github.com/user-attachments/assets/d5fb465b-7e67-4b23-a392-93c762da6c63" />

### Ticket Details View

<img width="668" height="221" alt="ticket-details-view" src="https://github.com/user-attachments/assets/93184d4e-4ccb-4f13-aa7b-019c781f8642" />

### Mobile Responsive View

<img width="362" height="450" alt="mobile-responsive 1" src="https://github.com/user-attachments/assets/59cf9a69-cc29-4e5c-832e-a86c8f932bc1" />

<img width="352" height="452" alt="mobile-responsive 2" src="https://github.com/user-attachments/assets/0ac67014-7f42-4371-9fca-b7318084c039" />

## Notes

Create and edit operations are handled in React state because JSONPlaceholder is a fake REST API and does not permanently store custom ticket data.
