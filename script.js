function toggleMode(){
    const html = document.documentElement

    /*if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/
    html.classList.toggle('light')
 
    //tem que pegar a tag image
    const img = document.querySelector("#profile img")

    //se tiver liht mode adicionar a imagem light
    if(html.classList.contains('light')) {
            img.setAttribute("src", "./assets/avatar-light.png")

        //se tiver sem light mode manter a imagem normal 
        } else {
           img.setAttribute("src", "./assets/avatar.png")
        }




}