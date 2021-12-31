
import axios from 'axios';

function get_all_carat(callback){    
    axios.post('/wp-json/cargo/v1/get_carat', {
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


function del_carat(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_carat', {
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


function create_carat(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_carat', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};

function edit_carat(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_carat', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  


function order_carat(obj,callback){   
  // console.log(obj);
  
  axios.post('/wp-json/cargo/v1/order_carat', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};



export { 
        get_all_carat,
        del_carat,
        create_carat,
        edit_carat,
        order_carat
      }