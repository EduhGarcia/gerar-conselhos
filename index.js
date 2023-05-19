const botaoConselho = document.getElementById("btn-conselho")
const mensagem = document.getElementById("conselho")
const adviceNumero = document.querySelector(".titulo")

botaoConselho.addEventListener('click', function(){
    pegaConselho()
})

async function conselhoAleatorio(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegaConselho(){
    const procuraConselho = await conselhoAleatorio()
    const adviceText = `"${procuraConselho.slip.advice}"`
    const adviceId = `Advice #${procuraConselho.slip.id}`
    mensagem.innerHTML = adviceText
    adviceNumero.innerHTML = adviceId
}

pegaConselho()



