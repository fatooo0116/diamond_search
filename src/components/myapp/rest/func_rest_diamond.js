/*  客戶地址  */
import axios from 'axios';




function get_all_diamonds(callback){    
  axios.post('/wp-json/cargo/v1/get_diamonds', {
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



function del_diamond(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_diamond', {
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



function create_diamond(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_diamond', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });    
};



function edit_diamond(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_diamond', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  




function get_modal_data(callback){    
  axios.post('/wp-json/cargo/v1/get_modal_data',{ax:'1'})
    .then(function (res) {
      //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
};





function order_diamond(obj,callback){   
  // console.log(obj);
  
  axios.post('/wp-json/cargo/v1/order_diamond', obj)
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

        get_modal_data,
          get_all_diamonds,
          del_diamond,
          create_diamond,
          edit_diamond,     
          order_diamond     
        }
