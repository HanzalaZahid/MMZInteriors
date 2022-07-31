$(document).ready(
    function()
    {
        let navItem = $('nav .nav>ul>li');
        navItem.mouseover(function()
        {
            this.focus();
            let subnav = this.querySelector('.subnav');
            if (subnav != null)
            {
                subnav.style.display = 'block';
            }
        })
        navItem.mouseleave(function()
        {

            let subnav = this.querySelector('.subnav');
            if (subnav != null)
            {
                subnav.style.display = 'none';
            }
        })

        $('.list_table').DataTable();

    }
)