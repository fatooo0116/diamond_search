
import axios from 'axios';

function get_all_fcolor(callback){    
    axios.post('/wp-json/cargo/v1/get_fcolor', {
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


function del_fcolor(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_fcolor', {
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


function create_fcolor(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_fcolor', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};

function edit_fcolor(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_fcolor', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};


function order_fcolor(obj,callback){   
  // console.log(obj);
  
  axios.post('/wp-json/cargo/v1/order_fcolor', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  

export { 
        get_all_fcolor,
        del_fcolor,
        create_fcolor,
        edit_fcolor,
        order_fcolor
}