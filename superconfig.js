window.showLevels = 4;
window.onlyShow  = null;
window.showParent = false;
window.width = 600;

window.getHeight = function() { 
  if (showParent)
    return 2000;

  if (window.onlyShow)
    return window.onlyShow.length * 550
  else  if (window.showLevels == 1) {
    return 2000;
  } 

  return 4000;
}

window.superconfig = function(name) {

  var config = {
    style: [
      "backgroundColor",
      "language",
      "fontColor",
      "tertiaryFontColor",
      "buttonText",
      "lineSeparator",
      "lineSeparatorColor",
      "primaryColor",
      "primaryFont",
      "labelBackground",
      "showProcessingPayment",
      "verifyVpa",
      "verifyMobile"
    ],
    layout: [
      "showSearchBoxStroke",
      "useSeperatedSections",
      "listItemHeight",
      "margin",
      "fontSize",
      "checkboxSize",
      "combineWallets",
      "expandPopularNBView",
      "expandUpiView",
      "expandedWalletView",
      "iconSize",
      "useQuickPayRanking"
    ]
  }

 
  if (window.onlyShow && window.showParent) {
    for (var i=0;i<window.onlyShow.length;i++) {
      if (name.toLowerCase().includes(window.onlyShow[i].toLowerCase()))  {
        if (onlyShow[i] == "color") return "#b2ff78"  
        else if (onlyShow[i] == "font") return "#000000"  
        else if (onlyShow[i] == "padding") return "#ffccff" 
        else if (onlyShow[i] == "margin") return "#00ffff" 
        else if (onlyShow[i] == "font") return "ff7abe"
        else return "ffffbe"

      }
    }
  }

  return "#ffffff";

  if (config.style.indexOf(name) > -1) {
    return "#b2ff78"
  } else if (config.layout.indexOf(name) > -1){
    return "#ff7abe";
  } else {
    return "#ffffff"
  }
}
