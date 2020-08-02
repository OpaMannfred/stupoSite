function moveTorch(){
    const torch = document.querySelector('#particles-js .torch');
    document.addEventListener('mousemove', e => {
        torch.setAttribute("style", `circle(200px at ${event.offsetX}px ${event.offsetY}px)`);
    })

}