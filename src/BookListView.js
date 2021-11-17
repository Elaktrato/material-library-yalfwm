import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'title', headerName: 'Title', width: 250 },
  ];

export function BookListView(props) {
    console.log(props)
    return (
        <DataGrid 
        rows={props.books}
        columns={columns}
        autoHeight={true}
        />
    )
}