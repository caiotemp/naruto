// let jutsus = [
//     {
//         name: "Jutsu de Clonagem",
//         image: "https://static.wikia.nocookie.net/naruto/images/c/c3/T%C3%A9cnica_de_Clonagem.PNG/revision/latest/scale-to-width-down/350?cb=20140623001415&path-prefix=pt-br",
//         description: "A Técnica de Clonagem é uma técnica básica de bunshinjutsu usada para criar uma ou mais imagens de si mesmo, sem corpo físico — por isso esses clones não causam dano e podem não se dissipar quando eles entram em contato com algo. A técnica é usada exclusivamente para confundir o adversario e, muitas vezes, é combinada com outras técnicas. É um jutsu simples que qualquer ninja pode usar, e apesar de ser uma técnica básica, pode ser de grande valia se for bem utilizada.",
//         classification: "Ninjutsu",
//         semiClassification: [
//             "Bunshinjutsu",
//             "Técnica Básica"
//         ],
//         elements: "Nenhum",
//         rank: "E",
//         jclass: "Suplementar",
//         handSeals: [
//             "Carneiro",
//             "Cobra",
//             "Tigre"
//         ]
//     },
//     {
//         name: "Estilo Fogo: Jutsu Bola de Fogo",
//         image: "https://static.wikia.nocookie.net/naruto/images/2/2e/Libera%C3%A7%C3%A3o_de_Fogo_-_T%C3%A9cnica_da_Grande_Bola_de_Fogo_%28Fugaku_Uchiha%29.png/revision/latest/scale-to-width-down/350?cb=20180415144454&path-prefix=pt-br",
//         description: "O Estilo Fogo: Técnica da Grande Bola de Fogo é uma técnica que envolve a Mudança da Natureza de fogo e que foi originalmente criada pelo clã Uchiha, tornando-se uma de suas técnicas favoritas, em que eles se tornaram muito adeptos.",
//         classification: "Ninjutsu",
//         semiClassification: [],
//         elements: "Estilo Fogo",
//         rank: "C",
//         jclass: "Ofensivo",
//         handSeals: [
//             "Tigre"
//         ]
//     }
// ]


async function jutsus() {
    let jutsus = []
    await fetch('./jutsus-db.json')
        .then(response => response.json())
        .then(data => {
            jutsus.push(data.jutsus)
        })
        .catch(erro => console.error(erro));
    return jutsus
}

jutsus().then(data => {
    const jutsu = data[0][Number(url.match(/\d+$/)[0]) - 1]
    imgBuffer = "aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L25hcnV0by9pbWFnZXMvNS81NS9BX0hlcmFuJUMzJUE3YV9kYV9Wb250YWRlX2RlX0ZvZ28uUE5HL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzM1MD9jYj0yMDE1MDMyMDIyNTY1MyZwYXRoLXByZWZpeD1wdC1icg=="
    console.log(imgBuffer)
    // console.log(jutsu)
    document.querySelector(".name").textContent =
        jutsu.name ||
        "No jutsu found";
    // document.querySelector(".jutsu-img").src =
    //     "data:image/jpeg;base64,aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L25hcnV0by9pbWFnZXMvNS81NS9BX0hlcmFuJUMzJUE3YV9kYV9Wb250YWRlX2RlX0ZvZ28uUE5HL3JldmlzaW9uL2xhdGVzdC9zY2FsZS10by13aWR0aC1kb3duLzM1MD9jYj0yMDE1MDMyMDIyNTY1MyZwYXRoLXByZWZpeD1wdC1icg" ||
    //     "No jutsu found";
    document.querySelector(".description").textContent =
        jutsu.description ||
        "No jutsu found";
    document.querySelector(".classification").textContent =
        jutsu.classification ||
        "No jutsu found";
    document.querySelector(".semi-classification").textContent =
        jutsu.semiClassification.toString().replace(/,/g, ', ') ||
        "No jutsu found";
    document.querySelector(".elements").textContent =
        jutsu.elements ||
        "No jutsu found";
    document.querySelector(".rank").textContent =
        jutsu.rank ||
        "No jutsu found";
    document.querySelector(".jclass").textContent =
        jutsu.jclass ||
        "No jutsu found";
    document.querySelector(".hand-seals").textContent =
        jutsu.handSeals.toString().replace(/,/g, ' → ') ||
        "No jutsu found";
})



const url = document.URL;
// console.log(url)

function changeJutsu() {

}

window.addEventListener("load", (e) => {
    changeJutsu()
});