# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project Structure - API Integration

### Books Endpoint (`src/App.jsx`, lines 11-15)

The app uses [axios](https://axios-http.com/) to fetch data from a backend API:

```javascript
axios.get(`${baseUrl}/books`).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
```

**What it does:**
- Fetches a list of books from the backend `/books` endpoint
- **Base URL:** Configured in `src/config.js`
- **On Success:** Logs the response data to browser console
- **On Error:** Logs any errors to console

**Current behavior:**
The request runs every time the component renders (no `useEffect` hook), which can cause duplicate requests.

**Recommended improvement:**
Move the API call to a `useEffect` hook and store the data in state:

```javascript
const [books, setBooks] = useState([]);

useEffect(() => {
  axios.get(`${baseUrl}/books`)
    .then((response) => setBooks(response.data))
    .catch((error) => console.error(error));
}, []);
```

This ensures the API is called only once when the component mounts.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
