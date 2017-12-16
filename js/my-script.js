$(document).ready(function () {
    $('#dropDownOne').hover(function () {
        $('#dropDownOne ul').slideToggle(500);
        $('#dropDownOne ul li ul').css('display','none');
    })

    $('li#subDropDownOne').click(function () {
        $('#subDropDownOne ul').slideToggle(500);
    })
        $('#dropDownTwo').hover(function () {
        $('#dropDownTwo ul').slideToggle(500);
        $('#dropDownTwo ul li ul').css('display','none');
    })

    $('li#subDropDownTwo').click(function () {
        $('#subDropDownTwo ul').slideToggle(500);
    })

    $('#dropdown-btn').click(function () {
        $('.menu ul').slideToggle(500);
        $('#dropDownOne ul').css('display','none');
        $('#dropDownOne ul li ul').css('display','none');
        $('#dropDownTwo ul').css('display','none');
        $('#dropDownTwo ul li ul').css('display','none');

    })
})