<!--
jQuery( function() {
    var $tab_title_input = jQuery( '#tab_title' ),
        $tab_content_input = jQuery( '#tab_content' );
    var tab_counter = 2;

    var $tabs = jQuery( '#jquery-ui-tabs' ) . tabs( {
        tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
        add: function( event, ui ) {
            var tab_content = $tab_content_input . val() || 'タブ ' + tab_counter + ' の内容。';
            jQuery( ui . panel ) . append( '<p>' + tab_content + '</p>' );
        }
    } );

    var $dialog = jQuery( '#jquery-ui-dialog' ) . dialog( {
        autoOpen: false,
        modal: true,
        buttons: {
            '追加': function() {
                addTab();
                jQuery( this ) . dialog( 'close' );
            },
            'キャンセル': function() {
                jQuery( this ) . dialog( 'close' );
            }
        },
        open: function() {
            $tab_title_input . focus();
        },
        close: function() {
            $form[ 0 ] . reset();
        }
    } );

    var $form = jQuery( "form", $dialog ) . submit( function() {
        addTab();
        $dialog . dialog( 'close' );
        return false;
    } );

    function addTab() {
        var tab_title = $tab_title_input . val() || 'タブ ' + tab_counter;
        $tabs . tabs( 'add', '#jquery-ui-tabs-' + tab_counter, tab_title );
        tab_counter++;
    }

    jQuery( '#add_tab' )
        .button()
        .click( function() {
            $dialog.dialog( 'open' );
        } );

    jQuery( '#jquery-ui-tabs span.ui-icon-close' ).live( 'click', function() {
        var index = jQuery( 'li', $tabs ) . index( jQuery( this ) . parent() );
        $tabs . tabs( 'remove', index );
    } );
} );
// -->
