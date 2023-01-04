export const allowedOrigins = [
  `http://127.0.0.1:${process.env.PORT || 5000}`,
  `http://localhost:${process.env.PORT || 5000}`,
  `http://http-nodejs-production-24da.up.railway.app:${
    process.env.PORT || 5000
  }`,
  `https://http-nodejs-production-24da.up.railway.app:${
    process.env.PORT || 5000
  }`,
  `http://containers-us-west-126.railway.app:${process.env.PORT || 5000}`,
  `https://containers-us-west-126.railway.app:${process.env.PORT || 5000}`,
  'http://127.0.0.1:5000',
  'http://localhost:5000',
  'http://127.0.0.1:5173',
  'http://localhost:5173',
  'https://my-finance-frontend.vercel.app',
  'https://my-finance-frontend-nathaalves.vercel.app',
  'https://my-finance-frontend-git-main-nathaalves.vercel.app',
];

export const options = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
  credential: true,
};
