/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { makeBookListData } from "../src/controllers/bookControllers"
import { BookListView } from "./BookListView";
import SearchAppBar from "./SearchAppBar";

export function BookList() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "http://localhost:5000/books"
    ).then((res) => res.json()).then((data) => makeBookListData(data))
  );

const [booksData, setBooksData] = useState([])

useEffect(()=>{
    setBooksData(data)
}, [data])


const actionFilter = (filter) => {
    //TODO do the actual filtering of bookData
    console.log(filter)
}

  if (isLoading || !booksData) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
      <>
      <SearchAppBar actionFilter={actionFilter} />
        <BookListView books={data} />
      </>
  );
}

