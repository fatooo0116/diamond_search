import React from "react";
import { hot } from "react-hot-loader";

import { 
         Button,
         Modal
        } from 'react-bootstrap';

import {create_fcolor } from '../rest/func_rest_fcolor';

        

class ModelfcolorCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          is_Open:false,
          fields: {},
          errors: {},
          attachment_id:0
        }
    }
    

    componentDidMount() { }

   

    handleShow = () =>{
      this.setState({
        is_Open:true
      });

      let me = this;

      wp.media.editor.send.attachment = function(props, attachment){
        let { fields } = me.state;

        // fields.trade_mark = attachment.url;     
        // let  woo_post_id = me.props.pdata.woo_id;
        // alert('upload '+attachment.id);
        me.setState({
          attachment_id:attachment.id,
          attachment_url:attachment.url
        });
      }        
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
          // console.log("create ...");
          
          let {fields,attachment_id} = this.state;

         // console.log(fields);
          
       
          create_fcolor({
            fields:fields,           
            attachment_id:attachment_id
          },function(data){
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

        medaiUpload = () =>{
          window.wp.media.editor.open();    
        }



    render() {
      const {is_Open } = this.state;
      const {name,pdata} = this.props;

      // console.log(this.state);
    

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
            彩鑽顏色: <input type="text" onChange={this.handleChange.bind(this, "type_name")} value={this.state.fields["type_name"]} />
              <span className="error_text" fcolor={{color: "red"}}>{this.state.errors["type_name"]}</span>
            </label>

              <label className="dfx-wrap">
                    圖片: <Button onClick={this.medaiUpload} size="sm" >Upload</Button>
                    <div className="preview">
                        {(this.state.attachment_url)? <img src={this.state.attachment_url}  onClick={this.medaiUpload} /> :''}
                    </div>
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


export default hot(module)(ModelfcolorCreate);