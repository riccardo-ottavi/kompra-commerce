# Kompra Commerce

A frontend e-commerce application built with React and TypeScript using Vite.

This project is being developed as a technical challenge focused on clean code organization, TypeScript usage, API integration, responsive design, and modern frontend development practices.

---

## Current project status

### Completed

- Vite + React + TypeScript project setup
- React Router configuration
- Shared layout structure
- Initial route organization
- Protected route architecture setup
- Initial SCSS configuration
- TypeScript interfaces structure

### In progress

- Product catalogue integration with Fake Store API
- Dynamic category navigation
- Product listing page
- Product detail page
- Authentication flow
- Protected features:
  - Shopping Cart
  - Wishlist
- State management
- Unit testing
- Accessibility improvements
- UI refinement and animations

---

## Tech stack

### Core

- React 19
- TypeScript
- Vite 8

### Styling

- SCSS

### Routing

- React Router DOM

### Testing

- Jest
- React Testing Library

### Code quality

- ESLint

---

## Installation

Clone the repository:

```bash
git clone https://github.com/riccardo-ottavi/kompra.git
```

Move into the project directory:

```bash
cd kompra
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Starts a preview of the production build |
| `npm run lint` | Runs ESLint |
| `npm test` | Runs the test suite |

---

## Project structure

```text
src/
├── components/      # Reusable UI components
├── layouts/         # Shared application layouts
├── pages/           # Application views
├── routes/          # Routing configuration and protected routes
├── types/           # TypeScript interfaces and shared types
├── assets/          # Static assets
├── App.tsx          # Main application configuration
└── main.tsx         # Application entry point
```

---

## Application goal

The goal of this project is to build a complete e-commerce experience where users can:

- Browse available products
- Navigate products by category
- View detailed product information
- Authenticate into the application
- Access protected features such as:
  - Shopping Cart
  - Wishlist

The application focuses on demonstrating:

- Component-based architecture
- Strong TypeScript typing
- API integration
- Clean folder organization
- Responsive layouts
- Accessible user interfaces

---

## Data source

The application uses the Fake Store API as the external data source for:

- Products
- Categories
- Product information

API documentation:

https://fakestoreapi.com/docs

---

## Development workflow

The project follows a feature-based Git workflow.

Development is organized through dedicated branches:

- `feature/products`
- `feature/product-detail`
- `feature/auth`
- `feature/cart`
- `feature/theme`

Each feature is developed separately and merged through Pull Requests.

---

## AI usage

AI tools were used during development to assist with:

- Project scaffolding
- Debugging
- Code refinement
- Exploring implementation approaches
- Documentation improvements

All generated suggestions were manually reviewed, tested, and adapted to ensure consistency with the project requirements and coding standards.