

window.addEventListener("load", function(){
    var theButton;
    var UIItemProperties = {
      disabled: false,
      title: "Increase Readability",
      icon: "icon.png",

      onclick: function(){
      

      	var tab = opera.extension.tabs.getFocused();
      opera.postError(tab)
      	if( tab ){
        tab.postMessage('gogo')
      	}

      	
          
      },
      badge: {
        backgroundColor: '#000',
        color: '#fff',
        display: 'block'
      }
    }
    theButton = opera.contexts.toolbar.createItem( UIItemProperties ); // create the button
    opera.contexts.toolbar.addItem( theButton ); // add button to UI
}, false);



