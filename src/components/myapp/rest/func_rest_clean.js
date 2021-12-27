import axios from 'axios';

function get_all_clean(callback){    
    axios.post('/wp-json/cargo/v1/get_clean', {
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


function del_clean(checked,callback){    
  axios.post('/wp-json/cargo/v1/del_clean', {
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


function create_clean(obj,callback){   

  axios.post('/wp-json/cargo/v1/create_clean', obj)
    .then(function (res) {
     //  console.log(res);
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};

function edit_clean(obj,callback){   
  console.log(obj);
  
  axios.post('/wp-json/cargo/v1/edit_clean', obj)
    .then(function (res) {
     
      return callback(res.data);       
    })
    .catch(function (error) {
      console.log(error);
    });
    
};
  

export { 
        get_all_clean,
        del_clean,
        create_clean,
        edit_clean
      }