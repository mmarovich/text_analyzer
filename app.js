function wordCount(string){
  var words = string.split(" ");
  return words.length;
}

function wordCountUnique(string){
  var words = {}
  var allWords = string.toLowerCase().replace(/\./,"").split(" ");
  allWords.forEach(function(element){
    if (!words[element]){
      words[element] = 1;
    }
  })
  return Object.keys(words).length;
}

function avWordLength(string){
  sum = 0;
  var words = {}
  var allWords = string.toLowerCase().replace(/\./,"").split(" ");
  allWords.forEach(function(element){
    if (element){
      sum += element.length;
    }
  })
  return sum / allWords.length; 
}

function avSentLength(string){
  var eachSentence = string.replace(/(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm, "$1$2|").split("|");
  var words = string.split(" ");
  return words.length / eachSentence.length;
}

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    $('dl').removeClass('hidden');
    var result = wordCount($('#user-text').val());
    $('.js-wordCount').html(result);
    var result2 = wordCountUnique($('#user-text').val());
    $('.js-wordCountUn').html(result2);
    var result3 = avWordLength($('#user-text').val());
    $('.js-wordLength').html(result3);
    var result4 = avSentLength($('#user-text').val());
    $('.js-sentenceLength').html(result4);
  })
})