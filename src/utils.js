function genh1(text_content){
    const new_h1 = document.createElement("h1");
    new_h1.textContent = text_content;
    return new_h1;
};

function genDiv(){
    const new_div = document.createElement("div");
    return new_div;
};

function genp(text_content) {
    const new_p = document.createElement("p");
    new_p.textContent = text_content;
    return new_p;
}

function listAppend(what, list){
    list.forEach(element => {
        what.appendChild(element);
    });

};

module.exports = {
    genh1,
    genDiv,
    listAppend,
    genp
};