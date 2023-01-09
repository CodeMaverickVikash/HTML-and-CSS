
$(document).ready(function () {
    // Form Event - focus(), blur(), change(), submit(), select()
    // focus means click in input field
    $('#sname, #class, #country').focus(function () {
        $(this).css('background-color', 'lime');
    });

    // blur is opposite to focus event
    $('#sname, #class, #country').blur(function () {
        $(this).css('background-color', '');
    });

    // change is used with select box, not with input field
    $('#country').change(function () {
        $(this).css('background-color', 'pink');
    });

    $('#formSubmit').submit(function (e) {
        e.preventDefault();
        // alert("Form is submmited.");
        let sname = $('#sname').val();
        let classN = $('#class').val();
        let country = $('#country').val();
        console.log(sname, classN, country);
        // alert(sname +" "+ classN +" "+ country);
    });

    // window event - load(), unload(), resize(), scroll()
    // load, unload is removed in version 3.0
    // unload event is triggered when you close window/tab

    // Get method in jQuery - text(), html(), attr(), val() is used with form values
    var a = $('#box').html();
    // console.log(a);
    var a = $('#box').text();
    // console.log(a);
    // var a = $('#box').attr('class');
    var a = $('#box').attr('class', 'setByAttr');
    // console.log($('#box').attr('class'));

    // Set method in jquery - means how to set the value/content to the html DOM - have html(), attr(), text(), val()
    // it is similar to get method, here we have to do one thing that's pass something to the method

    // addClass & removeClass & toggleClass Method 
    $('#adBtn').click(function () {
        $('#box2').addClass('first second');
    });

    $('#rmBtn').click(function () {
        $('#box2').removeClass('second');
    });

    $('#tglBtn').click(function () {
        $('#box2').toggleClass('second');
    });

    // css() method in jquery
    $('#box2').css({
        'width': '400px',
        'border': '1px solid black',
        'padding': '12px',
        'margin-bottom': '12px'
    });

    // on & off method in jquery
    // on() method is used to add single and multiple event at a time
    // for single event
    // $('#box2').on('click', function() {
    //     $(this).css('background-color', 'pink');
    // });

    // for multiple event
    $('#box2').on({
        'click': function () {
            $(this).css('background-color', 'tan');
        },
        'mouseover': function () {
            $(this).css('background-color', 'green');
        },
        'mouseout': function () {
            $(this).css('background-color', 'pink');
        }
    });

    // off('event_name') method is used to remove to event
    $('#rmEvent').click(function () {
        $('#box2').off('mouseover mouseout');
    });

    // Append() - last me, prepend() - starting me ---- selected object ke under
    // after(), before ---- selected object ke outside

    // remove() - is used to remove any tag, empty() - is used to make empty to any tag
    $('#rm').click(function () {
        $('#box2').remove();
    });

    $('#empty').click(function () {
        $('#box2').empty();
    });

    // clone() ---> kisi dusre object to copy kerke kahi aur dal dena

    // wrap() --> used to wrap tag with other tag, unwrap --> opposite to wrap
    $('#wrap').click(function () {
        $('#box2 p').wrap('<h1 id="test"></h1>');
    });

    $('#unwrap').click(function () {
        $('#box2 p').unwrap();
    });

    // wrapInner() - is used to wrap within selected object

    // hasClass() --> return true or false
    $('#checkingClass').click(function () {
        if ($('#box2 p').hasClass('test')) {
            alert("Class found: " + $('#box2 p').attr('class'));
        } else {
            alert("Sorry not found!");
        }
    });

    // Jquery effect: hide(), show() and toggle()
    $('#hide').click(function () {
        $('#box2').hide();
    });
    $('#show').click(function () {
        $('#box2').show();
    });
    $('#toggle').click(function () {
        $('#box2').toggle();
    });

    // fade method: fadeIn(), fadeOut(), fadeToggle() and fadeTo()
    // fadeOut(), fadeIn() & fadeToggle() works similar to hide(), show() & toggle() simalarly but with fading.
    $('#fadeout').click(function () {
        // $('#box2').fadeOut();
        $('#box2').fadeOut(3000, function () {
            console.log("Now it's hidden");
        });
    });
    $('#fadein').click(function () {
        // $('#box2').fadeIn();
        $('#box2').fadeIn(3000, function () {
            console.log("Now it's visible");
        });
    });
    $('#fadetoggle').click(function () {
        $('#box2').fadeToggle();
    });
    $('#fadeTo').click(function () {
        $('#box2').fadeTo(2000, 0.3, function () {
            console.log("FadeTo is finished.")
        });
    });

    // Slide method: slideUp(), slideDown() & slideToggle()
    // slideUp(), slideDown() & slideToggle() works similar to hide(), show() & toggle() simalarly but with animated slide.
    $('#slideUp').click(function () {
        $('#box2').slideUp('slow', function () {
            console.log("Slide Up finished");
        });
    });
    $('#slideDown').click(function () {
        $('#box2').slideDown(2000);
    });
    $('#slideToggle').click(function () {
        $('#box2').slideToggle();
    });

    // Animate method in jquery: you can animate any tag --------> with animate method of jquery, you can animate any css property
    $('#animate').click(function () {
        $('#box2').css('position', 'relative');
        // Animation queue
        $('#box2').animate({ left: '350px' }, 2000, function () {
            console.log("First animation completed.");
        });
        // $('#box2').animate({top: '150px'});
        // $('#box2').animate({left: '250px'});
    });
    jQuery('#stop').click(function () {
        $('#box2').stop();
    });

    // Method chaining in jquery
    $('#chain').click(function () {
        $('#box2').css('background-color', 'purple').slideUp(3000).slideDown();
    });

    // Jquery DOM traversing method: can be categorize into 4:
    // 1) Ancestors method 2) Descendants method 3) Siblings method 4) Filtering method


    // Jquery each() method - it is like looping
    $('#eachDemo li').each(function () {
        console.log($(this).text());
    });

    // event.type in jquery
    $('#box3').css({
        'width': '400px',
        'border': '1px solid black',
        'padding': '12px',
        'margin-bottom': '12px',
        'margin-top': '12px'
    });

    // event.which in jquery
    // 1 mean left click, 2 means wheel click, 3 means right click
    $('#box3').on('click dblclick mouseover mouseout mousedown', function (e) {
        $('#textCome').text("Event: " + e.type + "   " + e.which);
    });
    $('#keyPress').on('keydown', function (e) {
        $('#inputEventText').text(e.type + " :  " + e.which);
    });

    // event.target
    $('#box3').click(function (event) {
        $('#inputEventText').text(event.type + " :  " + event.target + " : " + event.target.nodeName + " :Onlcik get text: " + event.target.innerHTML).css('color', 'green');
    });


    // AJAX Using jQuery: art of exchanging the data with the server without reloading the page - used for backend coding
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'vikash', channel: 'code with vikash' },
    //     function (data, status) { alert(status) });

});


