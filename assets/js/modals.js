let to_click_div = document.getElementById("to-click");
let modal = document.getElementById('modal');
let close_btn = document.getElementById('close');
let modal_bg = document.getElementById('modal-bg');
to_click_div.onclick = modal_toggle;
close_btn.onclick = modal_toggle;
modal_bg.onclick = modal_toggle;
function modal_toggle(){
    modal.classList.toggle('hidden');
    modal_bg.classList.toggle('hidden');
}