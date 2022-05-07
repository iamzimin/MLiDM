function Answer(message1, message2, message3, message4)
{
    if (message1.trim() == '')
        message1 = null;

    if (message2.trim() == '')
        message2 = null;

    if (message3.trim() == '')
        message3 = null;

    if (message4.trim() == '')
        message4 = null;

    $.ajax({
        type: "POST",
        url: 'Lab4-5_main.php',
        data: {
            'message1' : message1,
            'message2' : message2,
            'message3' : message3,
            'message4' : message4
        }, success: function(data){
            document.getElementById("matrix").innerHTML = data;
        }
    });
}
