function getImagesList() {
    return [
        {
            'img': 'assets/images/content/serie-image-01.png',
            'alt': 'Imagem de Vecna'
        },
        {
            'img': 'assets/images/content/serie-image-02.png',
            'alt': 'Imagem ilustrativa dos amigos de Eleven'
        },
        {
            'img': 'assets/images/content/serie-image-03.png',
            'alt': 'Imagem Eleven assustada'
        },
        {
            'img': 'assets/images/content/serie-image-03.png',
            'alt': 'Imagem Eleven assustada'
        }
    ]
}

export function gallery(galleryImagelist) {
    const imgList = getImagesList();

    galleryImagelist.innerHTML = imgList.map(img => `
        <li class="gallery-image invert-element">
            <img src="${img.img}" alt="${img.alt}"/>
        </li>`
    ).join('');

}