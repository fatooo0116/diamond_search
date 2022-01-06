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
    oid int(9) NOT NULL,
    
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );


  $table_name = $wpdb->prefix . 'diamond2';
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
    oid int(9) NOT NULL,
    
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );



  $table_name = $wpdb->prefix . 'diamond3';
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
    oid int(9) NOT NULL,
    
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

  /*
  $table_name = $wpdb->prefix . 'dmstyle';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,  
    img_url  varchar(150) NOT NULL,  
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );
  */


  $table_name = $wpdb->prefix . 'dmstyle2';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,  
    img_url  varchar(150) NOT NULL,  
    img_url2  varchar(150) NOT NULL,  
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );

  $table_name = $wpdb->prefix . 'dmstyle';
  $wpdb->query( "DROP TABLE IF EXISTS ".$table_name );



  $table_name = $wpdb->prefix . 'dmfcolor';
  $sql = "CREATE TABLE $table_name (
    id int(9) NOT NULL AUTO_INCREMENT,   
    img_url  varchar(150) NOT NULL,   
    type_name  varchar(150) NOT NULL,
    oid int(9) NOT NULL,
    UNIQUE KEY id (id)
  ) $charset_collate;";
  dbDelta( $sql );



}
