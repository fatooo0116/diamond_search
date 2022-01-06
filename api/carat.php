<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'cargo/v1', '/get_carat', array(
      'methods' => 'POST',
      'callback' => 'get_carat_handler',
    ) );
  });
  function get_carat_handler($data){
    
    $page = (isset($data['page'])) ? $data['page'] : 0; 
    $post_per_page = (isset($data['post_per_page'])) ? $data['post_per_page'] : 0; 
  
    global $wpdb;
    $table_name =  $wpdb->prefix . 'carat';;
  
    
    // $sql = "SELECT * FROM $table_name order by type_name*1 ASC" ;
    $sql = "SELECT * FROM $table_name order by oid" ;
    // $sql .= ' order by product_id ASC';
    $results = $wpdb->get_results($sql);
    if(!empty($results)){  
        return $results;
      // return  $page.' '.$post_per_page ;
       // return $sql;
    }else{
      return 0;
    }
   
  }




/*  ===========   DEL  ===========  */
add_action( 'rest_api_init', function () {
    register_rest_route( 'cargo/v1', '/del_carat', array(
      'methods' => 'POST',
      'callback' => 'del_carat_handler',
    ) );
  });
  function del_carat_handler($data){
    
    $pid = (isset($data['checked'])) ? $data['checked'] : 0; 
  
    global $wpdb;
    $table_name =  $wpdb->prefix . 'carat';;
    

    foreach($pid as $in){
        $result  = $wpdb->delete( $table_name, array( 'id' => $in['id']) );
    }


    if($result){        
      return $result;  
        
    }else{
        return 0;
    }
  }





  /*  ===========   Create  ===========  */
 add_action( 'rest_api_init', function () {
    register_rest_route( 'cargo/v1', '/create_carat', array(
      'methods' => 'POST',
      'callback' => 'create_carat_handler',
    ) );
  });


  function create_carat_handler($data){

    global $wpdb;
    $table_name =  $wpdb->prefix . 'carat';;

  //  $dep_id = (isset($data['dep_id'])) ? $data['dep_id'] : 0; 
  //  $dep_name = (isset($data['dep_name'])) ? $data['dep_name'] : 0;
  //  $dep_eng_name = (isset($data['dep_eng_name'])) ? $data['dep_eng_name'] : 0;
  //  $dep_other = (isset($data['dep_other'])) ? $data['dep_other'] : 0;
  
    // print_r($dep_id );

    
    $result = $wpdb->insert($table_name , array(     
        // 'dep_id' => (isset($data['dep_id'])) ? $data['dep_id'] : 0,
        'type_name' => (isset($data['type_name'])) ? $data['type_name'] : ''      
    ));


    $last_id = $wpdb->insert_id;
    $result = $wpdb->update( $table_name, array('oid'=>$last_id), array('id' => $last_id) );


    return  $result;
  }











    /*  ===========   Edit  Get ===========  */

    add_action( 'rest_api_init', function () {
        register_rest_route( 'cargo/v1', '/get_carat_by', array(
          'methods' => 'POST',
          'callback' => 'get_carat_by_handler',
        ) );
      });
    
    
      function get_carat_by_handler($data){
         
          $pid = (isset($data['pid'])) ? $data['pid'] : 0; 
         
        
          global $wpdb;
          $table_name =  $wpdb->prefix . 'carat';;
        
          
          $sql = "SELECT * FROM $table_name where id=".$pid;
          // $sql .= ' order by product_id ASC';
          $results = $wpdb->get_results($sql);
          if(!empty($results)){  
              return $results;
            // return  $page.' '.$post_per_page ;
             // return $sql;
          }else{
            return 0;
          }

      }


    /*  ===========   Edit  ===========  */
    add_action( 'rest_api_init', function () {
        register_rest_route( 'cargo/v1', '/edit_carat', array(
        'methods' => 'POST',
        'callback' => 'edit_carat_handler',
        ) );
    });


    function edit_carat_handler($data){

        // print_r($data);
        
        $obj = array(
        // 'dep_id' => (isset($data['fields']['dep_id'])) ? $data['fields']['dep_id'] : 0,
        'type_name' => (isset($data['fields']['type_name'])) ? $data['fields']['type_name'] : ''
        );

        global $wpdb;
        $table_name =  $wpdb->prefix . 'carat';;

        $result = $wpdb->update( $table_name, $obj, array('id' => $data['cur_id']) );
        return $data;
        
    }





    /*  ===========   Edit ORder  ===========  */
    add_action( 'rest_api_init', function () {
      register_rest_route( 'cargo/v1', '/order_carat', array(
      'methods' => 'POST',
      'callback' => 'order_carat_handler',
      ) );
  });


  function order_carat_handler($res){



      global $wpdb;
      $table_name =  $wpdb->prefix . 'carat';;
      
      
 
      foreach($res['order'] as $item){

        $obj = array(
          // 'dep_id' => (isset($data['fields']['dep_id'])) ? $data['fields']['dep_id'] : 0,
          'oid' => (isset($item['idx'])) ? $item['idx'] : 0
        );
        $result = $wpdb->update( $table_name, $obj, array('id' => $item['id']) );
      }
      

      $sql = "SELECT * FROM $table_name order by oid" ;
      // $sql .= ' order by product_id ASC';
      $results = $wpdb->get_results($sql);
      if(!empty($results)){  
          return $results;
        // return  $page.' '.$post_per_page ;
         // return $sql;
      }else{
        return 0;
      }

      
    
      // $result = $wpdb->update( $table_name, $obj, array('id' => $data['cur_id']) );
      return $results;
      
  }