$(document).ready(
    function()
    {

        let editTransactionDialog = document.querySelector('.edit_transaction_dialog');
        let addTransactionDialog = document.querySelector('.add_transaction_dialog');
        // RADIO FOR TRANSACTION CHOICE
        // RADIO FOR TRANSACTION CHOICE

        let cashRadioNew = addTransactionDialog.querySelector('.cash_radio');
        let accountRadioNew = addTransactionDialog.querySelector('.account_radio');
        let cashRadio = editTransactionDialog.querySelector('.cash_radio');
        let accountRadio = editTransactionDialog.querySelector('.account_radio');
        cashRadioNew.addEventListener('click', function()
        {
            $('#select_new_account').hide();
            $('#withdrawal_new').parent().hide();
            $('#select_new_transaction').show();
        })
        accountRadioNew.addEventListener('click', function()
        {
            $('#select_new_account').show();
            $('#withdrawal_new').parent().show();
            $('#select_new_transaction').hide();
        })
        cashRadio.addEventListener('click', function()
        {
            $('#select_account').hide();
            $('#withdrawal').parent().hide();
            $('#select_transaction').show();
        })
        accountRadio.addEventListener('click', function()
        {
            $('#select_account').show();
            $('#withdrawal').parent().show();
            $('#select_transaction').hide();
        })
    }
)