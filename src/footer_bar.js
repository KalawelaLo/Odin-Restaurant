const {genp, genDiv, listAppend} = require("./utils");


function footer_bar_gen() {
    const footer_container = genDiv();
    footer_container.append(genp("Kalawela's Restaurant, Copyright 2021"));
    return footer_container;
};

module.exports = {
    footer_bar_gen
};