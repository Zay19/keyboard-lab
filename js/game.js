//
var sentences =[
    
    'Ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var s = -1;
var l = 0;
var sentLength = sentences[l].length;
var numTick = 0;
var correct = $('<span />').attr({'class':'glyphicon glyphicon-ok', 'aria-hidden':'true' }); 
var incorrect = $('<span />').attr({'class':'glyphicon glyphicon-remove', 'aria-hidden':'true' }); 
var numWrong = 0;
var numberOfWords = 54;
/*var start = new Date(); */
/*var ok="ok"
var remove="remove" */
//
$(document).ready(function() {
    $('#keyboard-upper-container').hide();
    
$(document).keyup(function() {
    if(event.which == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }   
});

$(document).keydown(function() {
    if(event.which == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }   
});

$(document).keypress(function(e) {
    keyPress = String.fromCharCode(event.which);
});
//
$(document).keypress(function(event) {
    $('#' + event.which).css('background-color', 'thistle');
        $(document).keyup(function() {
            $('#' + event.which).css('background-color', '#f5f5f5');
        });
});

    $('#sentence').html((sentences[0].split('')));

    $('body').on('keypress', function() {
        s++;
        push();
    });
});
$(document).on('keypress', function(e) {
        if(e.which){
            $('#target-letter').append(String.fromCharCode(e.which));  
            //Purple box animation
            $("#red-block").animate({ "left" : "1000px" }, 9000);
            }
        }); 
//
function push() {
    numTick++;
    var sentChar = sentences[l].charAt(s);
    $('#target-letter').text(sentChar);
    if (sentChar == keyPress) {
        $('#feedback').html(correct);
    } 
    else if (numTick == 50){
        gameEnd();
    } else if (numTick == sentences[l].length) {
        l++;
        $('#yellow-block').css('margin-left', "-15px");
        $('#sentence').html((sentences[l]).split(''));
        $('#feedback').html('');
        numTick = 0;
        s = -1;
        return;
    } 
    else {
        $('#feedback').html(incorrect);
        numWrong++;
    }
};
  function reset(){
    sentLength();
    numTick= 0
    sentences();


    
  }

