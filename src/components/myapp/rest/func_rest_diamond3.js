/*  客戶地址  */
import axios from 'axios';




function get_all_diamonds3(callback){    
  axios.post('/wp-json/cargo/v1/get_diamonds3', {
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



function del_diamond3(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_diamond3', {
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



function create_diamond3(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_diamond3', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });    
};



function edit_diamond3(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_diamond3', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  





function order_diamond3(obj,callback){   
  
  axios.post('/wp-json/cargo/v1/order_diamond3', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};




export { 
       
          get_all_diamonds3,
          del_diamond3,
          create_diamond3,
          edit_diamond3,     
          order_diamond3     
        }
