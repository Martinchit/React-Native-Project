$(document).ready(function () {

    $('.addresult').click(function (e) {
        e.preventDefault();

        let val = $('textarea.checkup').val();
        $('textarea').val(); //('') <-- clear value in DOM
        $.ajax({
            url: '/api/get-calories',
            method: 'post',
            data: {
                "query": val
            }
        }).done((data) => {
            console.log(data)
            $('#cal').html(`${data}`);
            $('#cal').val(data);
        }).fail((err) => {
            console.log(err);
        })
    });

    $('#save-calories').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: '/api/save-result',
            method: 'post',
            data: {
                "calories": $('#cal').val()
            }
        }).done((data) => {
            console.log("save get record");
        }).fail((err) => {
            console.log(err);
        })
    });

    $('#logout').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: '/logout',
            method: 'get',

        }).done().fail((err) => {
            console.log(err);
        })
    });

    // call get exercise list
    $.ajax({
        url: '/getExe',
        method: 'get',

    }).done((data) => {
        for (let i = 0; i < data.length; i++) {
            $('select#check_exe').append(`
                <option value='${data[i].MET}'>${data[i].name}</option> `);
        }
    })
        .fail((err) => {
            console.log(err);
        })

        $('#calculate').click(function (e) {
        e.preventDefault();
        let met = $('#check_exe').val();
        var duration = $('#dur').val();
        $.ajax({
            url: '/cal',
            method: 'get',

        }).done((data) => {
            //Duration (in minutes) X (MET X 3.5 X weight in kg)/200
            let sum = parseFloat((duration * (data * met * 3.5) / 200).toFixed(2));
            $('#showCal').html(`<span id='burn-calories'>${sum}</span>`);
        })
        .fail((err) => {
            console.log(err);
        });
    });
        

    $('#save-exe').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: '/api/save-burnresult',
            method: 'post',
            data: {
                "calories": $('#burn-calories').text()
            }
        }).done((data) => {
            console.log('saved burn calories');
            alert(data.msg);
        }).fail((err) => {
            console.log(err);
        })
    });

    //for dashboard page
    $.ajax({
        url: '/users-info',
        method: 'get',
    }).done((data) => {
        $('.dashboard-info').html(`
        <p>${data.email}</p>
        <p>Gender: ${data.gender}</p>
        <p>Age: ${data.age}</p>
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
        `);
    }).fail((err) => {
        console.log(err);
    })
    
});
