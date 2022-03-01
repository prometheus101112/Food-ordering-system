function disable_button(s){
    console.log(s);
    const button = document.getElementById(s);
    button.style.backgroundColor = 'LightGrey';
    button.disabled = true;
}