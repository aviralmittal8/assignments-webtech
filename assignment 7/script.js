
var index=0;
function changecolors(){
var colors = ["white" , "red","blue","orange" , "yellow", "green", "indigo" ,"violet", "purple", "pink", "aqua", "brown"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;

}