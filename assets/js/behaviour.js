$(document).ready(
    function()
    {
        let allDialog = document.querySelectorAll('.dialog');
        let editClientDialog = document.querySelector('.edit_client_dialog');
        let editProjectDialog = document.querySelector('.edit_project_dialog');
        let editTransactionDialog = document.querySelector('.edit_transaction_dialog');
        let editBeneficaryDialog = document.querySelector('.edit_beneficiary_dialog');
        let editDepositDialog = document.querySelector('.edit_deposit_dialog');
        let addClientDialog = document.querySelector('.add_client_dialog');
        let addProjectDialog = document.querySelector('.add_project_dialog');
        let addTransactionDialog = document.querySelector('.add_transaction_dialog');
        let addBeneficiaryDialog = document.querySelector('.add_beneficiary_dialog');
        let addDepositDialog = document.querySelector('.add_deposit_dialog');
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
        $('.beneficiaries .button_list_change').click(
            function()
            {
                editBeneficaryDialog.style.display = 'flex';
            }
        )
        $('.deposits .button_list_change').click(
            function()
            {
                editDepositDialog.style.display = 'flex';
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
        $('.button_add_beneficiary').click(
            function()
            {
                addBeneficiaryDialog.style.display = 'flex';
            }
        )
        $('.button_add_deposit').click(
            function()
            {
                addDepositDialog.style.display = 'flex';
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