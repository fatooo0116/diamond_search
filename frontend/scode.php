<?php

add_shortcode( 'diamond_search1', 'wpdocs_footag1_func' );
function wpdocs_footag1_func( $atts ) {

    ob_start();
    wp_enqueue_style( 'script-fe-css', plugins_url( './css/style.css', __FILE__ ),array(),rand(0,9999) );
    wp_enqueue_script( 'script-fe', plugins_url( './js/script.js', __FILE__ ), array('jquery'), rand(0,9999), true );
    ?>

   
    

        <div class="diamond_search" >
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
                        <li>
                            <a href="#" class="t3"></a>
                            <span>彩鑽</span>
                        </li>
                    </ul>
                </div> 
                
                <div class="carat">
                    <h3 >克拉</h3>
                    <ul>
                        <li><a href="">30分</a></li>
                        <li><a href="">40分</a></li>
                        <li><a href="">50分</a></li>
                        <li><a href="">60分</a></li>
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
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
          
                    </ul>
                </div>  
                <div class="clean">
                    <h3>淨度</h3>
                    <ul>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
       
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
                <div class="t6">桌面</div>  
                <div class="t6">拋光</div>  
                <div class="t6">對稱</div>               
                <div class="t6">車工</div>  
                <div class="t6">螢光</div>  
                <div class="t6">八心八箭</div>  
                <div class="t6">裸石報價</div>  
                <div class="t6">狀態</div>  
            </div>
            <div class="table-list"></div>
            <div class="data-container" ></div>
        </div>

        <script>
            let data_num = [1, 2, 3, 4, 5, 6, 7,1, 2, 3, 4, 5, 6, 7,111, 2, 3, 42, 51, 6, 7,111, 2, 3, 42, 51, 6, 7];
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

   
    

        <div class="diamond_search" >
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
                        <li>
                            <a href="#" class="t3"></a>
                            <span>彩鑽</span>
                        </li>
                    </ul>
                </div> 
                
                <div class="carat">
                    <h3 >克拉</h3>
                    <ul>
                        <li><a href="">30分</a></li>
                        <li><a href="">40分</a></li>
                        <li><a href="">50分</a></li>
                        <li><a href="">60分</a></li>
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
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
          
                    </ul>
                </div>  
                <div class="clean">
                    <h3>淨度</h3>
                    <ul>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
       
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
                <div class="t6">桌面</div>  
                <div class="t6">拋光</div>  
                <div class="t6">對稱</div>               
                <div class="t6">車工</div>  
                <div class="t6">螢光</div>  
                <div class="t6">八心八箭</div>  
                <div class="t6">裸石報價</div>  
                <div class="t6">狀態</div>  
            </div>
            <div class="table-list"></div>
            <div class="data-container" ></div>
        </div>

        <script>
            let data_num = [1, 2, 3, 4, 5, 6, 7,1, 2, 3, 4, 5, 6, 7,111, 2, 3, 42, 51, 6, 7,111, 2, 3, 42, 51, 6, 7];
        </script>

    <?php
    $output = ob_get_contents();
    ob_end_clean();
    
    return $output;
}








add_shortcode( 'diamond_search3', 'wpdocs_footag3_func' );
function wpdocs_footag3_func( $atts ) {

    ob_start();
    wp_enqueue_style( 'script-fe-css', plugins_url( './css/style.css', __FILE__ ),array(),rand(0,9999) );
    wp_enqueue_script( 'script-fe', plugins_url( './js/script.js', __FILE__ ), array('jquery'), rand(0,9999), true );
    ?>

   
    

        <div class="diamond_search" >
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
                        <li>
                            <a href="#" class="t3"></a>
                            <span>彩鑽</span>
                        </li>
                    </ul>
                </div> 
                
                <div class="carat">
                    <h3 >克拉</h3>
                    <ul>
                        <li><a href="">30分</a></li>
                        <li><a href="">40分</a></li>
                        <li><a href="">50分</a></li>
                        <li><a href="">60分</a></li>
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
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
          
                    </ul>
                </div>  
                <div class="clean">
                    <h3>淨度</h3>
                    <ul>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
                        <li><a href="">30分</a></li>
       
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
                <div class="t6">桌面</div>  
                <div class="t6">拋光</div>  
                <div class="t6">對稱</div>               
                <div class="t6">車工</div>  
                <div class="t6">螢光</div>  
                <div class="t6">八心八箭</div>  
                <div class="t6">裸石報價</div>  
                <div class="t6">狀態</div>  
            </div>
            <div class="table-list"></div>
            <div class="data-container" ></div>
        </div>

        <script>
            let data_num = [1, 2, 3, 4, 5, 6, 7,1, 2, 3, 4, 5, 6, 7,111, 2, 3, 42, 51, 6, 7,111, 2, 3, 42, 51, 6, 7];
        </script>

    <?php
    $output = ob_get_contents();
    ob_end_clean();
    
    return $output;
}




?>



