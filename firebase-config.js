// Configuração do Firebase
// IMPORTANTE: Substitua os valores abaixo pelos do seu projeto no Console do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBiwO8tZIRKO1vY0tBY2V20klbmZGr9Hgg",
    authDomain: "sistemadentista-9fdb3.firebaseapp.com",
    projectId: "sistemadentista-9fdb3",
    storageBucket: "sistemadentista-9fdb3.firebasestorage.app",
    messagingSenderId: "287506654720",
    appId: "1:287506654720:web:b5ee7b2671f6f881711ae5",
    measurementId: "G-X6S10XLGJT"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Serviços
const auth = firebase.auth();
const db = firebase.firestore();

// Função auxiliar para tratar erros de Auth
function handleAuthError(error) {
    console.error(error);
    return error.message;
}