(function(window) {
    'use strict'
    function defineGershwin() {
        var Gershwin = {};
        Gershwin.alert = function () {
            alert("Howdy, it looks like Gershwin is running, so , dont feel blue!")
        }
       Gershwin.standardTitle = function () {
           document.write("Gershwin Default Site!");
       }

       Gershwin.stanFooter = function () {
           document.write("Copyright 1920 by the Deco Corp!")
       }
           

           
       
      return Gershwin;
    }
 if (typeof(Gershwin) === 'undefined') {
     window.Gershwin = defineGershwin();
 }
})(window);