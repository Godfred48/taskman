const users = [
  {
    email: "john@example.com",
    password: "123456",
    username: "John Doe",
    phone: "+233201234567",
    firstname: "John",
    lastname: "Doe",
    tasks: [
      {
        id: 1,
        title: "Prepare sales report",
        description: "Compile Q3 sales data and summarize trends",
        status: "In Progress",
        priority: "High",
        dueDate: "2025-10-09",
      },
      {
        id: 2,
        title: "Team meeting",
        description: "Discuss next week’s project milestones",
        status: "Pending",
        priority: "Medium",
        dueDate: "2025-10-10",
      },
    ],
  },
  {
    email: "jane@example.com",
    password: "password",
    username: "Jane Smith",
    phone: "+233501112223",
    firstname: "Jane",
    lastname: "Smith",
    tasks: [
      {
        id: 1,
        title: "Update UI components",
        description: "Improve mobile responsiveness of dashboard",
        status: "Completed",
        priority: "High",
        dueDate: "2025-10-05",
      },
      {
        id: 2,
        title: "Review analytics report",
        description: "Analyze user engagement metrics for the past month",
        status: "In Progress",
        priority: "Medium",
        dueDate: "2025-10-12",
      },
    ],
  },
  {
    email: "mike@example.com",
    password: "abc123",
    username: "Mike Johnson",
    phone: "+233244556677",
    firstname: "Mike",
    lastname: "Johnson",
    tasks: [
      {
        id: 1,
        title: "Backup database",
        description: "Ensure all customer data is backed up securely",
        status: "Pending",
        priority: "High",
        dueDate: "2025-10-11",
      },
      {
        id: 2,
        title: "Code review",
        description: "Check PRs from frontend developers",
        status: "In Progress",
        priority: "Low",
        dueDate: "2025-10-08",
      },
    ],
  },
];

export default users;
