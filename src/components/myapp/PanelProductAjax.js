import React from "react";
import { hot } from "react-hot-loader";
import axios from 'axios';
import { 
        Button,
        Container,       
         Card,
         TextField,
         Dropdown
        } from 'react-bootstrap';


import  ModelProductCreate from './modal/ModelProductCreate';
import  ModelProductEdit from './modal/ModelProductEdit';        
import { get_all_product, del_product,get_product_type } from './rest/func_rest_product';        
import DataTable, { createTheme } from 'react-data-table-component';
import Switch from 'react-bootstrap-switch';

import CatDropDown from './header/CatDropDown';



const FilterComponent = ({ cur_name,filterText, onFilter, onClear ,onSearch, onRestCat }) => (
  <div className="product_sbox">
      <div>{(cur_name) ? <div className="left_box">{cur_name} <div className="exit"  onClick={onRestCat} >x</div></div> : '' }</div>
    <div className="right_box">
    <input id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
    <Button type="button"   onClick={onSearch}>搜尋</Button>
    <Button type="button" variant="secondary" onClick={onClear}>清除</Button>
    </div>
  </div>
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



class PanelProductAjax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        
          checked:[],
          ptype:[],
  
          filterText:'',
          toggledClearRows: false,
          loading:false,
          all_result:0,
          perPage:50,
          sort_column:'',
          sort_dir:'',
          cur_page:1,
          cur_cat:0,
          cur_name:''
        }
    }


    componentDidMount() {

      let me = this;

      const {perPage} = this.state;

      axios.post('/wp-json/cargo/v1/get_products_ajax', {
        post_per_page:perPage,
        page:1
      })
      .then(function (res) {
       
        me.setState({
          data:res.data.results,       
          all_result:res.data.count,
          filterText:''
        }); 

      })
      .catch(function (error) {
        console.log(error);
      });


    
      get_product_type(function(data){
          me.setState({
            ptype:data,            
          }); 
      });      
    }















    /*   綁定 Woo Product [begin]  */
    handleAction = (data) =>{          
      let me = this;
      axios.post('/wp-json/cargo/v1/bind_woo_prod_by_page', {
        checked:this.state.checked,
      })
      .then(function (res) {
        // console.log(res);

       // console.log("reload");

        /*
        get_all_product(function(data){
          me.setState({
            data:data,           
            checked:[],
            filterText:''
          }); 
        });
        */

         me.fetch_cur_page();

      });      
    }
  /*   綁定 Woo Product [end]  */






   fetch_cur_page = () =>{
    const {cur_page} = this.state;
    this.handlePageChange(cur_page);
   }
    

    
    fetch_all = () => {
      /*
      let me = this;
      get_all_product(function(resx){
        me.setState({          
          data:resx,         
        });
      });
      */
     
    }
    







    deleteData = () =>{
      let checked = [...this.state.checked];
      if(window.confirm('確定刪除')){
       //  console.log(checked );
        let me = this;
        del_product(checked,function(obj){         
 
            me.fetch_cur_page();
 
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







        getSubHeaderComponent = (cur_name) => {
          let me =this;
          return (
            <FilterComponent

              cur_name={cur_name}

              onFilter={(e) => {       
                  me.setState({                     
                    filterText: e.target.value 
                  });
              }}

              onSearch={
                this.onSearchHandler
              }

              onRestCat = { this.onRestCat }


              onClear={this.handleClear}
              filterText={this.state.filterText}
            />
          );
        };



        onRestCat = () => {
          this.setState({
            cur_cat:0,
            cur_name:'',
            cur_page:0
          });

          const {cur_page} = this.state;
          let me = this;
          setTimeout(function(){
            me.handlePageChange(cur_page);     
          },100);
                 
        }




        onSearchHandler = () =>{
          // console.log("search");

          let me = this;

          const {perPage,filterText} = this.state;
          axios.post('/wp-json/cargo/v1/sort_products_ajax', {
            perpage:perPage,
            page:1,
            filterText:filterText.trim()
          })
          .then(function (res) {

            console.log(res);
           
            me.setState({
              data:res.data.results,       
              all_result:res.data.count,            
            }); 
    
          })
          .catch(function (error) {
            console.log(error);
          });           
        }
        


        handleClear = () => {

          let me = this;
          console.log("clear");
          const {perPage} = this.state;
          axios.post('/wp-json/cargo/v1/get_products_ajax', {
            post_per_page:perPage,
            page:1
          })
          .then(function (res) {
           
            me.setState({
              data:res.data.results,       
              all_result:res.data.count,
              filterText:''
            }); 
    
          })
          .catch(function (error) {
            console.log(error);
          });          
        };





        /*   checkbox  */
        handleChange = (state) => {          
          this.setState({checked:state.selectedRows})
        };
        
        handleClearRows = () => {       
          this.setState({ toggledClearRows: !this.state.toggledClearRows})
        }
      


      handlePerRowsChange = (newPerPage, page) =>{
        let me = this;
        axios.post('/wp-json/cargo/v1/get_products_ajax', {
          post_per_page:newPerPage,
          page:page
        })
        .then(function (res) {
         
          me.setState({
            perPage:newPerPage,
            data:res.data.results,           
            all_result:res.data.count
          }); 
  
        })
        .catch(function (error) {
          console.log(error);
        });          
      }




      handlePageChange = (page) =>{
        const {perPage,sort_column,sort_dir,filterText,cur_cat} = this.state;

        this.setState({
          cur_page:page,
          loading:true,
        });

        if(cur_cat>0){
          let me = this; 
          setTimeout(function(){
            me.searchByCategory();
          },100);



        }else{


          let me = this;  

          axios.post('/wp-json/cargo/v1/sort_products_ajax', {
              perpage:perPage,
              page:page,
              column:sort_column.selector,
              dir:sort_dir,
              filterText:filterText,
              cur_page:page,              
            })
            .then(function (res) {
            
              me.setState({
                data:res.data.results,               
                all_result:res.data.count,
               loading:false,
                cur_page:page,               
              }); 
      
              me.handleClearRows();

            })
            .catch(function (error) {
              console.log(error);
            }); 

        }    
      }





      handleSort = (column, sortDirection) => {

        let me = this;

        // simulate server sort
        me.setState({loading:true});
        
        axios.post('/wp-json/cargo/v1/sort_products_ajax', {
          column:column.selector,
          dir:sortDirection,
          perpage:me.state.perPage,
          page:1
        })
        .then(function (res) {
         
          me.setState({
            data:res.data.results,           
            all_result:res.data.count,
            loading:false,
            sort_column:column,
            sort_dir:sortDirection
          }); 
  
        });
        

      };




      handleSwitch = (e,state,pid) =>{
       // console.log(state);
        let me = this;

        let data = [...me.state.data];
        data.forEach(function(itm){
          if(itm.woo_id==pid){
            itm.is_open =state;
          }
        });
        
        me.setState({
          data:data
        });


        axios.post('/wp-json/cargo/v1/open_hide_product', {
          xstate:state,
          pid:pid
        })
        .then(function (res){
          if(!res){
            /* 不成功要校正回歸 */
            let data = [...me.state.data];
            
            data.forEach(function(itm){
              if(itm.woo_id==pid){
                itm.is_open =state;
              }
            });
            
            me.setState({
              data:data
            });
          }
          
        });
      }







      /*  duplicateProduct  複製 */
      duplicateProduct = (pid) =>{

        if(!window.confirm('確定要複製')){
          return false;
        }

        let me  = this;

        axios.post('/wp-json/cargo/v1/product_clone', {        
          pid:pid
        }).then(function (res){
          // console.log(res.data)
           me.fetch_cur_page();
        })
      }




      dropDownHandler = (tid,tname) =>{
        console.log(tid);
        this.setState({
          cur_cat:tid,
          cur_name:tname,
          loading:true,
          page:1
        });    
        let me = this; 
        setTimeout(function(){
          me.searchByCategory();
        },100);
      }



      searchByCategory = () =>{

        let me = this;
        const {
                cur_cat,
                cur_page,              
                perPage
              } = this.state;

        axios.post('/wp-json/cargo/v1/get_products_by_cat', {          
          cur_page:cur_page,
          post_per_page:perPage,
          cat:cur_cat
        })
        .then(function (res){
        
          console.log(res);

          me.setState({
            data:res.data.results,           
            all_result:res.data.count,
            loading:false,
          }); 

        }); 
      }















    render() {

        const {data,checked,ptype,loading,all_result,perPage,cur_cat,cur_name} = this.state;
        // const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];

        console.log(data);
        
        let me = this;

        const columns = [

          {
            cell: (pid) => <ModelProductEdit name="編輯"  ptype={ptype}  pdata={pid}  fetch_all={me.fetch_cur_page}   />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '50px' 
          },


          {
            cell: (pid) => <Switch value={pid.is_open} onChange={(el,state) => me.handleSwitch(el, state,pid.woo_id)}  />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,    
            name: '狀態',
          },

          {
            cell: (pid) => <button size="sm"   onClick={() => this.duplicateProduct(pid)}    className="btn btn-outline-info btn-sm" >複製</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '50px' 
          },


          
          {
            name: '編號',
            selector: 'product_id',
            sortable: true,
            width: '100px',
          },

          {
            name: '',
            selector: 'product_img',
            sortable: true,   
            grow:3,   
            width: '70px',
            cell: (pid) => (pid.img)? <a href={pid.img}  title={pid.img}  target="_blank"  class="preview_img"  ></a> : <div class="preview_empty"></div> , 
          },

          {
            name: '名稱',
            selector: 'product_name',
            sortable: true,   
            grow:3,   
            width: '280px',
            cell: (pid) => (pid.woo_id > 0)? <a href={"/wp-admin/post.php?post="+pid.woo_id+"&action=edit"}  target="_blank"  >{pid.product_name}</a> : pid.product_name , 
          },



          {
            name: '英文名稱',
            selector: 'product_eng_name',
            sortable: true,     
            width: '250px',
            cell: (pid) => <div  className="product_eng_name"  title={pid.product_eng_name}>{pid.product_eng_name}</div> ,       
          },
          {
            name: '產品類別',
            selector: 'cat',
           // sortable: true,
            width: '250px',
            cell: (pid) => (pid.cat)? <span className="small_font">{pid.cat}</span> : '' ,
          },
          {
            name: '單位編號',
            selector: 'unit_sn',
            sortable: true,
            right: true,
          },
          {
            name: '計量編號',
            selector: 'unit_sn',
            sortable: true,            
          },
          {
            name: '計量編號',
            selector: 'unit_sn_cht',
            sortable: true,           
          },
          {
            name: 'CUFT',
            selector: 'cuft',           
          },
          {
            name: '包裝ㄧ',
            selector: 'out_pack',           
          },
          {
            name: '包裝二',
            selector: 'in_pack',           
          },
          {
            name: '淨重',
            selector: 'net_weight',           
          },
          {
            name: '總重',
            selector: 'gross_weight',           
          },
        ];


        return (
            <Container id="aloha_app" >

                <div className="small_nav">
                    <ModelProductCreate name="新增資料"   fetch_all={this.fetch_cur_page }  ptype={ptype}    />  
                    {( checked.length >0 )? <><Button onClick={this.deleteData} > 刪除  {this.state.checked.length} </Button>  </>:''}
                    &nbsp; {/* ( checked.length >0 )? <Button onClick={this.handleAction}>Binding Woo</Button> : '' */}

                     <CatDropDown  dropDownHandler={this.dropDownHandler}/>              
                </div>

                <Card>
                    <div className="card-body">

                    <DataTable
                        title="產品"
                        columns={columns}
                        data={data}
                       // pagination={true}   

                       onSort={this.handleSort}
                       sortServer

                        progressPending={loading}
                        pagination
                        paginationServer
                        paginationTotalRows={all_result}
                        subHeader
                        selectableRows={true}
                        selectableRowsVisibleOnly={true}
                        onSelectedRowsChange={this.handleChange}
                        clearSelectedRows={this.state.toggledClearRows}
                        subHeaderComponent={this.getSubHeaderComponent(cur_name)}  
                        paginationPerPage={perPage}
                        paginationRowsPerPageOptions={["30","50","100"]}      
                        onChangeRowsPerPage={this.handlePerRowsChange}
                        onChangePage={this.handlePageChange}        
                    />

                    </div> 
                    </Card>

                    <div className="small_nav">
                    <ModelProductCreate name="新增資料"   fetch_all={me.fetch_cur_page}  ptype={ptype} />  
                    {( checked.length >0 )? <><Button onClick={this.deleteData} > 刪除  {this.state.checked.length} </Button>  </>:''}
                    &nbsp; <Button onClick={this.handleAction}>Binding Woo</Button>
                </div>
            </Container>            
        )
    }
}

export default hot(module)(PanelProductAjax);