let options = document.querySelectorAll('.optbutton');

options.forEach((e)=>{
    e.addEventListener('click',select);
})

function select() {
    console.log("clicked");
    options.forEach((opt)=> {
        opt.classList.remove('selected');
    })
    this.classList.add('selected');
}