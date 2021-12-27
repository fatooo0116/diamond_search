import React from "react";
import { hot } from "react-hot-loader";

import { 
         Button,
         Modal
        } from 'react-bootstrap';

import {create_clean } from '../rest/func_rest_clean';

        

class ModelcleanCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          is_Open:false,
          fields: {},
          errors: {}
        }
    }
    

    componentDidMount() { }


    handleShow = () =>{
      this.setState({
        is_Open:true
      });
    }



    handleClose = () =>{     
      this.setState({
        is_Open:false
      });      
    }


    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      
     if(!fields["type_name"]){
        formIsValid = false;
        errors["type_name"] = "Cannot be empty";
     }


     this.setState({errors: errors});
     return formIsValid;
    }





    handleSubmit = (e) =>{
      e.preventDefault();

      let me = this;

      if(this.handleValidation()){
          console.log("create ...");
          let fields = this.state.fields;

         // console.log(fields);
          
       
          create_clean(fields,function(data){
            me.setState({
              is_Open:false,
              fields: {}
            });
            me.props.fetch_all();
          });
          

      }else{
          alert("請完成表單")
      }
    }


    



    handleChange(field, e){         
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
        }





    render() {
      const {is_Open, dep_id, dep_name } = this.state;
      const {name,pdata} = this.props;

      console.log(this.state);
    

      return(
        <div>
        <Button variant="outline-dark" onClick={this.handleShow}>
         {name}
        </Button>
  
        <Modal className="aloha_modal" show={is_Open} onHide={this.handleClose}>

        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>新增資料</Modal.Title>
          </Modal.Header>

          <Modal.Body>            
    

            <label>
            淨度: <input type="text" onChange={this.handleChange.bind(this, "type_name")} value={this.state.fields["type_name"]} />
              <span className="error_text" style={{color: "red"}}>{this.state.errors["type_name"]}</span>
            </label>
          </Modal.Body>
          

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>關閉</Button>
            <input variant="primary" className="btn btn-primary" type="submit" value="儲存送出" />
          </Modal.Footer>
          </form>

        </Modal>


        </div>
      )
    };
  }


export default hot(module)(ModelcleanCreate);