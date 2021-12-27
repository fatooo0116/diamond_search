<?php
function product_meta_db() {
  global $wpdb;
  $charset_collate = $wpdb->get_charset_collate();
  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );


  


  /*
  $table_name = $wpdb->prefix . 'cprice';
  $sql = "CREATE TABLE $table_name (
    id int(12) NOT NULL AUTO_INCREMENT, 
    product_id  varchar(50) NOT NULL,
    price  varchar(150) NOT NULL,
    customer_id  varchar(50) NOT NULL,    
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );
    */




  $table_name = $wpdb->prefix . 'diamond';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT, 
    dm_type  varchar(20) NOT NULL,
    gia_sn varchar(30) NOT NULL,
    carat  varchar(30) NOT NULL,
    clean  varchar(140) NOT NULL,
    color varchar(30) NOT NULL,
    depth varchar(30) NOT NULL,
    face varchar(30) NOT NULL,
    alight varchar(30) NOT NULL, /*  拋光 */
    align varchar(30) NOT NULL,
    turner varchar(30) NOT NULL, /* 車工 */
    blight varchar(70) NOT NULL,  /*  螢光 */
    price varchar(120) NOT NULL,
    star8 varchar(30) NOT NULL, /* 8星8箭 */
    is_buyable varchar(120) NOT NULL,

    style varchar(30) NOT NULL,  /* 車工 花式才有 */
    mcolor varchar(10) NOT NULL, /*  彩鑽 顏色  */

    gia_link varchar(150) NOT NULL,
    sale_price varchar(120) NOT NULL,
 
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );



  $table_name = $wpdb->prefix . 'carat';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,     
    type_name  varchar(150) NOT NULL,   
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );





$table_name = $wpdb->prefix . 'dmcolor';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,     
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );


  $table_name = $wpdb->prefix . 'dmclean';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,     
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );


  $table_name = $wpdb->prefix . 'dmstyle';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,  
    img_url  varchar(150) NOT NULL,  
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );


  $table_name = $wpdb->prefix . 'dmfcolor';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,   
    img_url  varchar(150) NOT NULL,   
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );


/*
  $table_name = $wpdb->prefix . 'product_type';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT, 
    type_id  varchar(15) NOT NULL,
    type_name  varchar(150) NOT NULL,
    type_eng_name  varchar(150) NOT NULL,
    in_account  varchar(150) NOT NULL,
    stock_account  varchar(150) NOT NULL,
    out_account  varchar(150) NOT NULL,    
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );
*/








/*
  $table_name = $wpdb->prefix . 'customer_info';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT, 
    customer_id  varchar(50) NOT NULL,
    account_id  varchar(25) NOT NULL,
    cname varchar(180) NOT NULL,
    customer_category_id  varchar(15) NOT NULL,
    addr_id  varchar(50) NOT NULL,
    staff_id  varchar(25) NOT NULL,
    dollar_mark varchar(25) NOT NULL,
    is_temp varchar(5) NOT NULL, 
    is_global varchar(5) NOT NULL,
    simple_name varchar(100) NOT NULL,
    sn varchar(40) NOT NULL,  
    boss varchar(40) NOT NULL, 
    capital varchar(40) NOT NULL, 
    contact varchar(40) NOT NULL, 
    contact_job varchar(40) NOT NULL, 
    contact_tel1 varchar(70) NOT NULL,
    contact_tel2 varchar(70) NOT NULL,
    contact_tel3 varchar(70) NOT NULL,
    contact_mobile varchar(70) NOT NULL,
    contact_tax varchar(70) NOT NULL,
    contact_email varchar(120) NOT NULL,
    invoice_cht varchar(120) NOT NULL,
    invoice_eng_long varchar(170) NOT NULL,
    invoice_eng_short varchar(120) NOT NULL,
    trade_mark varchar(200) NOT NULL,
    woo_id int(11) NOT NULL,  
    tax int(10) NOT NULL,  
    UNIQUE KEY id (id)
  ) $charset_collate;";

  
  dbDelta( $sql );
*/




/*

  $table_name = $wpdb->prefix . 'comp_dep';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT, 
    dep_id  varchar(50) NOT NULL,
    dep_name  varchar(200) NOT NULL,
    dep_eng_name  varchar(200) NOT NULL,
    other  varchar(200) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );
*/



}
