console.log("Testing 123")

const {header_bar_gen} = require("./header_bar");
const {footer_bar_gen} = require("./footer_bar");

function generateOutline(){
    const insert_point = document.getElementById("content");
    const main_header_bar = header_bar_gen();
    insert_point.appendChild(main_header_bar);


    const main_footer_bar = footer_bar_gen();
    insert_point.appendChild(main_footer_bar);
};

generateOutline();
