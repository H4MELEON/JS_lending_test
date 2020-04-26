window.addEventListener("DOMContentLoaded", () => {

    let tabMenu = document.getElementsByClassName("info-header")[0],
        tabBtns = document.getElementsByClassName("info-header-tab"),
        tabs = document.getElementsByClassName("info-tabcontent");

    function showTab(n) {
        if (tabs[n].classList.contains('hide')) {
            tabs[n].classList.remove('hide');
            tabs[n].classList.add('show');
        }
    }

    function hideTabs(n) {
        for (let i = n; i < tabs.length; ++i) {
            tabs[i].classList.remove('show');
            tabs[i].classList.add('hide');
        }
    }

    hideTabs(1);

    tabMenu.addEventListener('click', (event) => {
        let target = event.target;
        for (let i = 0; i < tabBtns.length; ++i) {
            if (target == tabBtns[i]) {
                hideTabs(0);
                showTab(i);
                break;
            }
        }
    });
});