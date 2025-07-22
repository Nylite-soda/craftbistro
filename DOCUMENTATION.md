
# SodaDine - Technical Documentation

This document provides a detailed overview of the SodaDine application's technical implementation. It is intended for developers who want to understand, extend, or contribute to the project.

## Table of Contents

1.  [Project Structure](#project-structure)
2.  [Key Technologies](#key-technologies)
3.  [Components Overview](#components-overview)
4.  [Styling and Theming](#styling-and-theming)
5.  [State Management](#state-management)
6.  [Deployment](#deployment)

## Project Structure

The project follows a standard Next.js `app` directory structure.

```
sodadine/
├── app/
│   ├── globals.css         # Global CSS styles
│   ├── layout.tsx          # Root layout for the application
│   └── page.tsx            # The main page of the application
├── components/
│   ├── ChefSpecialsSection.tsx # Section for chef's specials
│   ├── ContactSection.tsx    # Contact form and information
│   ├── EventsSection.tsx     # Upcoming events section
│   ├── Footer.tsx            # Application footer
│   ├── GallerySection.tsx    # Image gallery
│   ├── Header.tsx            # Application header and navigation
│   ├── HeroSection.tsx       # Hero section with CTA
│   ├── InteractiveBackground.tsx # Animated particle background
│   ├── MenuSection.tsx       # Filterable menu section
│   ├── ReservationSection.tsx# Reservation form
│   └── TestimonialsSection.tsx # Customer testimonials
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for scroll animations
├── public/
│   ├── *.svg               # SVG icons
│   └── image.png           # Application screenshot
├── styles/
│   └── theme.ts            # Mantine theme configuration
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Key Technologies

*   **Next.js:** The core framework for the application, providing server-side rendering, static site generation, and a great developer experience.
*   **TypeScript:** Used for static typing, improving code quality and maintainability.
*   **Mantine:** A comprehensive React component library used for building the UI. It provides a wide range of components, hooks, and a powerful theming system.
*   **Tailwind CSS:** A utility-first CSS framework used for styling the application. It is used in conjunction with Mantine's styling system.
*   **Tabler Icons:** A set of over 1,500 free and open-source SVG icons.
*   **Framer Motion:** Used for creating complex animations and transitions.

## Components Overview

The application is built with a component-based architecture. Each section of the page is a separate React component, making the code modular and easy to maintain.

### `app/layout.tsx`

This is the root layout of the application. It sets up the HTML structure, includes the Mantine provider, and applies the global font.

### `app/page.tsx`

This is the main page component. It imports and arranges all the different sections of the page, such as the hero section, menu, gallery, and contact form.

### Section Components (`components/*.tsx`)

Each component in the `components` directory corresponds to a specific section of the single-page application.

*   **`Header.tsx`:** Contains the logo, navigation links, and a mobile-friendly drawer menu. It uses Mantine's `AppShell` for the layout.
*   **`HeroSection.tsx`:** The first thing a user sees. It features a background image, a typing animation for the headline, and call-to-action buttons for making a reservation or viewing the menu.
*   **`MenuSection.tsx`:** A dynamic menu that allows users to filter by category (Appetizers, Mains, Seafood, Desserts). It uses Mantine's `Tabs` component.
*   **`ChefSpecialsSection.tsx`:** Highlights a few of the chef's signature dishes in a card-based layout.
*   **`ReservationSection.tsx`:** A form for users to request a table reservation. It uses Mantine's `useForm` hook for form handling and validation.
*   **`GallerySection.tsx`:** A simple image gallery showcasing the restaurant's ambiance and food.
*   **`TestimonialsSection.tsx`:** Displays customer testimonials in a clean and readable format.
*   **`EventsSection.tsx`:** Lists upcoming special events with details and images.
*   **`ContactSection.tsx`:** Provides contact information, a contact form, and business hours.
*   **`Footer.tsx`:** The application footer with contact details, hours, and social media links.
*   **`InteractiveBackground.tsx`:** A canvas-based particle animation that responds to mouse movement, adding a subtle and elegant visual effect.

### `hooks/useScrollAnimation.ts`

A custom hook that uses the `IntersectionObserver` API to add a fade-in animation to elements as they scroll into view. This is used to create a more engaging user experience.

## Styling and Theming

The application uses a combination of Mantine and Tailwind CSS for styling.

*   **Mantine Theme (`styles/theme.ts`):** This file defines the custom color palette (burgundy, gold, cream) and typography for the application. The `createTheme` function from Mantine is used to create a theme object that is then passed to the `MantineProvider` in `app/layout.tsx`.
*   **Tailwind CSS (`tailwind.config.ts`):** Tailwind is used for utility-first styling. The configuration file is set up to work with Mantine and includes the custom color palette.
*   **Global CSS (`app/globals.css`):** This file contains global styles and CSS variables.

## State Management

For this application, state management is primarily handled by React's built-in state management (`useState`, `useEffect`) and Mantine's custom hooks.

*   **Component State:** Most of the state is managed at the component level. For example, the `MenuSection` component manages the active tab state.
*   **Mantine Hooks:** Mantine provides a rich set of hooks for managing state related to UI components, such as `useDisclosure` for opening and closing modals and drawers, and `useForm` for handling form state and validation.

Given the application's current scope, a more complex state management library like Redux or Zustand is not necessary.

## Deployment

The application is deployed on **Vercel**, which is the recommended platform for hosting Next.js applications. The deployment process is straightforward:

1.  Push the code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2.  Create a new project on Vercel and link it to the Git repository.
3.  Vercel will automatically build and deploy the application.

Any subsequent pushes to the main branch will trigger a new deployment.
