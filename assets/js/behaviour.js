$(document).ready(
    function()
    {
        let dialogBox = document.querySelector('.dialog');
        $('.button_list_change').click(
            function()
            {
                dialogBox.style.display = 'flex';
            }
            )
            $('.button_dialog_close').click(
            function()
            {
                dialogBox.style.display = 'none';;
            }
        )
    }
)