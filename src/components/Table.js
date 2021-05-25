import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import {TableBody, TableHead} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";

const THead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell style={{fontSize: 20 + 'px'}}align="center"><b><u>Title</u></b></TableCell>
                <TableCell style={{fontSize: 20 + 'px'}}align="center"><b><u>Publication Date</u></b></TableCell>
                <TableCell style={{fontSize: 20 + 'px'}}align="center"><b><u>Delete</u></b></TableCell>
            </TableRow>
        </TableHead>
    )
};

const TBody = (props) => {

    // devuelve una lista con los elementos modificados en la función
    let resultado = props.noticias.map(elem => {
        return (
            <TableRow  style={{backgroundColor: "#bdbdbd"}} key={elem.id}>
                <TableCell align="center"><b>{elem.title}</b></TableCell>
                <TableCell align="center"><b>{elem.pub_date}</b></TableCell>
                <TableCell align="center">
                    <Button variant="contained" color="secondary" onClick={() => {props.deleteNew(elem.id)}} size="small">
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
        )
    });
    return (
        <TableBody>
            {resultado}
        </TableBody>
    )
};

class MyTable extends Component{

    render(){

        console.log("in render MyTable");

        let {noticias, deleteNew} = this.props;

        return (
            <Grid container style={{marginTop: 3 +'%'}}>
                <Grid item xs={6} lg={12}>
                    <Table>
                        <THead/>
                        <TBody noticias={noticias} deleteNew={deleteNew}/>
                    </Table>
                </Grid>
            </Grid>
        )

    }

}

export default MyTable;