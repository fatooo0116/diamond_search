
import axios from 'axios';

function get_all_style(callback){    
    axios.post('/wp-json/cargo/v1/get_style', {
        page: 1,
        post_per_page: 99900
      })
      .then(function (res) {
        //  console.log(res);
        return callback(res.data);       
      })
      .catch(function (error) {
        console.log(error);
      });
};


function del_style(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_style', {
      checked: checked,      
    })
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
};


function create_style(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_style', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};

function edit_style(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_style', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  

export { 
        get_all_style,
        del_style,
        create_style,
        edit_style
      }