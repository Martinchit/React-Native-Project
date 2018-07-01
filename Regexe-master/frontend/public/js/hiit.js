$(function () {

    let set;
    let warmup;
    let cooldown;
    let high;
    let low;
    let total;

    function create() {
        set = Number($('input[name="set"]').val());
        warmup = Number($('input[name="warmup"]').val());
        cooldown = Number($('input[name="cooldown"]').val());
        high = Number($('input[name="high"]').val());
        low = Number($('input[name="low"]').val());
        total = warmup + cooldown + high * set + low * (set - 1);
        $('div.interval ul').empty();
        $('div.interval ul').append('<li class="warmup-bg"></li>')
        for (let i = 0; i < set; i++) {
            $('div.interval ul').append('<li class="high-bg"></li>')
            if (i < set - 1) $('div.interval ul').append('<li class="low-bg"></li>')
        }
        $('div.interval ul').append('<li class="cooldown-bg"></li>')
        $('li.warmup-bg').css("width", warmup / total * 100 + "%");
        $('li.cooldown-bg').css("width", cooldown / total * 100 + "%");
        $('li.high-bg').css("width", high / total * 100 + "%");
        $('li.low-bg').css("width", low / total * 100 + "%");
    }

    create();

    $('form').keyup(function () {
        create();
    })


    function secondToMinute(time) {
        var min = Math.floor(time / 60);
        var second = time - min * 60;
        return { min, second }
    }


    let isPaused = true;
    $('.create').on('click', function (e) {
        e.preventDefault();
        let pair = {
            "warmup-bg": warmup,
            "cooldown-bg": cooldown,
            "high-bg": high,
            "low-bg": low
        }

        let index = 0;
        let timerList = []
        let timerSecondList = []
        let timeRun = 0;
        $('li').each(function () {
            timerList.push($(this).attr('class'));
        })
        for (let element of timerList) {
            timerSecondList.push(pair[element]);
        }
        let t = setInterval(reduce, 1000);
        function reduce() {
            if (!isPaused) {
                timerSecondList[index]--;
                if (timeRun < total) {
                    timeRun++;
                } else {
                    clearInterval(t);
                }
                if (timerSecondList[index] == '0') {
                    $('.second').html(timerSecondList[index]);
                    index++;
                    var lastClass = $('.timer').attr('class').split(' ').pop();
                    if (timeRun != total){
                        $('.timer').removeClass(lastClass).addClass(timerList[index])
                    } else {
                        $('.timer').removeClass(lastClass).addClass('finish-bg')
                        $('.mstime').html('<h1>Finish Workout</h1>')
                    }
                }
                let { min, second } = secondToMinute(timerSecondList[index])
                let mTotal = secondToMinute(timeRun).min
                let sTotal = secondToMinute(timeRun).second
                $('.timeRun').html(`${mTotal}m${sTotal}s`);
                $('.min').html(min+'m');
                $('.second').html(second+'s');
                $('.pointer').css('left', (timeRun) / total * 100 + '%')
            }
        }
        $('.timer').show();

    })

    $('.pause').on('click', function (e) {
        e.preventDefault();
        isPaused = true;
    });

    $('.play').on('click', function (e) {
        e.preventDefault();
        isPaused = false;
    });


})