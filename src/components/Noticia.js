import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";


class Noticia extends Component{

    constructor(props){
        super(props);
        this.state = {
            noticia: {}
        };
    }

    componentDidMount() {

        let url = "http://127.0.0.1:8000/api/noticia/"+ this.props.match.params.id;
        axios.get(url).then(r => {
                this.setState({noticia: r.data});
        })
    }

    render() {
        return (
                <div>
                    <Grid align={'center'} container spacing={1}>
                        <Grid item xs={12} >
                            <h1>{this.state.noticia.title}</h1>
                        </Grid>
                        <Grid item xs={6}style={{marginTop: 10 +'%'}}>
                            <h3>{this.state.noticia.header}</h3>
                        </Grid>
                        <Grid item xs={6} style={{marginTop: 10 +'%'}}>
                            <img alt={"img_portada_noticia_"+ this.state.noticia.title} src={this.state.noticia.img_url} style={{width: 100 + '%'}}/>
                        </Grid>
                        <Grid item xs={12} style={{marginTop: 10+'%'}}>
                            <img alt={"img_2_noticia_"+ this.state.noticia.title} src={this.state.noticia.img2_url}/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>{this.state.noticia.content}</p>
                        </Grid>
                        <Grid item xs={12} align={'right'} style={{marginRight: 5 + '%'}}>
                            <p>{this.state.noticia.pub_date}</p>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default Noticia;