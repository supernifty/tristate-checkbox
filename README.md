Tristate Checkbox
=================
This is a JavaScript implementation of a tri-state checkbox.

It's a pure JavaScript implementation and has no dependencies.
It's also safely encsonced inside a namespace so will not interfere with any existing JavaScript or library.

The tristate checkbox requires the user to have JavaScript enabled to work properly.

How to use
----------
Refer to example.htm for how to use it.

1. Include the JavaScript file in your HTML:
<script src="assets/main.js" type="text/javascript"></script>

For your convenience, a minified file is provided. Use the minified version, unless you're debugging.

2. Include the CSS file in your HTML:
<link rel="stylesheet" href="assets/main.css" type="text/css" />

3. Include a div with an id and the tristate class in your HTML:
<div id="tri_id" class="tristate"/>

You can safely append the contents of these JS and CSS files to your own to save on an extra request in your main page.

4. Submitted tristates will have their field name set to the ID specified in the div. The value will be either "yes", "no" or "none".

Easy!

Configuration
-------------
You can easily change the images for each state, and the data submitted to the server, by editing main.js.
Just change the values of YES, NO and NONE

Compatibility
-------------
Tested on:
* Chrome 15
* Firefox 6
* IE 8
* Safari 5.1

If you try it on a platform that is not listed here, please let me know the result.

Version History
---------------
0.1 - 07-sep-2011 - Initial Release

License
-------
Copyright (c) 2011, Supernifty.
All rights reserved.
http://www.supernifty.com.au/

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Actually, there aren't any conditions, except for the disclaimer below:

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

