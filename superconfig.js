window.showLevels = 4;
window.onlyShow  = null;
window.width = 600;
window.getHeight = function() {
  if (window.onlyShow)
    return window.onlyShow.length * 350
  else  if (window.showLevels == 1) {
    return 1000;
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


  return "#ffffff";

  if (config.style.indexOf(name) > -1) {
    return "#b2ff78"
  } else if (config.layout.indexOf(name) > -1){
    return "#ff7abe";
  } else {
    return "#ffffff"
  }
}
