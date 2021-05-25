import React, {Component} from 'react';
import MyTable from "./Table";
import Formulario from "./Formulario";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';




class Periodista extends Component{
state = {
    noticias:[],
    addNew: false
};

componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/noticia/").then(r => {
        this.setState({noticias: r.data});
    })

}

    render() {
        if(this.state.addNew){
            return(
                <div>
                    <MyTable noticias={this.state.noticias} deleteNew={this.deleteNew}/>
                    <Formulario addNoticia = {this.addNoticia}/>
                </div>
            )
        }
        else{
            return (
                <div>
                    <a href="#formulario">
                        <Icon style={{ color: "#00e676", float: 'right', marginRight: 5 + '%', marginTop: 1 + '%'}}>add_circle</Icon>
                    </a>
                    <MyTable noticias={this.state.noticias} deleteNew={this.deleteNew}/>
                    <Grid container justify={'center'} style={{marginTop: 1+'%', paddingBottom: 1 + '%'}}>
                    <Button id='formulario' onClick={()=>{this.setState({addNew: true})}} variant="outlined" style={{color: '#66bb6a'}}>Crear nueva noticia</Button>
                    </Grid>
                </div>
            )
        }
    }

    addNoticia = (noticia) => {

        let flag = this.validacion(noticia);

        if(flag !== 1){
             axios.post(
                    'http://127.0.0.1:8000/api/noticia/',
                    {...noticia}
                ).then(r => {
                        this.setState({noticias: r.data});
                    }
                );
        }
    };

    deleteNew = (pk) => {
    let url = "http://127.0.0.1:8000/api/noticia/"+pk;
        axios.delete(url).then(r => {
            let newNoticias = [...this.state.noticias];
            let index = newNoticias.indexOf(pk);

                newNoticias.splice(index, 1);

            this.setState({noticias: newNoticias})
        });
        alert("noticia id=" + pk + " borrada");
    };

    validacion = (campos) =>{

        let flag = 0;

        if(campos.title === "" || campos.title.length > 20){
            alert("campo de 'title' vacio o demasiados caracteres (max 20)");
            flag = 1;
        }
        else if(campos.header === "" || campos.header.length > 80){
            alert("campo de 'header' vacio o demasiados caracteres (max 80)");
            flag = 1;
        }
        else if(campos.content === "" || campos.content.length > 5000){
            alert("campo de 'content' vacio o demasiados caracteres (max 5000)");
            flag = 1;

        }
        else if(campos.img_url === "" || campos.img_url.length > 200){
            alert("campo de 'Url Image' vacio o demasiados caracteres (max 200)");
            flag = 1;
        }
        else if(campos.img2_url === "" || campos.img2_url.length > 200){
            alert("campo de 'Url Image 2' vacio o demasiados caracteres (max 200)");
            flag = 1;
        }
        return flag;
    }
}
export default Periodista;