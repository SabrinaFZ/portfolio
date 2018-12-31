'use strict';

var dropdownHeader = document.querySelectorAll('.dropdown header h3');

addClickEvent();

function addClickEvent(){
    dropdownHeader.forEach((header) => {
        header.addEventListener('click', openDropdown);
    });
}

function openDropdown(e){
    closeDropdown();
    let type = e.target.parentElement.dataset['toggle'];

    if ($(`#${type} .container-wrapper`).is(':hidden')){
        $(`#${type} .container-wrapper`).slideDown();
    }
}

function closeDropdown(e){
    let bodyDropdowns = $('article .container-wrapper');
    bodyDropdowns.each((i)=>{
        if ($(bodyDropdowns[i]).is(':visible')){
            $(bodyDropdowns[i]).slideUp();
        }
    })
}




