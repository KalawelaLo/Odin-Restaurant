const {genh1, genDiv, listAppend} = require("./utils");

function header_bar_gen() {
    const main_header_bar = genDiv();
    const navi_button_container = genDiv();

    const home_nav = genDiv();
    home_nav.appendChild(genh1("Home"));
    const about_nav = genDiv();
    about_nav.appendChild(genh1("About"));
    const menu_nav = genDiv();
    menu_nav.appendChild(genh1("Menu"));

    listAppend(navi_button_container, [home_nav, about_nav,menu_nav])
    main_header_bar.appendChild(navi_button_container);

    return main_header_bar;
}

module.exports = {
    header_bar_gen
};