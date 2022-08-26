import { switchTheme } from "./switch-theme.js";
import { gallery } from "./gallery.js";
import { inscricaoHellfireClub, getInscricoesHellfireClub } from "./firebase/hellfire-club.js";

const switchThemeButton = document.getElementById('switch-theme-button');
const galleryImagelist = document.getElementById('gallery-image-list');

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btn-subscribe');

// mudar tema da página
switchTheme(switchThemeButton);

// exibir galeria
gallery(galleryImagelist);

// enviar formulário de inscrição
btnSubscribe.addEventListener('click', async () => {
    const valorForm = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // chamando função que salva no bd
    const inscricaoId = await inscricaoHellfireClub(valorForm);

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';

    alert('Inscrição realizada com sucesso!')
});

// listar inscrições do bd
// async function loadData() {
//     const inscricoes = await getInscricoesHellfireClub();
//     console.log(inscricoes);
// }

// loadData();