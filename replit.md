# Zillgo Portfolio Website

## Overview

This is a portfolio/content creator website for "ZILLGO" (tagline: "That one shark mask kid") featuring a bold cyberpunk aesthetic with neon green (#00FF00) and black color scheme. The site showcases animation work and creative content with a strong emphasis on visual design, glass-morphism UI elements, and animated brand presence.

The application is built as a full-stack TypeScript project using React for the frontend, Express for the backend, and is configured to use Drizzle ORM with PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, bundled using Vite

**Routing**: Wouter (lightweight client-side routing)
- Single-page application with minimal routes (Home, NotFound)
- Hash-based navigation for internal section links (#portfolio, #about, #contact)

**UI Component System**: shadcn/ui (Radix UI primitives + Tailwind CSS)
- Complete component library pre-installed (40+ components)
- "new-york" style variant selected
- Components use class-variance-authority for variant management
- Consistent design tokens via CSS variables in index.css

**State Management**: 
- React Query (TanStack Query v5) for server state
- Local React state for UI interactions
- Custom hooks for shared logic (useToast, useIsMobile)

**Styling Approach**:
- Tailwind CSS with custom configuration
- CSS variables for theme colors (light mode configured, dark mode support ready)
- Custom design system with specific color palette for neon green cyberpunk aesthetic
- Glass-morphism effects via backdrop-blur utilities
- Responsive breakpoints at 768px (mobile)

**Design System**:
- Reference-based design from `design_guidelines.md` and existing React code in `attached_assets`
- Strict color palette enforcement (primary neon #00FF00, dark green #007A00, etc.)
- Specific typography scale (Hero: 56px/900 weight, Section Headers: 24px/900 weight)
- Standardized spacing units (8px, 12px, 16px, 24px, 36px, 56px, 96px)
- Animated brand background restricted to Hero and Featured Work sections only

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Development Mode**: 
- Vite middleware integration for HMR (Hot Module Replacement)
- Custom logging middleware for API requests
- Request body parsing with raw body capture for webhook support

**Production Build**:
- Server bundled via esbuild (ESM format, Node platform)
- Frontend built via Vite to `dist/public`
- Static file serving for production

**API Structure**:
- Routes prefixed with `/api`
- Centralized route registration in `server/routes.ts`
- Currently minimal routes (placeholder structure ready for expansion)

### Data Storage Solutions

**ORM**: Drizzle ORM v0.39+

**Database**: PostgreSQL via Neon serverless driver
- Connection string via `DATABASE_URL` environment variable
- Schema defined in `shared/schema.ts` (shared between client/server)
- Schema-first approach with Drizzle Zod for validation

**Current Schema**:
- `users` table with id (UUID), username (unique), password fields
- TypeScript types auto-generated from schema

**Migration System**:
- Drizzle Kit for schema management
- Migrations stored in `./migrations` directory
- Push-based workflow (`npm run db:push`)

**Storage Abstraction**:
- Interface-based storage layer (`IStorage` in `server/storage.ts`)
- In-memory implementation provided as fallback (`MemStorage`)
- Designed for easy swapping to database-backed implementation

### External Dependencies

**UI Component Libraries**:
- Radix UI (comprehensive primitive components)
- Lucide React (icon system)
- Embla Carousel (carousel functionality)
- Recharts (charting, if needed)
- CMDK (command palette interface)
- Vaul (drawer component)

**Utilities**:
- clsx + tailwind-merge (className management via `cn` utility)
- class-variance-authority (component variant system)
- date-fns (date manipulation)
- React Hook Form + Zod resolvers (form handling, though not yet implemented in UI)

**Database & Backend**:
- @neondatabase/serverless (PostgreSQL driver optimized for serverless)
- connect-pg-simple (session store, though sessions not yet configured)

**Build Tools**:
- Vite (frontend bundling, dev server)
- esbuild (backend bundling)
- tsx (TypeScript execution for dev server)
- Tailwind CSS + PostCSS + Autoprefixer

**Development Tools** (Replit-specific):
- @replit/vite-plugin-runtime-error-modal
- @replit/vite-plugin-cartographer
- @replit/vite-plugin-dev-banner

**Key Architectural Decisions**:

1. **Monorepo Structure**: Client, server, and shared code in single repository with TypeScript path aliases (@/, @shared/)

2. **Type Safety**: Full TypeScript coverage with strict mode enabled; shared schema types between frontend and backend

3. **Component Strategy**: Pre-built shadcn/ui components provide production-ready primitives, reducing custom component development

4. **Database Choice**: Neon serverless PostgreSQL chosen for serverless-friendly connection pooling and edge compatibility

5. **Build Optimization**: Separate build processes for client (Vite) and server (esbuild) allow independent optimization

6. **Design Constraints**: Reference implementation in attached_assets must be preserved; animated background strictly limited to specific sections to maintain performance

7. **Session Management**: Infrastructure present (connect-pg-simple) but not yet implemented, indicating planned authentication features