import React from "react";
import { hot } from "react-hot-loader";

 import "./App.scss";
 

// import PanelProduct from "./myapp/PanelProduct";
// import PanelCustomer from "./myapp/PanelCustomer";
// import PanelStaff from "./myapp/PanelStaff";
// import PanelDep from './myapp/PanelDep';


// import PanelProductFix from './myapp/PanelProductFix';
// import PanelCustomerAddr from './myapp/PanelCustomerAddr';
// import PanelCustomerType from './myapp/PanelCustomerType';

// import PanelSetCategory  from './myapp/PanelSetCategory';

// import PanelProductAjax from "./myapp/PanelProductAjax";

// import PanelMutiUploadImage from "./myapp/PanelMutiUploadImage";



import Diamond1 from './myapp/Diamond1';
import PanelCarat  from './myapp/PanelCarat';
import PanelCcolor  from './myapp/PanelCcolor';
import PanelClean  from './myapp/PanelClean';
import PanelStyle  from './myapp/PanelStyle';
import PanelFcolor  from './myapp/PanelFcolor';



import { 
   Navbar,
   Nav,
   Form,
   Button,
   NavDropdown,
   FormControl  
  } from 'react-bootstrap';


  



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table:1,
      count: 6,
      postTypes: {},
      postResults: {},
      pages: {},
      results: "",
      blogname: "",
      initialRender: false
    };
    this.handleBlognameChange = this.handleBlognameChange.bind(this);
  }

  handleBlognameChange(event) {
    this.setState({
      blogname: event.target.value
    });
  }

  render() {

    const {table} = this.state;

    return (
      <div>

          <Navbar  id="global_nav"   expand="lg">
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
               
              <Nav.Link  className={(table==1)? 'curx':''} onClick={()=>{ this.setState({table:1}); }}>圓形</Nav.Link>
              <Nav.Link  className={(table==2)? 'curx':''} onClick={()=>{ this.setState({table:2}); }}>花式</Nav.Link>
              <Nav.Link  className={(table==3)? 'curx':''} onClick={()=>{ this.setState({table:3}); }}>彩鑽</Nav.Link>                


                <NavDropdown className={(table>3)? 'curx':''} title="設定" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={()=>{ this.setState({table:4}); }}>克拉</NavDropdown.Item>     
                  <NavDropdown.Item onClick={()=>{ this.setState({table:5}); }}>圓形顏色</NavDropdown.Item>                 
                  <NavDropdown.Item onClick={()=>{ this.setState({table:6}); }}>淨度</NavDropdown.Item> 
                  <NavDropdown.Item onClick={()=>{ this.setState({table:7}); }}>車工</NavDropdown.Item>      
                  <NavDropdown.Item onClick={()=>{ this.setState({table:8}); }}>彩鑽顏色</NavDropdown.Item>  

                                
                </NavDropdown>

               

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {(table==1) ? <Diamond1   /> : ''}
          {(table==2) ? <Diamond1   /> : ''}
          {(table==3) ? <Diamond1   /> : ''}
         
          {(table==4) ? <PanelCarat   /> : ''}
          {(table==5) ? <PanelCcolor   /> : ''}
          {(table==6) ? <PanelClean   /> : ''}
          {(table==7) ? <PanelStyle  /> : ''}
          {(table==8) ? <PanelFcolor  /> : ''}

    
         
       
       
      </div>
    );
  }
}

export default hot(module)(App);
