import React from "react";
import { hot } from "react-hot-loader";
import axios from 'axios';
import { 
        Button,
        Container,       
         Card,TextField
        } from 'react-bootstrap';


import  ModelDiamondCreate3 from './modal/ModelDiamondCreate3';
import  ModelDiamondEdit3 from './modal/ModelDiamondEdit3';
        
import  OrderPanel from './order/OrderPanel';
import { get_all_style } from './rest/func_rest_style';

import { get_all_fcolor } from  './rest/func_rest_fcolor';


/*  API */
import { 
    get_all_diamonds3,
   // get_all_product, 
    del_diamond3,
    // get_product_type 
    order_diamond3
} from './rest/func_rest_diamond3';        

import DataTable, { createTheme } from 'react-data-table-component';


const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <input id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
    <Button type="button" onClick={onClear}>X</Button>
  </>
);



createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });



class Diamond3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          ori:[],
          checked:[],
          ptype:[],
          is_reload:0,
          isLoading:0,
          filterText:'',
          toggledClearRows: false,
          leftMenu:0,
          allStyle:[],
          fcolor:[]
        }
    }


    componentDidMount() {

      let me = this;

      get_all_diamonds3(function(data){
        console.log('xx');
        console.log(data);

        me.setState({
          data:data,
          ori:data
        }); 
      });


      get_all_style(function(res){
        me.setState({ allStyle:res });
      });

      get_all_fcolor(function(res){
        me.setState({ fcolor:res });
      });
    }





   


    

    
    fetch_all = () => {
      let me = this;
      
      get_all_diamonds3(function(data){
    
        me.setState({
          data:data,
          ori:data
        }); 
      });
      
    }
    







    deleteData = () =>{
      let checked = [...this.state.checked];
      if(window.confirm('確定刪除')){
         console.log(checked );
        let me = this;
        del_diamond3(checked,function(obj){         
         
           get_all_diamonds3(function(resx){
            me.setState({
              data:resx,
              checked:[],
             toggledClearRows: true,
             filterText:''
            });
          });

        });
      }
    }



   /*  private function */
        removeByValue = (val, arr) =>{
          for( var i = 0; i < arr.length; i++){                                    
            if ( arr[i] == val) { 
                arr.splice(i, 1); 
                i--; 
            }
          }     
          return  arr;
        }







        getSubHeaderComponent = () => {
          let me =this;
          return (
            <FilterComponent

              onFilter={(e) => {
                let newFilterText = e.target.value;
                // console.log(newFilterText);                
                let ori_data = [...me.state.ori];
              //  console.log(ori_data);

             
                let filteredItems = ori_data.filter(
                    (item) => item.product_name && item.product_name.includes(newFilterText) | item.product_id.includes(newFilterText)                    
                  );
           
                
               // console.log(filteredItems);
                
                me.setState({ 
                  data:filteredItems,
                  filterText: newFilterText 
                });
              }}
              onClear={this.handleClear}
              filterText={this.state.filterText}
            />
          );
        };


        handleClear = () => {
            let ori = [...this.state.ori]; 
            this.setState({
              data:ori,
              filterText: ""
            });
        };


      handleChange = (state) => {
          
          this.setState({checked:state.selectedRows})
        };


        
      handleClearRows = () => {
       
          this.setState({ toggledClearRows: !this.state.toggledClearRows})
        }
      




            /*  Order */
    updateOrder = (data) =>{
      let me = this;

      var new_order = [];
      for(var oc in data){       
        new_order.push(
            {
                id : data[oc].id,
                idx : oc
            }
        )
     }

      me.setState({
        data:data
      });


      order_diamond3({'order':new_order},function(res){
        me.setState({
          data:res
        });
      });
    }







    render() {

        const {data,checked,ptype,leftMenu,allStyle,fcolor} = this.state;
        // const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
        // console.log(data);
        
        let me = this;

        const columns = [
            
          {
            cell: (pid) => (allStyle.length>0 && fcolor.length>0) ?<ModelDiamondEdit3 name="Edit"   fcolor={fcolor}  allStyle={allStyle}  ptype={ptype}  pdata={pid}  fetch_all={me.fetch_all}   />:'',
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '50px' 
          },
          
          
          {
            name: '形狀',
            selector: 'dm_type',
            sortable: true,
            cell: (pid) => <>{ (allStyle.length>0) ? allStyle.filter(function(it){ return it.id==pid.dm_type })[0].type_name : '' }</>
            
          },

          {
            name: 'GIA編號',
            selector: 'gia_sn',
            sortable: true,                            
          },
          {
            name: '克拉',
            selector: 'carat',
            sortable: true,            
          },

          {
            name: '淨度',
            selector: 'clean',
            sortable: true,
            right: true,
          },
          {
            name: '顏色',
            selector: 'color',
            sortable: true,                      
          },

          {
            name: '深度',
            selector: 'depth',
            sortable: true,            
          },
          {
            name: '桌面',
            selector: 'face',
            sortable: true,           
          },
          {
            name: '拋光',
            selector: 'alight',           
          },
          {
            name: '對稱',
            selector: 'align',           
          },
 
          {
            name: '螢光',
            selector: 'blight',           
          },

          {
            name: '裸石報價',
            selector: 'price',           
          },  

          {
            name: '狀態',
            selector: 'is_buyable',           
          },  
                    
          {
            name: 'GIA 網址',
            selector: 'gia_link',  
            width: '250px',         
          }, 
          {
            name: '含稅價格',
            selector: 'sale_price',           
          },                     
        ];


        return (
            <Container id="aloha_app" >

                <div className="small_nav">
                    {(allStyle.length>0 && fcolor.length>0) ? <ModelDiamondCreate3  fcolor={fcolor}  allStyle={allStyle} name="新增資料"   fetch_all={this.fetch_all }  ptype={ptype}   fetch_all={this.fetch_all} />:''  }

                    <button   class="btn btn-outline-dark mr10" onClick={()=>this.setState({'leftMenu': !this.state.leftMenu}) }>排序</button>

                    {( checked.length >0 )? <><Button onClick={this.deleteData} > 刪除  {this.state.checked.length} </Button>  </>:''}
                    &nbsp; 
                </div>


                <div className={(leftMenu)? "left_nav_pox open" : "left_nav_pox"} >
                  <a href="#" className="cancel"  onClick={()=>this.setState({'leftMenu': !this.state.leftMenu}) } >x</a>
                  <OrderPanel  pdata={data}  updateOrder={this.updateOrder }/>
                </div>


                <Card>
                    <div className="card-body">

                    <DataTable
                        title="彩鑽"
                        columns={columns}
                        data={data}
                        pagination={true}   
                        subHeader
                        selectableRows={true}
                        selectableRowsVisibleOnly={true}
                        onSelectedRowsChange={this.handleChange}
                        clearSelectedRows={this.state.toggledClearRows}
                        subHeaderComponent={this.getSubHeaderComponent()}  
                        paginationPerPage="100"
                        paginationRowsPerPageOptions={["30","50","100"]}              
                    />

                    </div> 
                    </Card>

                    <div className="small_nav">
                    {(allStyle.length>0 && fcolor.length>0) ? <ModelDiamondCreate3  fcolor={fcolor}  allStyle={allStyle} name="新增資料"   fetch_all={this.fetch_all }  ptype={ptype}   fetch_all={this.fetch_all} />:''  }
                    {( checked.length >0 )? <><Button onClick={this.deleteData} > 刪除  {this.state.checked.length} </Button>  </>:''}
                    
                </div>
            </Container>            
        )
    }
}

export default hot(module)(Diamond3);