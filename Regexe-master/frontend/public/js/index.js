$(function () {
    $("input[id='check-2']").keyup(function () {
        if ($("input[id='check-1']").val() == $("input[id='check-2']").val()) {
            $("p.validate").html('correct')
        } else {
            $("p.validate").html('not correct')
        }
    });

    let target = '';
    let email = [
        'shawn137080@gmail.com',
        'rtvk2004@hotmail.com',
        'shinglun.wong@gmail.com'
    ]
    $("div.namecard").click(function () {
        target = $('div.namecard').index(this);
        $('#target-input').val(email[target]);
    })

    $('#body, #subject').keyup(function () {
        let subject = '?subject=' + $('#subject').val();
        let body = '&body=' + $('#body').val();
        $('#send').attr('href', 'mailto:' + email[target] + subject + body)
    })

    $('.login-btn').click(function () {
        $('.pre-loginbox').animate({ margin : "11vw 0 0 0"});
        $('.login-form').show();
        $(".ghost-1").each(function (index) {
            $(this).delay(100 * index).fadeOut(360);
        });
        $(".ghost-2").each(function (index) {
            $(this).delay(100 * (4 - index)).fadeOut(360);
        });

        $('.login-form').prepend('<hr>')
        $('.login-btn img').hide();
        $('.head-content').hide();
        $('.human-1').delay(500).animate({ color: "#8b0000" }, 'slow');
        $('.login-form hr').delay(350).animate({width: "15vw"},'slow');
    })





})
