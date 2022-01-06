<?php

add_shortcode( 'diamond_search1', 'wpdocs_footag1_func' );
function wpdocs_footag1_func( $atts ) {

    ob_start();
    wp_enqueue_style( 'script-fe-css', plugins_url( './css/style.css', __FILE__ ),array(),rand(0,9999) );
    wp_enqueue_script( 'script-fe', plugins_url( './js/script.js', __FILE__ ), array('jquery'), rand(0,9999), true );
    ?>

   
    

        <div class="diamond_search"  id="table1" >
            <div class="filter1">
                <div class="alo_link">
                    <h3>形狀</h3>
                    <ul>
                        <li class="active">
                            <a href="#" class="t1"></a>
                            <span>形狀</span>
                        </li>
                        <li>
                            <a href="#" class="t2"></a>
                            <span>花式</span>
                        </li>
                        <li>
                            <a href="#" class="t3"></a>
                            <span>彩鑽</span>
                        </li>
                    </ul>
                </div> 
                
                <div class="carat">
                    <h3 >克拉</h3>
                    <ul>

                    <?php 
                              global $wpdb;
                            $table_name =  $wpdb->prefix . 'carat';;
                            
                            $sql = "SELECT * FROM $table_name order by oid asc";
                            $results = $wpdb->get_results($sql);
          
                            foreach($results as $item){ 
                        
                                ?>
                                <li><a href="" target="<?php echo $item->id; ?>"  ><?php echo $item->type_name; ?></a></li>
                        <?php }?>  

         
                        
                    </ul>
                </div>       
                
                <div class="price">
                    <h3>價格(NT$)</h3>
                    <ul>
                        <li><input type="text" id="price1" ></li>
                        <li><div class="hypen">~</div></li>
                        <li><input type="text" id="price2" ></li>                       
                    </ul>
                </div>                  
            </div>


            <div class="filter2">
                <div class="color">
                    <h3>顏色</h3>
                    <ul>
                    <?php 
                           
                            $table_name =  $wpdb->prefix . 'dmcolor';;
                            
                            $sql = "SELECT * FROM $table_name order by oid asc";
                            $results = $wpdb->get_results($sql);
          
                            foreach($results as $item){                            
                                ?>
                                    <li><a href="" target="<?php echo $item->id; ?>"  ><?php echo $item->type_name; ?></a></li>
                            <?php }?>                        
  
                        
          
                    </ul>
                </div>  
                <div class="clean">
                    <h3>淨度</h3>
                    <ul>
                    <?php 
                            
                            $table_name =  $wpdb->prefix . 'dmclean';;                            
                            $sql = "SELECT * FROM $table_name order by oid asc";
                            $results = $wpdb->get_results($sql);
          
                            foreach($results as $item){ 
            
                                ?>
                                <li><a href="" target="<?php echo $item->id; ?>"  ><?php echo $item->type_name; ?></a></li>
                             <?php }?>                          
                       
                
       
                    </ul>
                </div>  
                
                <div class="control">
                    <a href="#" class="search" >搜尋</a>
                    <a href="#" class="clear" >清除</a>
                </div>
            </div>

            <div class="table-head">
                <div class="t1">形狀</div>
                <div class="t2">GIA編號</div>
                <div class="t3">克拉</div>
                <div class="t4">顏色</div>
                <div class="t5">淨度</div>
                <div class="t6">深度</div>   
                <div class="t7">桌面</div>  
                <div class="t8">拋光</div>  
                <div class="t9">對稱</div>               
                <div class="t10">車工</div>  
                <div class="t11">螢光</div>  
                <div class="t12">八心八箭</div>  
                <div class="t13">裸石報價</div>  
                <div class="t14">狀態</div>  
            </div>
            <div class="table-list"></div>
            <div class="data-container" ></div>
        </div>

        <script>
            let data_num = [1, 2, 3, 4, 5, 6];
  
            
        </script>

    <?php
    $output = ob_get_contents();
    ob_end_clean();
    
    return $output;
}







add_shortcode( 'diamond_search2', 'wpdocs_footag2_func' );
function wpdocs_footag2_func( $atts ) {

    ob_start();
    wp_enqueue_style( 'script-fe-css', plugins_url( './css/style.css', __FILE__ ),array(),rand(0,9999) );
    wp_enqueue_script( 'script-fe', plugins_url( './js/script.js', __FILE__ ), array('jquery'), rand(0,9999), true );
    ?>

   
    


<div class="diamond_search"  id="table2" >
            <div class="filter1">
                <div class="alo_link">
                    <h3>形狀</h3>
                    <ul>
                        <li>
                            <a href="#" class="t1"></a>
                            <span>形狀</span>
                        </li>
                        <li class="active">
                            <a href="#" class="t2"></a>
                            <span>花式</span>
                        </li>
                        <li>
                            <a href="#" class="t3"></a>
                            <span>彩鑽</span>
                        </li>
                    </ul>
                </div> 
                
                <div class="carat">
                    <h3 >車工</h3>
                    <ul class="dm_style">
                    <?php 
                            global $wpdb;
                            $table_name =  $wpdb->prefix . 'dmstyle2';;
                            
                            $sql = "SELECT * FROM $table_name order by oid";
                            $results = $wpdb->get_results($sql);
          
                            foreach($results as $item){ 
                                if($item->img_url){
                                    $item->img_path = wp_get_attachment_image_src($item->img_url,'full');
                                  } 
                                  if($item->img_path !='圓鑽'){                                  
                                ?>
                                    <li><a href="" target="<?php echo $item->id; ?>" style="background:url(<?php echo $item->img_path[0]; ?>) no-repeat center center, linear-gradient(to bottom, #fafafa 50%,#e6e6e6 100%)" >
                                    </a><span><?php echo $item->type_name; ?></span></li>
                        <?php }}?>
                    </ul>
                </div>       
                
                <div class="price">
                    <h3>價格(NT$)</h3>
                    <ul>
                        <li><input type="text" id="price1" ></li>
                        <li><div class="hypen">~</div></li>
                        <li><input type="text" id="price2" ></li>                       
                    </ul>
                </div>                  
            </div>


            <div class="filter2 center">                
                
                <div class="control">
                    <a href="#" class="search" >搜尋</a>
                    <a href="#" class="clear" >清除</a>
                </div>
            </div>

            <div class="table-head">
                <div class="t1">形狀</div>
                <div class="t2">GIA編號</div>
                <div class="t3">克拉</div>
                <div class="t4">顏色</div>
                <div class="t5">淨度</div>
                <div class="t6">深度</div>   
                <div class="t7">桌面</div>  
                <div class="t8">拋光</div>  
                <div class="t9">對稱</div>                              
                <div class="t11">螢光</div>                 
                <div class="t13">裸石報價</div>  
                <div class="t14">狀態</div>  
            </div>
            <div class="table-list"></div>
            <div class="data-container" ></div>
        </div>

   


    <?php
    $output = ob_get_contents();
    ob_end_clean();
    
    return $output;
}






/*  彩鑽  */

add_shortcode( 'diamond_search3', 'wpdocs_footag3_func' );
function wpdocs_footag3_func( $atts ) {

    ob_start();
    wp_enqueue_style( 'script-fe-css', plugins_url( './css/style.css', __FILE__ ),array(),rand(0,9999) );
    wp_enqueue_script( 'script-fe', plugins_url( './js/script.js', __FILE__ ), array('jquery'), rand(0,9999), true );
    ?>

   
    

        <div class="diamond_search"  id="table3" >
            <div class="filter1">
                <div class="alo_link">
                    <h3>形狀</h3>
                    <ul>
                        <li>
                            <a href="#" class="t1"></a>
                            <span>形狀</span>
                        </li>
                        <li>
                            <a href="#" class="t2"></a>
                            <span>花式</span>
                        </li>
                        <li class="active">
                            <a href="#" class="t3"></a>
                            <span>彩鑽</span>
                        </li>
                    </ul>
                </div> 
                
                <div class="carat">
                    <h3 >顏色</h3>
                    <ul class="fcolor">
                        <?php 
                            global $wpdb;
                            $table_name =  $wpdb->prefix . 'dmfcolor';;
                            
                            $sql = "SELECT * FROM $table_name order by oid";
                            $results = $wpdb->get_results($sql);
          
                            foreach($results as $item){ 
                                if($item->img_url){
                                    $item->img_path = wp_get_attachment_image_src($item->img_url,'full');
                                  }                                   
                                ?>
                                    <li><a href="" target="<?php echo $item->id; ?>" style="background-image:url(<?php echo $item->img_path[0]; ?>)" ></a><span><?php echo $item->type_name ;?></span></li>
                        <?php }?>
         
                    </ul>
                </div>       
                
                <div class="price">
                    <h3>價格(NT$)</h3>
                    <ul>
                        <li><input type="text" id="price1" ></li>
                        <li><div class="hypen">~</div></li>
                        <li><input type="text" id="price2" ></li>                       
                    </ul>
                </div>                  
            </div>


            <div class="filter2 center">    
                
                <div class="control">
                    <a href="#" class="search" >搜尋</a>
                    <a href="#" class="clear" >清除</a>
                </div>
            </div>

            <div class="table-head">
                <div class="t1">形狀</div>
                <div class="t2">GIA編號</div>
                <div class="t3">克拉</div>
                <div class="t5">淨度</div>
                <div class="t4">顏色</div>
                
                <div class="t6">深度</div>   
                <div class="t7">桌面</div>  
                <div class="t8">拋光</div>  
                <div class="t9">對稱</div>                               
                <div class="t11">螢光</div>                
                <div class="t13">裸石報價</div>  
                <div class="t14">狀態</div>  
            </div>
            <div class="table-list"></div>
            <div class="data-container" ></div>
        </div>

 

    <?php
    $output = ob_get_contents();
    ob_end_clean();
    
    return $output;
}




?>



