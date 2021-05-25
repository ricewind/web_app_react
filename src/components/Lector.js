import React, {Component} from 'react';
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Noticia from "./Noticia";
import {Link} from "react-router-dom"
import './Lector.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";


class Lector extends Component {
    state = {
        noticias: [],
        portada: [],
        redirect: false,
        selected: 0
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/noticia/').then(r => {
            let maxNumNoticia = 10;

            // en el caso de que la api devuelva mas de 10 noticias
            if (r.data.length >= maxNumNoticia) {

                this.setState({portada: r.data[r.data.length - 1]});
                this.setState({noticias: r.data.reverse().splice(0,maxNumNoticia)});
            } else {
                this.setState({portada: r.data[r.data.length - 1]});
                r.data.splice(r.data.length - 1, 1);
                this.setState({noticias: r.data.reverse()});
            }

        })

    }

    render() {
        const {redirect} = this.state;

        if (redirect) {
            return (
                <Noticia selected={this.state.selected}/>
            );
        } else {
            return (
                <div>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <h1 align={'center'}>Ultimas Noticias</h1>
                        </Grid>
                    </Grid>
                    <Portada portada={this.state.portada} abrirNoticia={this.verNoticia}/>
                    <hr/>
                    <NewsData noticias={this.state.noticias} abrirNoticia={this.verNoticia}/>
                </div>
            )
        }
    }

    verNoticia = () => {
        this.setState({redirect: true});
        this.setState({selected: this.props.match.params.id});
    }
}

const Portada = (elementos) =>{
    return(
        <Grid container spacing={1}>
            <Grid align={'center'} item xs={12}>
                <Link to={"/noticia/" + elementos.portada.id} style={{ textDecoration: 'none' }}>
                    <div>
                            <h1>{elementos.portada.title}</h1>
                            <img src={elementos.portada.img_url} style={{width: 20 + '%'}}/>
                            <h3>{elementos.portada.header}</h3>
                    </div>
                </Link>
            </Grid>
        </Grid>
    );
}

const NewsData = (elementos) => {

    let restoNoticias = elementos.noticias.map(elem => {
        return(
            <Grid align={'center'} item xs={6} sm={3} style={{marginTop: 5 +'%'}}>
                 <Link to={"/noticia/" + elem.id} style={{ textDecoration: 'none' }}>
                     <Card>
                         <CardHeader
                             avatar={
                                 <Avatar aria-label="recipe" style={{backgroundColor: "#4527a0"}}>
                                     New
                                 </Avatar>
                             }
                             action={
                                 <IconButton aria-label="settings">
                                 </IconButton>
                             }
                             title={elem.title}
                             subheader={elem.pub_date}
                         />
                         <CardMedia className={'imagenNew'}
                             image={elem.img_url}
                             title="hola"
                         />
                     </Card>
                 </Link>
            </Grid>
        )
    });

    return(
        <Grid style={{marginTop: 5 +'%'}} container spacing={3}>
            {restoNoticias}
        </Grid>
    )
};

export default Lector;