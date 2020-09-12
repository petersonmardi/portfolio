// var spread = document.getElementById("spreadcoffee")
// msg = '<a target="_blank" href="https://petersonmardi.github.io/web-site">' + "Project#1 SPREADCOFFEE" + '</a>'
// msg += '<p>' + "HTML, CSS and JS" + '</p>'
// msg += '<a target="_blank" href="https://github.com/petersonmardi/web-site">' + 'Source code' + '</a>'
// spread.innerHTML = '<h4>' + msg + '</h4>'


// var other1 = document.getElementById("other1")
// update1 = "Other 1"

// other1.innerHTML = '<h4>' + update1 + '</h4>'

// var other2 = document.getElementById("other2")
// update2 = "Other 2"

// other2.innerHTML = '<h4>' + update2 + '</h4>'


function aware() {
    var elMsg = document.getElementById("test");
    elMsg.textContent = 'They are mini projects.';
}

var elementProject1 = document.getElementById("principle");

elementProject1.addEventListener('mouseover', aware, false);

function mouseOut() {
    var elMsg = document.getElementById("test");
    elMsg.textContent = ' ';
}

var elementProject1 = document.getElementById("principle");

elementProject1.addEventListener('mouseout', mouseOut, false);

// jQuery

$('p.hot').addClass('complete');

$(':header').addClass('headline');

$('li:lt(1)').hide().fadeIn(1500);

// $('li:lt(3)').on('click', function () {
//     $(this).remove();
// })

// var $listHTML = $('ul').html();
// $('ul').append($listHTML);

// var $listText = $('ul').text();
// $('ul').append('<p>' + $listText + '</p>');

// var $listItemHTML = $('li').html()
// $('li').append('<i>' + ' ' + $listItemHTML + '</i>')

// var $listItemText = $('li').text()
// $('li').append('<i>' + ' ' + '<a href="https://google.com">' + 'Google'+ '</a>' + '</i>')

// $(function (){
//     $('li:contains("honey")').text('Miel');
//     $('li.hot').html(function (){
//         return '<em>' + $(this).text() + '</em>';
//     });
//     $('li#one').remove();
// });

// $(function(){
//     $('ul').before('<p class="notice">Just Updated</p>');
//     $('li.hot').prepend('+ ');
//     var $newListItem = $('<li><em>gluten-free</em> soy sauce </li>');
//     $('li:last').after($newListItem);
// });

// $(function(){
//     $('li#three').removeClass('hot');
//     $('li.hot').addClass('favorite');
//     $('ul').attr('id', 'group')
// })

// $('li').css({
//     'background-color': 'blue',
//     'font-family':'Courier',
//     'font-size': '18px'
// })

// $(function(){
//     var $backgroundColor = $('li').css('background-color');
//     $('ul').append('<p>Color was: ' + $backgroundColor + '</p>');
//     $('li').css({
//         'background-color': '#c5a996',
//         'border':'1px solid #fff',
//         'color': '#000',
//         'font-family': 'Georgia',
//         'padding-left': '+=10'
//     })
//     $('li:contains("honey")').text('miel')
// })

