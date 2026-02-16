import React from 'react';
import { Box } from '@material-ui/core';
import BookFilter from './BookFilter';
import styles from './BookStyle';


const BookContainer = () => {
const classes = styles();
    return (
        <Box className={classes.bookContainer}>
            <BookFilter/>
            <Box>
                Here we display all Books details.
            </Box>
        </Box>
    );
}

export default BookContainer;