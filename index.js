function getFirstSelector(selector){
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
   const ranks = document.querySelectorAll('.ranked-list li');

   for (let i=0;i<ranks.length; i++){

       var newRank = parseInt(ranks[i].innerHTML) + n;
     ranks[i].innerHTML = newRank;
   }
}

function deepestChild() {
  var node = document.querySelector('#grand-node');
  var index = node.querySelectorAll("div").length - 1;
  return node.querySelectorAll("div")[index];
}
