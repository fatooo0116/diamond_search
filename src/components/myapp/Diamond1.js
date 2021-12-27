import React from "react";
import { hot } from "react-hot-loader";
import axios from 'axios';
import { 
        Button,
        Container,       
         Card,TextField
        } from 'react-bootstrap';


import  ModelDiamondCreate from './modal/ModelDiamondCreate';

 import  ModelDiamondEdit from './modal/ModelDiamondEdit';
        


/*  API */
import { 
    get_all_diamonds,
   // get_all_product, 
    del_diamond,
    // get_product_type 
} from './rest/func_rest_diamond';        

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



class Diamond1 extends React.Component {
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
          toggledClearRows: false
        }
    }


    componentDidMount() {

      let me = this;

      get_all_diamonds(function(data){
        console.log('xx');
        console.log(data);

        me.setState({
          data:data,
          ori:data
        }); 
      });


      /*
      get_all_product(function(data){
          me.setState({
            data:data,
            ori:data
          }); 
      });
      */


      /*
      get_product_type(function(data){
          me.setState({
            ptype:data,            
          }); 
      });      
      */
    }





   


    

    
    fetch_all = () => {
      let me = this;
      
      get_all_diamonds(function(data){
    
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
        del_diamond(checked,function(obj){         
         
           get_all_diamonds(function(resx){
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
      






    render() {

        const {data,checked,ptype} = this.state;
        // const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
        // console.log(data);
        
        let me = this;

        const columns = [
            
          {
            cell: (pid) => <ModelDiamondEdit name="Edit"  ptype={ptype}  pdata={pid}  fetch_all={me.fetch_all}   />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '50px' 
          },
          
          
          {
            name: '形狀',
            selector: 'dm_type',
            sortable: true,
            
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
            name: '顏色',
            selector: 'color',
            sortable: true,           
            cell: (pid) => <span className="small_font">D</span>  ,
          },
          {
            name: '淨度',
            selector: 'clean',
            sortable: true,
            right: true,
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
            name: '車工',
            selector: 'turner',           
          },
          {
            name: '螢光',
            selector: 'blight',           
          },
          {
            name: '八星八劍',
            selector: 'star8',           
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
                    <ModelDiamondCreate name="新增資料"   fetch_all={this.fetch_all }  ptype={ptype}   fetch_all={this.fetch_all} />  
                    {( checked.length >0 )? <><Button onClick={this.deleteData} > 刪除  {this.state.checked.length} </Button>  </>:''}
                    &nbsp; 
                </div>

                <Card>
                    <div className="card-body">

                    <DataTable
                        title="圓形"
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
                    <ModelDiamondCreate name="新增資料"   fetch_all={this.fetch_all }  ptype={ptype} />  
                    {( checked.length >0 )? <><Button onClick={this.deleteData} > 刪除  {this.state.checked.length} </Button>  </>:''}
                    
                </div>
            </Container>            
        )
    }
}

export default hot(module)(Diamond1);