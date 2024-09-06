# E-commerce Store

An e-commerce platform built with a powerful MERN stack (MongoDB, Express.js, React.js, Node.js), with additional features using Next.js and Bootstrap. This application allows users to browse products by categories, add items to the cart, authenticate securely, and proceed with payments. It also includes a robust dashboard for managing products, users, and orders.

## Features

- Product Categories: Browse through various product categories for an organized shopping experience.
- Add to Cart: Users can add multiple items to their cart and manage their selection before purchasing.
- Authentication: Secure user authentication with registration and login capabilities.
- Payment Integration: Seamless payment method integration for online purchases.
- Admin Dashboard: A feature-rich dashboard for admins to manage product listings, orders, and user data.

## Tech Stack

- Node.js: Server-side JavaScript runtime.
- Express.js: Backend framework for creating RESTful APIs.
- React.js: Front-end library for building interactive user interfaces.
- Next.js: Server-side rendering and static generation for optimized performance.
- MongoDB: NoSQL database for managing dynamic data.
- Bootstrap: Front-end framework for responsive UI components.
- Axios: HTTP client for making requests to the backend.

## Installation

1. Clone the repository:
git clone https://github.com/your-username/ecommerce-store.git

css
Copy code

2. Navigate to the project directory:
cd ecommerce-store

markdown
Copy code

3. Install dependencies for both frontend and backend:
npm install

javascript
Copy code

4. Set up the environment variables by creating a `.env` file in the root directory:
DB_URL=your_mongodb_url JWT_SECRET=your_jwt_secret PAYMENT_API_KEY=your_payment_api_key

markdown
Copy code

5. Start the backend server:
npm run dev

css
Copy code

6. Navigate to the frontend directory and start the client:
cd client npm run dev

markdown
Copy code

## Usage

- Browse Products: Explore various products through categorized listings.
- Add Items to Cart: Add products to your cart and modify your selection as needed.
- Authentication: Sign up or log in to make purchases and access order history.
- Checkout: Proceed to the checkout and complete the payment process.
- Dashboard: For admin users, access the dashboard to manage products and orders.

## API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user.
- `POST /api/auth/login` – Log in an existing user.

### Products
- `GET /api/products` – Fetch all products.
- `POST /api/products` – Add a new product (Admin only).
- `DELETE /api/products/:id` – Delete a product by ID (Admin only).

### Orders
- `POST /api/orders` – Place a new order.
- `GET /api/orders` – Get all orders (Admin only).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact me at: ismail.official295@gmail.com
