import React from "react";
import { hot } from "react-hot-loader";

import { 
        Container,       
         Card,        
         Button
        } from 'react-bootstrap';

import  ModelCaratCreate from './modal/ModelCaratCreate';
import  ModelCaratEdit from './modal/ModelCaratEdit';



import DataTable, { createTheme } from 'react-data-table-component';
import { get_all_carat, del_carat } from './rest/func_restcarat';



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


class PanelCarat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          checked:[],
          toggledClearRows: false
        }
    }

    
    componentDidMount() {
    
      let me = this;
      get_all_carat(function(resx){
        me.setState({data:resx});
      });
    }











    deleteData = () =>{
        let checked = [...this.state.checked];
        if(window.confirm('確定刪除')){
          console.log(checked );
          let me = this;
          del_carat(checked,function(obj){         
           
            get_all_carat(function(resx){
              me.setState({data:resx});
            });
          });
        }
    }



    fetch_all = () => {
      let me = this;
      get_all_carat(function(resx){
        me.setState({
          data:resx
        });
      });
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



    handleChange = (state) => {
      // You can use setState or dispatch with something like Redux so we can use the retrieved data
      this.setState({checked:state.selectedRows})
    };

    handleClearRows = () => {
      this.setState({ toggledClearRows: !this.state.toggledClearRows})
    }
  





    render() {

        const {data,checked} = this.state;
        // const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];

       
        const columns = [
          {
            cell: (pid) => <ModelCaratEdit name="Edit"  pdata={pid}   fetch_all={this.fetch_all}  />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
          {
            name: '編號',
            selector: 'id',
            sortable: true,
          },
          {
            name: '克拉數',
            selector: 'type_name',
            sortable: true,            
          },

        ];



        return (

            <Container id="aloha_app" >

                <div className="small_nav">
                    <ModelCaratCreate name="新增資料"    fetch_all={this.fetch_all} />  
                    {( checked.length >0 )? <Button onClick={this.deleteData} >DEL</Button>:''}
                </div>

                   <Card>                    
                      <div className="card-body">                   

                        <DataTable
                            title="克拉"
                            columns={columns}
                            data={data}
                            pagination={true}   
                            paginationPerPage="100"
                            paginationRowsPerPageOptions={["30","50","100"]}   
                            selectableRows={true}
                            selectableRowsVisibleOnly={true}
                            onSelectedRowsChange={this.handleChange}
                            clearSelectedRows={this.toggledClearRows}                        
                        />

                      </div> 
                    </Card>

                <div className="small_nav">
                    <ModelCaratCreate name="新增資料"    fetch_all={this.fetch_all} />  
                    {( checked.length >0 )? <Button onClick={this.deleteData} >DEL</Button>:''}
                </div>

            </Container>            
        )
    }
}

export default hot(module)(PanelCarat);