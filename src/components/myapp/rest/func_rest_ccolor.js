
import axios from 'axios';

function get_all_ccolor(callback){    
    axios.post('/wp-json/cargo/v1/get_ccolor', {
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


function del_ccolor(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_ccolor', {
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


function create_ccolor(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_ccolor', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};

function edit_ccolor(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_ccolor', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  

export { 
        get_all_ccolor,
        del_ccolor,
        create_ccolor,
        edit_ccolor
      }