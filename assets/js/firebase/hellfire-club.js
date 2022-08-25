import app from "./app.js";

// versão 9.9.3 deve ser a mesma presente no arquivo app.js
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function inscricaoHellfireClub(inscricao) {
    const db = getFirestore(app); // referência ao banco de dados no firebase
    
    const helfireCollection = collection(db, 'hellfire-club'); // referência aà collection/tabela dentro do bd
    
    const refDocumento = await addDoc(helfireCollection, inscricao); // referência do documento salvo dentro da tabela do bd

    return refDocumento.id;
}

export async function getInscricoesHellfireClub() {
    const db = getFirestore(app); // referência ao banco de dados no firebase

    const helfireCollection = collection(db, 'hellfire-club'); // referência aà collection/tabela dentro do bd

    const snapshothelfireCollection = await getDocs(helfireCollection); // pegar os dados do bd em tempo real

    const listaInscricoes = snapshothelfireCollection.docs.map(doc => doc.data());

    return listaInscricoes;
}
