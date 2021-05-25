import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class Formulario extends Component{
    // se llama unicamente 1 vez al crear el objeto
    constructor (props) {
        super(props);
        this.defaultData = {
            title: '',
            header: '',
            content: '',
            img_url: '',
            img2_url: ''
        };
        this.state = this.defaultData;
    }

    render(){
        const {title,header,content,img_url,img2_url} = this.state;

        return(
            <div>
            < Grid container style={{margin: 5+'%'}} key={null}>
                <Grid item xs={6}>
                </Grid>
                    <form>
                        <TextField style={{paddingLeft: 10 + 'px'}}
                            label="Title"
                            name="title"
                            value={title}
                            onChange={this.onChange}
                        />
                        <TextField style={{paddingLeft: 10 + 'px'}}
                            label="Header"
                            name="header"
                            value={header}
                            onChange={this.onChange}
                        />
                        <TextField style={{paddingLeft: 10 + 'px'}}
                            label="Content"
                            name="content"
                            value={content}
                            onChange={this.onChange}
                        />
                        <TextField style={{paddingLeft: 10 + 'px'}}
                            label="Url Image"
                            name="img_url"
                            value={img_url}
                            onChange={this.onChange}
                        />
                        <TextField style={{paddingLeft: 10 + 'px'}}
                            label="Url Image 2"
                            name="img2_url"
                            value={img2_url}
                            onChange={this.onChange}
                        />
                        <Button onClick={() => {this.props.addNoticia(this.state)}} style={{marginLeft: 100+'px', marginTop: 20 + 'px'}} variant="contained" color="primary" size="small" >
                           Create New
                        </Button>
                    </form>
            <Grid item xs={6}>
            </Grid>
            </Grid>

            </div>

      )
    }

    onChange = (e) => {
        // campo de texto que se esta modificando
        let {name,value} = e.target;

        this.setState({
            [name]: value
        });
/*
        let target = e.target;
        let value = target.value;
        let name = target.name;
*/

    };

}

export default Formulario;
