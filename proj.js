var aud={
  "zoro.png":"zoro.mp3",
  "doffy.png":"doflamingo.mp3",
  "cro.png":"cro.mp3",
  "luffy.png":"luffy.mp3",
  "chopper.png":"chopper.mp3",
  "brook.png":"brook.mp3"
}
for(var i=0;i<6;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function()
  {
    var buttonImage = this.querySelector("img").src.split('/').pop(); 
    voice(aud[buttonImage])
  });
}
function voice(v)
{
  switch (v) {
    case "zoro.mp3":
      var au=new Audio("zoro.mp3");
      au.play();
      break;
    case "doflamingo.mp3":
      var au=new Audio("doflamingo.mp3");
      au.play();
      break;
   case "cro.mp3":
        var au=new Audio("cro.mp3");
        au.play();
        break;
   case "luffy.mp3":
          var au=new Audio("luffy.mp3");
          au.play();
          break;
    case "chopper.mp3":
      var au=new Audio("chopper.mp3");
      au.play();
      break;     
      case "brook.mp3":
        var au=new Audio("brook.mp3");
        au.play();
        break;    
    default:
      break;
  }
}
