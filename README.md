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

### Creating a Component, with props and prop tyles

```javascript
import React from "react";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

const propTypes = {
    children: PropTypes.node.isRequired
}

const Layout= ({children}) =>{

    return (
        <Box>
            <Box>
                <Header/>
            </Box>
            <Box mt={8} ml={5}> 
                {children}
            </Box>
        </Box>
    );
}
Layout.propTypes = propTypes;
export default Layout;
```

**To create unit tests using vitest, we need to install vitest package**

``` javascript
   pnpm install -D vitest @testing-library/react @testing-library/jest-dom happy-dom

   pnpm install -D @testing-library/jest-dom happy-dom
   
   pnpm test run

```

**Install Redux**
``` javascript
pnpm install redux react-redux redux-thunk
```




