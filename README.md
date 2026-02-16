# React
ReactProject with Java Springboot Backend

### Create react project with vite
pnpm create vite@latest my-app -- --template react
pnpm create vite@latest my-app -- --template react-ts

### Use Axios for calling the backend API service
```javascript
axios.get(`${baseUrl}/books`).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.error(error);
});
```