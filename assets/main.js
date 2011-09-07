
var supernifty_tristate = function() {
  var
    YES = { image: "assets/yes.png", state: "yes" },
    NO = { image: "assets/no.png", state: "no" },
    NONE = { image: "assets/none.png", state: "none" };

  function tristate_elements() {
    if ( document.getElementsByClassName != undefined ) {
      return document.getElementsByClassName( "tristate" );
    }
    else {
      var 
        all = document.getElementsByTagName('*'),
        alllength = all.length,
        result = [], i;
      for ( i = 0; i < alllength; i++ ) {
        if ( all[i].className == 'tristate' ) {
          result.push( all[i] );
        }
      }
      return result;
    }
  }

  return {
    init: function() {
      var list = tristate_elements(), 
        i, 
        html;
      for ( i = 0; i < list.length; i++ ) {
        html = "<img id=\"" + list[i].id + "_img\" src=\"" + NONE.image + "\" onclick=\"supernifty_tristate.update('" + list[i].id + "')\"/><input type=\"hidden\" id=\"" + list[i].id + "_frm\" name=\"" + list[i].id + "\" value=\"" + NONE.state + "\"/>";
        list[i].innerHTML = html;
      }
    },

    update: function(id) {
      var state = document.getElementById( id + "_frm" ).value, next;
      // yes -> no -> none -> yes
      if ( state == 'yes' ) {
        next = NO;
      }
      else if ( state == 'no' ) {
        next = NONE;
      }
      else { // assume none
        next = YES;
      }
      document.getElementById( id + "_img" ).src = next.image;
      document.getElementById( id + "_frm" ).value = next.state;
    }
  }
}();

// onload handler
var existing_onload = window.onload;
window.onload = function() {
  if ( existing_onload != undefined ) {
    existing_onload();
  }
  supernifty_tristate.init();
}
