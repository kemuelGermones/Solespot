# Solespot

A web application store specializing in offering a diverse selection of the latest sneakers from renowned brands. The platform provides a seamless shopping experience, allowing users to browse, explore, and purchase the most sought-after sneakers in the market.

### [View Demo](https://youtu.be/Ek06bjktmO0)

## About The Project

![Solespot](https://res.cloudinary.com/de9dxfdav/image/upload/v1713541692/Project%20Promotion/Screenshot_from_2024-04-19_23-35-23_ckwcxb.png)

Solespot is a specialized online store focuses on delivering a wide array of the freshest sneakers from top-notch brands. This platform ensures a smooth shopping journey, enabling customers to effortlessly discover, explore, and acquire the trendiest sneakers available in the market.

**Key Features**

- **User-friendly Interface:** A clean and intuitive design that makes it easy for customers to browse through the available products.
- **Search and Filter Options:** Allow customers to search for specific sneakers and filter results based on category, brand, and gender.
- **Shopping Cart:** A virtual shopping cart where customers can add items for purchase and proceed to checkout.
- **Checkout Process:** A Stripe payment gateway that uses card/debit cards as payment option.

### Built With

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Getting Started

To view demo, please proceed to the provided URL above. Alternatively, if you prefer to host the web application locally on your computer, please follow the instructions outlined below.

### Prerequisites

In order to host the web application locally on your computer you must install PostgreSQL, Node.js and Stripe CLI on your machine. Also, you must create a Stripe account.

### Installation

Below are the instructions of how you can host the web application locally on your computer.

1. Clone the project repository on your machine by running the command below on your terminal.

```
git clone git@github.com:kemuelGermones/Solespot.git
```

2. Navigate to the project directory and run the command below on your terminal to install all dependencies.

```
npm install
```

3. In the project directory create a `.env` file. The purpose of a `.env` (short for "environment") file is to store configuration variables and sensitive information.
4. Copy the code below and paste it on your `.env` file. Also, you must provide your PostgreSQL, Github, Google and Stripe credentials.

```
DATABASE_URL = **EXAMPLE: "postgresql://user:password@localhost:5432/solespot?schema=public"**

CLIENT_URL = "http://localhost:3000"

NEXTAUTH_URL = "http://localhost:3000"
AUTH_TRUST_HOST = "http://localhost:3000"
AUTH_SECRET = **EXAMPLE: "someRandomString"**

GITHUB_CLIENT_ID = **EXAMPLE: "abe711bb7ff22448199w"**
GITHUB_CLIENT_SECRET = **EXAMPLE: "6aaa8d7aaf6b805bbb313b4a708034m1187606zx"**

GOOGLE_CLIENT_ID = **EXAMPLE: "212307540242-e9nwe8nbjak1ham4pjlq25ipsteffk6l.apps.googleusercontent.com"**
GOOGLE_CLIENT_SECRET = **EXAMPLE: "LOGSIX-Xhsims_-LijudEoOBVZG-yf6Eb7s"**

STRIPE_SECRET_KEY = **EXAMPLE: "sk_test_409yXhOWNiIj3T2KuMuIHUEIV9Hbb7WrKi5sjgG4PoBww3claL9GEQqiYyyXXVDuwB9fuf6JCPgoypjseJHJjDSPp678lUpDfp9"**
STRIPE_WEBHOOK_SECRET_KEY = **EXAMPLE: "whsec_e37385car6ea7d25rac6aa0f6sas07c55dc0fb9bb13af68e110ea678da9d64be"**
```

5. Run the command below on your terminal.

```
stripe listen --forward-to localhost:3000/api/stripe/webhooks/checkout
```

6. In the project directory run the command below on your terminal.

```
npx prisma db seed
```

7. Also in the project directory run the command below on your terminal.

```
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000/) and enjoy!

## Contact

Email - [kemuelgermones@gmail.com](kemuelgermones@gmail.com)
