<?php

class WP_React_Plugin_Options {

  protected $plugin_options_page = '';

  /**
  * Initialize hooks.
  */
  public function init() {

    add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );
    add_action( 'admin_init', array( $this, 'register_plugin_settings' ) );
    add_action('admin_menu', array( $this, 'create_admin_menu_page' ) );
  }

  public function register_plugin_settings() {
      register_setting( 'wp-react-plugin-settings-group', 'wp-react-plugin' );
  }

  /**
  *
  * Create new plugin options page under the Settings menu.
  */
  public function create_admin_menu_page() {
    // $this->plugin_options_page = add_options_page('伯思美設定', '伯思美設定', 'manage_options', __FILE__, array( $this, 'render_plugin_options_page' ) );

    // $this->plugin_options_page = add_menu_page('WP React Plugin', 'WP React Plugin', 'manage_options', __FILE__, array( $this, 'render_plugin_options_page' ) ,  );

     $this->plugin_options_page = add_submenu_page( 'edit.php?post_type=product', '鑽石分類設定', '鑽石分類設定','manage_options','ddg-product', array( $this, 'render_plugin_options_page'));
  }

  public function render_plugin_options_page() {
   
    wp_enqueue_style( 'style-bootstrap', plugins_url( './lib_css/bootstrap.css', __FILE__),'','1.5','all');

    echo '<div class="wp-react-plugin"></div>';
  }

  public function enqueue_admin_scripts($hook) {

    // Are we on the plugin options page?
    if( $hook === $this->plugin_options_page ) {

      // add react and react-dom from core
      $dep = ['wp-element'];
      //$dep = ['react', 'react-dom']; // alternative way of loading React via WP core

      $handle = 'wp-react-plugin-';

      // enqueue development or production React code
      if(file_exists(dirname(__FILE__) . "/dist/main.js")) {
        $handle .= 'prod';
        wp_enqueue_script( $handle, plugins_url( "/dist/main.js", __FILE__ ), $dep, '0.1', true );
      } else {
        $handle .= 'dev';
        wp_enqueue_script( $handle, 'http://localhost:3000/assets/main.js', $dep, '0.1', true );
      }
    }
  }
}

$wp_react_plugin_options = new WP_React_Plugin_Options();
$wp_react_plugin_options->init();