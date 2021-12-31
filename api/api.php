<?php
/* 取得  Get All Diamond  */


add_action( 'rest_api_init', function () {
  register_rest_route( 'cargo/v1', '/get_diamonds', array(
    'methods' => 'POST',
    'callback' => 'get_diamonds_handler',
  ) );
});
function get_diamonds_handler($data){
  
  $page = (isset($data['page'])) ? $data['page'] : 0; 
  $post_per_page = (isset($data['post_per_page'])) ? $data['post_per_page'] : 0; 

  global $wpdb;
  $table_name =  $wpdb->prefix . 'diamond';;

  $sql = "SELECT * FROM $table_name order by id ASC Limit ".($page-1)*$post_per_page.', '.$post_per_page;
  // $sql .= ' order by product_id ASC';
  $results = $wpdb->get_results($sql,ARRAY_A);



  if(!empty($results)){  
      return $results;
    // return  $page.' '.$post_per_page ;
     // return $sql;
  }else{
    return 0;
  }   
}









/*  ===========   Create  ===========  */
add_action( 'rest_api_init', function () {
  register_rest_route( 'cargo/v1', '/create_diamond', array(
    'methods' => 'POST',
    'callback' => 'create_diamond_handler',
  ) );
});


function create_diamond_handler($data){

  global $wpdb;
  $table_name =  $wpdb->prefix . 'diamond';;

  $in_data = array(
    'dm_type' => '2', 
    'gia_sn' => (isset($data['fields']['gia_sn'])) ? $data['fields']['gia_sn'] : '', 
    'carat' => (isset($data['fields']['carat'])) ? $data['fields']['carat'] : '', 
    'clean' => (isset($data['fields']['clean'])) ? $data['fields']['clean'] : '', 
    'color'=> (isset($data['fields']['color'])) ? $data['fields']['color'] : '', 
    'depth'=> (isset($data['fields']['depth'])) ? $data['fields']['depth'] : '', 
    'face'=> (isset($data['fields']['face'])) ? $data['fields']['face'] : '', 
    'alight'=> (isset($data['fields']['alight'])) ? $data['fields']['alight'] : '', 
    'align'=> (isset($data['fields']['align'])) ? $data['fields']['align'] : '', 
    'turner'=> (isset($data['fields']['turner'])) ? $data['fields']['turner'] : '', 
    'blight'=> (isset($data['fields']['blight'])) ? $data['fields']['blight'] : '', 
    'price'=> (isset($data['fields']['price'])) ? $data['fields']['price'] : '', 
    'star8'=> (isset($data['fields']['star8'])) ? $data['fields']['star8'] : '', 
   
    'is_buyable'=> (isset($data['fields']['is_buyable'])) ? $data['fields']['is_buyable'] : '', 
    'gia_link'=> (isset($data['fields']['gia_link'])) ? $data['fields']['gia_link'] : '', 
    'sale_price'=> (isset($data['fields']['sale_price'])) ? $data['fields']['sale_price'] : '',     
    // 'woo_id'=> (isset($data['woo_id'])) ? $data['woo_id'] : 0, 
  ); 

  
  $result = $wpdb->insert($table_name ,$in_data );


  if($result){
    return $new_id;
  }else{
    return 0;
  }  
}







/*  ===========   Edit  ===========  */
  add_action( 'rest_api_init', function () {
    register_rest_route( 'cargo/v1', '/edit_diamond', array(
      'methods' => 'POST',
      'callback' => 'edit_diamond_handler',
    ) );
  });
  
  

function edit_diamond_handler($data){

  global $wpdb;
  $obj = array(
    'dm_type' => '2', 
    'gia_sn' => (isset($data['fields']['gia_sn'])) ? $data['fields']['gia_sn'] : '', 
    'carat' => (isset($data['fields']['carat'])) ? $data['fields']['carat'] : '', 
    'clean' => (isset($data['fields']['clean'])) ? $data['fields']['clean'] : '', 
    'color'=> (isset($data['fields']['color'])) ? $data['fields']['color'] : '', 
    'depth'=> (isset($data['fields']['depth'])) ? $data['fields']['depth'] : '', 
    'face'=> (isset($data['fields']['face'])) ? $data['fields']['face'] : '', 
    'alight'=> (isset($data['fields']['alight'])) ? $data['fields']['alight'] : '', 
    'align'=> (isset($data['fields']['align'])) ? $data['fields']['align'] : '', 
    'turner'=> (isset($data['fields']['turner'])) ? $data['fields']['turner'] : '', 
    'blight'=> (isset($data['fields']['blight'])) ? $data['fields']['blight'] : '', 
    'price'=> (isset($data['fields']['price'])) ? $data['fields']['price'] : '', 
    'star8'=> (isset($data['fields']['star8'])) ? $data['fields']['star8'] : '', 
   
    'is_buyable'=> (isset($data['fields']['is_buyable'])) ? $data['fields']['is_buyable'] : '', 
    'gia_link'=> (isset($data['fields']['gia_link'])) ? $data['fields']['gia_link'] : '', 
    'sale_price'=> (isset($data['fields']['sale_price'])) ? $data['fields']['sale_price'] : '',   
  );
  $table_name =  $wpdb->prefix . 'diamond';;
  $result = $wpdb->update( $table_name, $obj, array('id' => $data['cur_id']) );

    

    return $result;
}

















/*  ===========   DEL  ===========  */
add_action( 'rest_api_init', function () {
  register_rest_route( 'cargo/v1', '/del_diamond', array(
    'methods' => 'POST',
    'callback' => 'del_diamond_handler',
  ) );
});
function del_diamond_handler($data){
  
  $pid = (isset($data['checked'])) ? $data['checked'] : 0; 

  global $wpdb;
  $table_name =  $wpdb->prefix . 'diamond';;
  
   // $sql = "SELECT woo_id FROM $table_name WHERE  id=".$in;
   // $result  = $wpdb->delete( $table_name, array( 'id' => $pid ) );

  foreach($pid as $in){
   
   // if($result){
      $wpdb->delete( $table_name, array( 'id' => $in['id'] ));
   // }
  }


}







    /*  ===========   Edit ORder  ===========  */
    add_action( 'rest_api_init', function () {
      register_rest_route( 'cargo/v1', '/order_diamond', array(
      'methods' => 'POST',
      'callback' => 'order_diamond_handler',
      ) );
  });


  function order_diamond_handler($res){


      global $wpdb;
      $table_name =  $wpdb->prefix . 'diamond';;

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




?>