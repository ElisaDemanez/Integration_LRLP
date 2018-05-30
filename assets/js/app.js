window.onscroll = (e) => {
    if (e.pageY > 250) {
        document.getElementById('navbar').style.position = 'fixed'
        document.getElementById('navbar').style.width = '100vw'
       
    }
    else if (e.pageY <= 250) {
        document.getElementById('navbar').style.position = 'relative';

    }
}
