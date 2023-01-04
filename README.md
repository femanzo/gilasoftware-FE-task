# Deel FE Task 

This is a simple frontend for the Deel BE task. 
It uses Nuxt3 (VueJS) and UnoCSS (TailwindCSS)

## How to run

- Make sure the backend is running on `http://localhost:3001`, nuxt will proxy the requests to the backend using /api as the base path.
- Seed the database using the BE script
- Clone this repo
- Run `npm install`
- Run `npm run dev`
- The app will be running on `http://localhost:3000`


# TODO

- [ ] Implement query params options for the index dashboard
- [ ] Implement a better UI for the dashboard
- [ ] Implement filters for contracts 
- [ ] Implement deposit functionality