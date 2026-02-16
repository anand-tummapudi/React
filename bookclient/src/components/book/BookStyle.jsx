/* eslint-disable react-refresh/only-export-components */
import { makeStyles,createStyles } from "@material-ui/core";


export default makeStyles(() => createStyles({
 bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
  },
  bookFilter:{
    width: '20%',
    height: '100%',
    marginRight: '20px',
  },
  bookFilterPaper:{
    width: '100%',
    height: '100%',
    padding: '20px',
  }
}));