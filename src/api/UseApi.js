import apiClient from './api';

// --- MOCKED DATA ---
const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Williams", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
];

/**
 * Fetches all users.
 * In a real app: return apiClient.get('/users');
 */
export const fetchUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: mockUsers });
    }, 500);
  });
};