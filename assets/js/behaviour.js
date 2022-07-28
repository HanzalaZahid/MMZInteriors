$(document).ready(
    function()
    {
        let editClientDialog = document.querySelector('.edit_client_dialog');
        let addClientDialog = document.querySelector('.add_client_dialog');
        let deleteWarningDialog = document.querySelector('.delete_warning_dialog');
        $('.button_list_change').click(
            function()
            {
                editClientDialog.style.display = 'flex';
            }
        )
        $('.button_dialog_close').click(
            function()
            {
                editClientDialog.style.display = 'none';;
            }
        )
        $('.button_list_delete').click(
            function()
            {
                deleteWarningDialog.style.display = 'flex';
            }
        )
        $('.button_dialog_close').click(
            function()
            {
                deleteWarningDialog.style.display = 'none';;
            }
        )
        $('.button_add_client').click(
            function()
            {
                addClientDialog.style.display = 'flex';
            }
        )
        $('.button_dialog_close').click(
            function()
            {
                addClientDialog.style.display = 'none';;
            }
        )
        $('.button_cancel_delete').click(
            function()
            {
                deleteWarningDialog.style.display = 'none';;
            }
        )
    }
)