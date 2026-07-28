# Kompra Commerce

A base e-commerce project built with React and TypeScript using Vite, featuring routing, a shared layout, and core pages.

## Current project status

The project currently includes:
- an initial setup with Vite, React, and TypeScript
- main routing with React Router
- a shared layout structure
- core pages such as Home, Product Detail, Login, Cart, Wishlist, and a 404 page
- protected routes for Cart and Wishlist
- initial styling with SCSS

## Tech stack

- React 19
- TypeScript
- Vite 8
- React Router DOM
- SCSS
- ESLint

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the project locally:
   ```bash
   npm run dev
   ```

## Available scripts

- `npm run dev` → starts the development server
- `npm run build` → creates a production build
- `npm run preview` → starts a preview of the build
- `npm run lint` → runs ESLint

## Main structure

- `src/pages` → application pages
- `src/components` → reusable components
- `src/layouts` → shared layouts
- `src/router` → routing and protected routes
- `src/App.tsx` → main route configuration

## Project goal

This project is being developed as a challenge to build an e-commerce web app for displaying products, categories, and product details. The application is intended to support user authentication and protected features such as the Shopping Cart and Wishlist.

The challenge focuses on evaluating code organization, API integration, and attention to detail. The main backend source is the Fake Store API.

### Challenge summary

Create an e-commerce web app where users can:
- browse products and categories
- view product details
- authenticate and access protected areas
- interact with cart and wishlist features

### Technical requirements

- TypeScript is mandatory
- React is used for the UI
- Fake Store API is used as the data source
- The app should follow modern UX principles and remain responsive and accessible

## AI usage

AI tools were used during development to help with scaffolding, debugging, and code refinement. Generated output was reviewed and validated manually to ensure it fit the project requirements and remained consistent with the current implementation.