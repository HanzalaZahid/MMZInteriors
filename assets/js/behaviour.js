$(document).ready(
    function()
    {
        let allDialog = document.querySelectorAll('.dialog');
        let editClientDialog = document.querySelector('.edit_client_dialog');
        let editProjectDialog = document.querySelector('.edit_project_dialog');
        let editTransactionDialog = document.querySelector('.edit_transaction_dialog');
        let addClientDialog = document.querySelector('.add_client_dialog');
        let addProjectDialog = document.querySelector('.add_project_dialog');
        let addTransactionDialog = document.querySelector('.add_transaction_dialog');
        let deleteWarningDialog = document.querySelector('.delete_warning_dialog');
        $('.clients .button_list_change').click(
            function()
            {
                editClientDialog.style.display = 'flex';
            }
        )
        $('.projects .button_list_change').click(
            function()
            {
                editProjectDialog.style.display = 'flex';
            }
        )
        $('.transactions .button_list_change').click(
            function()
            {
                editTransactionDialog.style.display = 'flex';
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
                // console.log(allDialog);
                allDialog.forEach(
                    function(box)
                    {
                        box.style.display= 'none';
                    }
                );
            }
        )
        $('.button_add_client').click(
            function()
            {
                addClientDialog.style.display = 'flex';
            }
        )
        $('.button_add_project').click(
            function()
            {
                addProjectDialog.style.display = 'flex';
            }
        )
        $('.button_add_transaction').click(
            function()
            {
                addTransactionDialog.style.display = 'flex';
            }
        )
        $('.button_cancel_delete').click(
            function()
            {
                deleteWarningDialog.style.display = 'none';;
            }
        )




        // RADIO FOR TRANSACTION CHOICE
        // RADIO FOR TRANSACTION CHOICE

        let cashRadioNew = addTransactionDialog.querySelector('.cash_radio');
        let accountRadioNew = addTransactionDialog.querySelector('.account_radio');
        let cashRadio = editTransactionDialog.querySelector('.cash_radio');
        let accountRadio = editTransactionDialog.querySelector('.account_radio');
        cashRadioNew.addEventListener('click', function()
        {
            $('#select_new_account').hide();
            $('#select_new_transaction').show();
        })
        accountRadioNew.addEventListener('click', function()
        {
            $('#select_new_account').show();
            $('#select_new_transaction').hide();
        })
        cashRadio.addEventListener('click', function()
        {
            $('#select_account').hide();
            $('#select_transaction').show();
        })
        accountRadio.addEventListener('click', function()
        {
            $('#select_account').show();
            $('#select_transaction').hide();
        })
    }
)