const buttonCurrency = document.querySelector(".botao-convers")
const selectCurrency = document.querySelector(".select-currency")
const valueConverted = document.querySelector(".value-converted")



function cliqueBotao(){
    const input = document.querySelector("input").value
    const valorUm = document.querySelector(".valor-primario")
    const valorDois = document.querySelector(".valor-segundario")


    const dolar = 4.89
    const euro = 5.24
    const libra = 6.03
    const real = 1.00
     
    if(selectCurrency.value == "libra-convertido"){
        valorDois.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"GBP"
        }).format(input / libra)  
    }    
    
    if(selectCurrency.value == "dolar-convertido"){
        valorDois.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(input / dolar)  
    }
         
    if(selectCurrency.value == "euro-convertido"){

        valorDois.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(input / euro) 
    }

    if(selectCurrency.value == "real-convertido"){

        valorDois.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(input / real)
    }

    if(valueConverted.value == "real"){

        valorUm.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(input)
    }
    
    if(valueConverted.value == "euro"){

        valorUm.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(input / euro) 
    }
    
    if(valueConverted.value == "libra"){

        valorUm.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"GBP"
        }).format(input / libra)  
    }
    
    if(valueConverted.value == "dolar"){

        valorUm.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(input / dolar) 
    }

    

}

function changeCyrrency(){

    const currencyAmericano = document.querySelector(".currency-americano")
    const currencyImg = document.querySelector(".dolar")

    if(selectCurrency.value == "euro-convertido"){
        currencyAmericano.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if(selectCurrency.value == "dolar-convertido"){
        currencyAmericano.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
      
    }

    if(selectCurrency.value == "libra-convertido"){
        currencyAmericano.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

    }

    if(selectCurrency.value == "real-convertido"){
        currencyAmericano.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"

    }
    


    cliqueBotao()
}

function selectUm(){
    const currencyReal = document.querySelector(".currency-real")
    const currencyImgUm = document.querySelector(".real")


    if(valueConverted.value == "libra"){
        currencyReal.innerHTML = "Libra"
        currencyImgUm.src = "./assets/libra.png"

    }
    if(valueConverted.value == "dolar"){
        currencyReal.innerHTML = "Dólar Americano"
        currencyImgUm.src = "./assets/dolar.png"

    }
    if(valueConverted.value == "euro"){
        currencyReal.innerHTML = "Euro"
        currencyImgUm.src = "./assets/euro.png"

    }
    if(valueConverted.value == "real"){
        currencyReal.innerHTML = "Real"
        currencyImgUm.src = "./assets/real.png"

    }
    cliqueBotao()
}

selectCurrency.addEventListener("change", changeCyrrency)
valueConverted.addEventListener("change", selectUm)
buttonCurrency.addEventListener("click", cliqueBotao)
