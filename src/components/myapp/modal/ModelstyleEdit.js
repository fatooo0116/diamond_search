import React from "react";
import { hot } from "react-hot-loader";

import { 
         Button,
         Modal
        } from 'react-bootstrap';


import { edit_style } from '../rest/func_rest_style';

class ModelstyleEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         is_Open:false,

         /*  form  */
         fields: {},
         cur_id:0,
         errors: {},
         attachment_id:0,
         attachment_id2:0,
         attachment_path:'',
         attachment_path2:''
        }
    }
    

    componentDidMount() {
      const { pdata } = this.props;

       console.log(pdata)
       
      let fields = {
        attachment_id: pdata.type_id,
        type_name: pdata.type_name,
      };


      this.setState({
        fields : fields,
        attachment_id:pdata.hasOwnProperty('img_path') ?pdata.img_url:0,
        attachment_path:pdata.hasOwnProperty('img_path') ? pdata.img_path[0]:0,
        attachment_id2: pdata.hasOwnProperty('img_path2') ?pdata.img_url2:0,
        attachment_path2:pdata.hasOwnProperty('img_path2') ? pdata.img_path2[0]:0,
        cur_id:pdata.id 
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




    handleShow = () =>{
      let me = this;
      this.setState({
        is_Open:true
      });       
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
          
          let {fields,attachment_id,cur_id,attachment_id2} = me.state;

        //  console.log(fields);
          
          edit_style({
            cur_id:cur_id,
            fields:fields,           
            attachment_id:attachment_id,
            attachment_id2:attachment_id2
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
      let me =  this;

      window.wp.media.editor.open();    
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


    medaiUpload2 = () =>{

      let me =  this;

      window.wp.media.editor.open();    
      wp.media.editor.send.attachment = function(props, attachment){
        let { fields } = me.state;

        // fields.trade_mark = attachment.url;     
        // let  woo_post_id = me.props.pdata.woo_id;
        // alert('upload '+attachment.id);
        me.setState({
          attachment_id2:attachment.id,
          attachment_path2:attachment.url
        });
      }            
    }






    render() {

      const {
             is_Open,
             attachment_path,
             attachment_id,
             attachment_path2
            } = this.state;

      const {name} = this.props;

      // console.log(attachment_path);

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
              車工: <input type="text" onChange={this.handleChange.bind(this, "type_name")} value={this.state.fields["type_name"]} />
                <span className="error_text" style={{color: "red"}}>{this.state.errors["type_name"]}</span>
              </label>
              <hr/>   

              <label className="dfx-wrap">
                    產品圖片: <Button onClick={this.medaiUpload} size="sm" >Upload</Button>
                    <div className="preview">
                        {(attachment_path)? <img src={attachment_path}  onClick={this.medaiUpload} /> :''}
                    </div>
                </label>     

                <hr/>         

                <label className="dfx-wrap">
                    產品圖片: <Button onClick={this.medaiUpload2} size="sm" >Upload</Button>
                    <div className="preview">
                        {(attachment_path2)? <img src={attachment_path2}  onClick={this.medaiUpload2} /> :''}
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


export default hot(module)(ModelstyleEdit);