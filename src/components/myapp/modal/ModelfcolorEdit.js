import React from "react";
import { hot } from "react-hot-loader";

import { 
         Button,
         Modal
        } from 'react-bootstrap';


import { edit_fcolor } from '../rest/func_rest_fcolor';

class ModelfcolorEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         is_Open:false,

         /*  form  */
         fields: {},
         cur_id:0,
         errors: {},
         attachment_id:0,
         attachment_path:''
        }
    }
    

    componentDidMount() {
      const { pdata } = this.props;
       
      let fields = {
        attachment_id: pdata.type_id,
        type_name: pdata.type_name,
      };

      if(pdata.img_url){
        this.setState({
          fields : fields,
          attachment_id:pdata.img_url,
          attachment_path:pdata.img_path[0],
          cur_id:pdata.id 
        });
      }else{
        this.setState({
          fields : fields,
          cur_id:pdata.id 
        });
      }
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




    handleShow = () =>{
      let me = this;
      this.setState({
        is_Open:true
      });
      wp.media.editor.send.attachment = function(props, attachment){
        let { fields } = me.state;

        // fields.trade_mark = attachment.url;     
        // let  woo_post_id = me.props.pdata.woo_id;
        // alert('upload '+attachment.id);
        me.setState({
          attachment_id:attachment.id,
          attachment_path:attachment.url
        });
      }       
    }



    
    handleClose = () =>{     
      this.setState({
        is_Open:false
      });      
    }
  

    handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }



   handleSubmit = (e) =>{
      e.preventDefault();

      let me = this;

      if(this.handleValidation()){
          
          let {fields,attachment_id,cur_id} = me.state;

        //  console.log(fields);
          
          edit_fcolor({
            cur_id:cur_id,
            fields:fields,           
            attachment_id:attachment_id
          },function(data){
          
                     

            me.props.fetch_all( function(){
              me.setState({
                is_Open:false,
                fields: {}
              });
            } );
            
            
          });
          
          

      }else{
          alert("請完成表單")
      }
    }



    medaiUpload = () =>{
      window.wp.media.editor.open();    
    }







    render() {

      const {is_Open,
        attachment_path, } = this.state;
      const {name} = this.props;

     // console.log(this.props);

      return(
        <div>
        <Button variant="outline-dark" size="sm" onClick={this.handleShow}>
         {name} 
        </Button>
  
        <Modal  className="aloha_modal" show={is_Open} onHide={this.handleClose}>
          <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>編輯資料</Modal.Title>
            </Modal.Header>

            <Modal.Body>            


              <label>
              彩鑽顏色: <input type="text" onChange={this.handleChange.bind(this, "type_name")} value={this.state.fields["type_name"]} />
                <span className="error_text" fcolor={{color: "red"}}>{this.state.errors["type_name"]}</span>
              </label>
              <label className="dfx-wrap">
                    圖片: <Button onClick={this.medaiUpload} size="sm" >Upload</Button>
                    <div className="preview">
                        {(attachment_path)? <img src={attachment_path}  onClick={this.medaiUpload} /> :''}
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


export default hot(module)(ModelfcolorEdit);