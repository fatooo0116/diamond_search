/*  客戶地址  */
import axios from 'axios';




function get_all_diamonds2(callback){    
  axios.post('/wp-json/cargo/v1/get_diamonds2', {
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



function del_diamond2(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_diamond2', {
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



function create_diamond2(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_diamond2', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });    
};



function edit_diamond2(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_diamond2', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  





function order_diamond2(obj,callback){   
  // console.log(obj);
  
  axios.post('/wp-json/cargo/v1/order_diamond2', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};




export { 
        //  get_all_product,
       //   del_product,
       //   create_product,
       //   edit_product,
       //   upload_product_img,
       //   get_product_img_and_cat,
       //   get_product_type,

       
          get_all_diamonds2,
          del_diamond2,
          create_diamond2,
          edit_diamond2,     
          order_diamond2    
        }
