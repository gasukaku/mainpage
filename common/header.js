function header(){
var html = "";
html += '<header>';
html += '
 <div id="header2">
<div id="header_yohaku2">
  
    </div>
    <h3>
 <div class="h-menu">
      <input id="h-menu_checkbox" class="h-menuCheckbox" type="checkbox">
      <label class="h-menu_icon" for="h-menu_checkbox"><span class="hamburger-icon"></span></label>
      <label id="h-menu_black" class="h-menuCheckbox" for="h-menu_checkbox"></label>
      <div id="h-menu_content">
        <ul>
          <li><a href="../">ホーム</a></li>

          <li><a href="../blog">ブログ</a>
          </li>
          
           <li>
             <a href="../links">相互リンク</a>
          </li>
          </ul></div>
<div id="header_logp">
  
        
        <div style="text-align: center"> 
        <a href="#" style="color:white">Gasukaku</a>
  <div id="header_yohaku">
    </div></div></div></div></h3>   
   
    ';
html += '</header>';
document.write(html);
}
