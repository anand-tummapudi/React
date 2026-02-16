import getBooksService from "./bookService";

const getBooksAction = () => async (dispatch) =>{
    try{
        const books = await getBooksService();
        dispatch({type: "GET_BOOKS", payload: books.data})
    }catch(error){
        console.error(error);
    }
}

export default getBooksAction;