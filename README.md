# ToDoListWithAuth

## Overview

ToDoListWithAuth is a web application built using Next.js 14, featuring user authentication powered by Clerk, database management using PostgreSQL, and ORM functionality implemented with Prisma. This application allows users to create, update, and delete tasks while ensuring secure authentication through Clerk and efficient data handling with Prisma and PostgreSQL.

## Features

- User Authentication with Clerk
- Task Management (Create, Read, Update, Delete)
- PostgreSQL for Database Storage
- Prisma as the ORM (Object-Relational Mapping) solution
- Built with Next.js 14

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)
- PostgreSQL Database
- Clerk Account (https://clerk.dev/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/azalmonawwar/todolistwithauth.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todolistwithauth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   Create a `.env.local` file in the root of the project and add the following:

   ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=yourkey
    CLERK_SECRET_KEY=yourkey
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    DATABASE_URL=yourdburl
   ```

   Replace `your-clerk-frontend-api-key` with your Clerk frontend API key and `your-postgresql-database-url` with your PostgreSQL database URL.

### Run the Application

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://docs.clerk.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
