# Notification Test Coding Challenge - Frontend

This is the frontend for the notification test coding challenge.
It uses Nuxt3 (VueJS) and UnoCSS (TailwindCSS)

## How to run

- Make sure the backend is running on `http://localhost:3001`, nuxt will proxy the requests to the backend using /api as the base path.
- Clone this repo
- Run `npm install`
- Run `npm run dev`
- The app will be running on `http://localhost:3000`

Dont forget to seed the server database with `npm run seed`

## Info and Considerations

1. This frontend is not architected for production, it is just a simple frontend to test the backend.
2. It does not implement any kind of field validation and it does not handle errors, it considers that the backend will always be on and return a valid response.
3. Fields are reactive, changing the value of user fields will save it through the backend.
