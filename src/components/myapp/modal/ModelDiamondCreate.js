import React from "react";
import { hot } from "react-hot-loader";

import { 
         Button,
         Modal,
         Col,
         Container,
         Row
        } from 'react-bootstrap';

import {
        create_diamond,
       
         } from '../rest/func_rest_diamond';      



// import ProductTypeCheckBox from './tpl/ProductTypeCheckBox';
    

class ModelDiamondCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          is_Open:false,
          fields: {},
          errors: {},                
        }
    }
    

    componentDidMount(){
      let me = this;


      
    }




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

      
      if(!fields["gia_sn"]){
        formIsValid = false;
        errors["gia_sn"] = "此為必填";
     }

     if(!fields["carat"]){
        formIsValid = false;
        errors["carat"] = "此為必填";
     }

    if(!fields["color"]){
      formIsValid = false;
      errors["color"] = "此為必填";
    }

    if(!fields["clean"]){
      formIsValid = false;
      errors["clean"] = "此為必填";
    }    

     /*
     if(!fields["product_name"]){
      formIsValid = false;
       errors["product_name"] = "此為必填";
    }
    */
    

     this.setState({errors: errors});
     return formIsValid;
    }





    handleSubmit = (e) =>{
      e.preventDefault();

      let me = this;

      if(this.handleValidation()){
          // console.log("create ...");
          let {fields} = this.state;

        
         create_diamond(
           {
             fields:fields,            
           },function(data){
            me.setState({
              is_Open:false,
              fields: {},             
            });
            me.props.fetch_all();
          });
                    

      }else{
          alert("請完成表單")
      }
    }


    



    handleChange(field, e){         
            // let fields = this.state.fields;

            const {errors,fields } = this.state;

            fields[field] = e.target.value;   

            let new_errors = []; 
            if(errors.hasOwnProperty(field) & e.target.value){
              new_errors  = errors.filter(function(item){
                return item.field!=field;
              })
            }
            
            this.setState({
              fields:fields,
              errors:new_errors
            });
        }





 
  



    render() {

      const {is_Open, errors } = this.state;
      const { name,
              carat,
              color,
              clean
                } = this.props;

      // console.log(errors);

      let all_carat_html=[];
      all_carat_html.push(<option value=""> 請選擇 </option>);
      carat.forEach(function(item){
        let unit = "分";
        let dmv = item.type_name;

        if(item.type_name>0.9){ 
          unit="克拉"; 
          dmv = item.type_name;
        }else{
          dmv = item.type_name *100;
        }

        all_carat_html.push(<option value={item.id}> {dmv}{unit} </option>);
      });

      let all_color_html=[];
      all_color_html.push(<option value=""> 請選擇 </option>);
      color.forEach(function(item){
        all_color_html.push(<option value={item.id}> {item.type_name} </option>);
      });


      let all_clean_html=[];
      all_clean_html.push(<option value=""> 請選擇 </option>);
      clean.forEach(function(item){
        all_clean_html.push(<option value={item.id}> {item.type_name} </option>);
      });

    

      return(
        <div>
        <Button variant="outline-dark" onClick={this.handleShow}>
         {name}
        </Button>
  
        <Modal className="aloha_modal"  size="lg"  show={is_Open} onHide={this.handleClose}>

        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>新增鑽石 </Modal.Title>
          </Modal.Header>

          <Modal.Body id="prodcut_modal">  


          <Container >
              <Row>
                <Col sm={6}>

                  <label className="box_input">
                    <div className="nf7">GIA編號:</div>
                    <input type="text" onChange={this.handleChange.bind(this, "gia_sn")} value={this.state.fields["gia_sn"]} />
                    <div className={errors.hasOwnProperty('gia_sn')? ' shx':'error_text'} >{this.state.errors["gia_sn"]}</div>
                  </label>


                  <label>
                    <div className="nf7">克拉: </div>
                    <input type="text" onChange={this.handleChange.bind(this, "carat")} value={this.state.fields["carat"]} />
                    <span className="shx" >{this.state.errors["carat"]}</span>
                  </label>    


                  {/* 下拉選單曲 */}      

                  <label className="box_input">
                    <div className="nf7">顏色:</div>
                    <select  onChange={this.handleChange.bind(this, "color")}  value={this.state.fields["color"]} >
                            {all_color_html}               
                    </select>                         
                    <div className={errors.hasOwnProperty('color')? 'color shx':'error_text'} >{this.state.errors["color"]}</div>
                  </label>

                  
                  <label className="box_input">
                    <div className="nf7">淨度:</div>
                    <select  onChange={this.handleChange.bind(this, "clean")}  value={this.state.fields["clean"]} >
                            {all_clean_html}               
                    </select>                         
                    <div className={errors.hasOwnProperty('clean')? 'clean shx':'error_text'} >{this.state.errors["clean"]}</div>
                  </label>                  

          
                   {/* 下拉選單曲 end */}   

                  
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

                  <label>
                      <div className="nf7">對稱:</div> 
                      <input type="text" onChange={this.handleChange.bind(this, "align")} value={this.state.fields["align"]} />
                      <span className="error_text" style={{color: "red"}}>{this.state.errors["align"]}</span>
                  </label>   
       
                  </Col>                                            
                <Col sm={6}>
 
                  <label>
                    <div className="nf7">車工:</div> 
                    <input type="text" onChange={this.handleChange.bind(this, "turner")} value={this.state.fields["turner"]} />
                    <span className="error_text" style={{color: "red"}}>{this.state.errors["turner"]}</span>
                  </label>    
                  
                  <label>
                      <div className="nf7">螢光:</div> 
                      <input type="text" onChange={this.handleChange.bind(this, "blight")} value={this.state.fields["blight"]} />
                      <span className="error_text" style={{color: "red"}}>{this.state.errors["blight"]}</span>
                  </label>   

                  <label>
                    <div className="nf7">八星八劍:</div>  <input type="text" onChange={this.handleChange.bind(this, "star8")} value={this.state.fields["star8"]} />
                    <span className="error_text" style={{color: "red"}}>{this.state.errors["star8"]}</span>
                  </label>   


                  <label>
                    <div className="nf7">裸石報價:</div>  <input type="text" onChange={this.handleChange.bind(this, "price")} value={this.state.fields["price"]} />
                    <span className="error_text" style={{color: "red"}}>{this.state.errors["price"]}</span>
                  </label> 

                  <label>
                          <div className="nf7">狀態:</div>  
                            <select  onChange={this.handleChange.bind(this, "is_buyable")}  value={this.state.fields["is_buyable"]} >
                              <option value=""> 請選擇 </option>
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


export default hot(module)(ModelDiamondCreate);