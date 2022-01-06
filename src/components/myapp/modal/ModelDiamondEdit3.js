import React from "react";
import { hot } from "react-hot-loader";


import { 
  Button,
  Modal,
  Col,
  Container,
  Row
 } from 'react-bootstrap';

/*
import { 
          edit_product,
          upload_product_img,
          get_product_img_and_cat
        } from '../rest/func_rest_product';      
        */

import { 
          edit_diamond3,        
        } from '../rest/func_rest_diamond3';      

// import ProductTypeCheckBox from './tpl/ProductTypeCheckBox';


class ModelDiamondEdit3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         is_Open:false,
         ptype_checked:[],
         /*  form  */
         fields: {},
         cur_id:0,
         errors: {},
         
        }
    }
    

    componentDidMount() {
      const { pdata } = this.props;
       
           
      this.setState({
        fields : pdata,
        cur_id:pdata.id,       
      });
    }


    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      /*
     if(!fields["dep_name"]){
        formIsValid = false;
        errors["dep_name"] = "Cannot be empty";
     }
     if(!fields["dep_id"]){
      formIsValid = false;
       errors["dep_id"] = "Cannot be empty";
    }
    */

     this.setState({errors: errors});
     return formIsValid;
    }




    handleShow = () =>{
      this.setState({
        is_Open:true
      });

      let me = this;

      const { pdata } = this.props;
      console.log(pdata);
          

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
          
          let {fields,ptype_checked,cur_id} = me.state;

          console.log(fields);

          
          edit_diamond3({
                        fields:fields,
                        ptype_checked:ptype_checked,
                        cur_id:cur_id
                      },function(data){
                               

            me.props.fetch_all(function(){
              me.setState({
                is_Open:false,
                fields: {}
              });
            });            
            
          });
          
          

      }else{
          alert("請完成表單")
      }
    }



    update_checked_ptype = (data) =>{
      this.setState({ptype_checked:data});
    }




    medaiUpload = () =>{
      window.wp.media.editor.open();    
    }



    render() {

      const {is_Open, ptype_checked,product_cat,errors} = this.state;
      const {name,allStyle} = this.props;

      let all_style_html=[];
      allStyle.forEach(function(item){
        all_style_html.push(<option value={item.id}> {item.type_name} </option>);
      });


     // console.log(this.props);

      return(
        <div>
        <Button variant="outline-dark" size="sm" onClick={this.handleShow}>
         {name} 
        </Button>
  
        <Modal  className="aloha_modal"  size="lg"  show={is_Open} onHide={this.handleClose}>
          <form onSubmit={this.handleSubmit}>
            
            <Modal.Header closeButton>
              <Modal.Title>編輯資料</Modal.Title>
            </Modal.Header>

            <Modal.Body id="prodcut_modal">  

          <Container >
                    <Row>
                      <Col sm={6}>


                      <label className="box_input">
                        <div className="nf7">鑽石形狀:</div>
                        <select  onChange={this.handleChange.bind(this, "dm_type")}  value={this.state.fields["dm_type"]} >
                                {all_style_html}               
                        </select>                         
                        <div className={errors.hasOwnProperty('gia_sn')? 'dm_type shx':'error_text'} >{this.state.errors["dm_type"]}</div>
                      </label>   


                        <label className="box_input">
                          <div className="nf7">GIA編號:</div>
                          <input type="text" onChange={this.handleChange.bind(this, "gia_sn")} value={this.state.fields["gia_sn"]} />
                          <div className={errors.hasOwnProperty('gia_sn')? 'error_text shx':'error_text'} >{this.state.errors["gia_sn"]}</div>
                        </label>

                        <label className="box_input">
                            <div className="nf7">克拉: </div>
                            <input type="text" onChange={this.handleChange.bind(this, "carat")} value={this.state.fields["carat"]} />
                            <div className={errors.hasOwnProperty('carat')? 'error_text shx':'error_text'} >{this.state.errors["carat"]}</div>                    
                        </label>



      

                        <label>
                          <div className="nf7">淨度:</div> 
                          <input type="text" onChange={this.handleChange.bind(this, "clean")} value={this.state.fields["clean"]} />
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["clean"]}</span>
                        </label> 


                        <label className="box_input">
                            <div className="nf7">顏色: </div>
                            <input type="text" onChange={this.handleChange.bind(this, "color")} value={this.state.fields["color"]} />
                            <span className="error_text" style={{color: "red"}}>{this.state.errors["color"]}</span>
                        </label>                         

                        
                        <label>
                          <div className="nf7">深度: </div>
                          <input type="text" onChange={this.handleChange.bind(this, "depth")} value={this.state.fields["depth"]} />
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["depth"]}</span>
                        </label>                    



                        <label>
                          <div className="nf7">桌面:</div> <input type="text" onChange={this.handleChange.bind(this, "face")} value={this.state.fields["face"]} />
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["face"]}</span>
                        </label>   

                        <label>
                            <div className="nf7">拋光:</div> 
                            <input type="text" onChange={this.handleChange.bind(this, "alight")} value={this.state.fields["alight"]} />
                            <span className="error_text" style={{color: "red"}}>{this.state.errors["alight"]}</span>
                        </label>   


                        </Col>                                            
                      <Col sm={6}>
      
   



                        <label>
                            <div className="nf7">對稱:</div> 
                            <input type="text" onChange={this.handleChange.bind(this, "align")} value={this.state.fields["align"]} />
                            <span className="error_text" style={{color: "red"}}>{this.state.errors["align"]}</span>
                        </label>   
            


                        
                        <label>
                            <div className="nf7">螢光:</div> 
                            <input type="text" onChange={this.handleChange.bind(this, "blight")} value={this.state.fields["blight"]} />
                            <span className="error_text" style={{color: "red"}}>{this.state.errors["blight"]}</span>
                        </label>   
 


                        <label>
                          <div className="nf7">裸石報價:</div>  <input type="text" onChange={this.handleChange.bind(this, "price")} value={this.state.fields["price"]} />
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["price"]}</span>
                        </label> 

                        <label>
                          <div className="nf7">狀態:</div>  
                            <select  onChange={this.handleChange.bind(this, "is_buyable")}  value={this.state.fields["is_buyable"]} >
                              <option value="可訂購">可訂購</option>
                              <option value="需預購" >需預購</option>
                              <option value="不可訂購" >不可訂購</option>
                            </select>                         
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["is_buyable"]}</span>
                        </label>  
                        
                        <label>
                          <div className="nf7">GIA網址:</div>  <input type="text" onChange={this.handleChange.bind(this, "gia_link")} value={this.state.fields["gia_link"]} />
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["gia_link"]}</span>
                        </label>        

                        <label>
                          <div className="nf7">含稅價格:</div>  <input type="text" onChange={this.handleChange.bind(this, "sale_price")} value={this.state.fields["sale_price"]} />
                          <span className="error_text" style={{color: "red"}}>{this.state.errors["sale_price"]}</span>
                        </label>                                                                                                                 
                      </Col>

        

                    </Row>
                </Container >     

                                                                                                                           
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


export default hot(module)(ModelDiamondEdit3);