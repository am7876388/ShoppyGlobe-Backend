# ShoppyGlobe API

## Project Overview
This project involves building the backend for the ShoppyGlobe e-commerce application using Node.js, Express, and MongoDB.

## Requirements

### 1. Node.js and Express API Setup (60 marks)
- Set up a Node.js application using Express.
- Create routes for:
  - `GET /products`: Fetch a list of products from MongoDB.
  - `GET /products/:id`: Fetch details of a single product by its ID.
  - `POST /cart`: Add a product to the shopping cart.
  - `PUT /cart/:id`: Update the quantity of a product in the cart.
  - `DELETE /cart/:id`: Remove a product from the cart.

### 2. MongoDB Integration (50 marks)
- Use MongoDB to store product data and cart items.
- Set up collections for:
  - **Products**: Each product should have fields like `name`, `price`, `description`, and `stock quantity`.
  - **Cart**: Store items added to the cart, including `product IDs` and `quantities`.
- Implement CRUD operations on MongoDB collections for products and cart items.
- Add screenshots from MongoDB Database.

### 3. API Error Handling and Validation (20 marks)
- Implement error handling for all API routes.
- Validate input data (e.g., check if product ID exists before adding to the cart).

### 4. Authentication & Authorization (60 marks)
- Implement JWT-based authentication.
- Create routes for User Registration and User Login:
  - `POST /register`: Register a new user.
  - `POST /login`: Authenticate the user and return a JWT token.
- Protect cart routes so only logged-in users can access them.

### 5. Testing with ThunderClient (35 marks)
- Use ThunderClient to test all API routes.

### 6. Submission Guidelines (25 marks)
- Ensure the API runs without errors. (10 marks)
- Submit a GitHub link with code and documentation for all API testing screenshots. (10 marks)
- Include comments and proper documentation. (5 marks)

## Installation & Setup

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or on a cloud service

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd shoppyglobe-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```plaintext
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Routes

### Product Routes
- `GET /products`: Fetch all products.
- `GET /products/:id`: Fetch a single product by ID.

### Cart Routes
- `POST /cart`: Add a product to the cart.
- `PUT /cart/:id`: Update product quantity in the cart.
- `DELETE /cart/:id`: Remove a product from the cart.

### Authentication Routes
- `POST /register`: Register a new user.
- `POST /login`: Authenticate user and get JWT.

## Testing
- Use ThunderClient to test all API endpoints.
- Verify authentication and authorization.
- Ensure error handling works correctly.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

## License
This project is licensed under the MIT License.
