function convert() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText)

            const obj = JSON.parse(this.responseText);
            let final_amount = parseFloat(document.getElementById("amount").value) * parseFloat(obj[document.getElementById("final_currency").value.toLowerCase()])
            console.log(document.getElementById("amount").value)
            document.getElementById("result").innerHTML = final_amount + " " + document.getElementById("final_currency").value.toUpperCase()
        }
    }
    let amount = document.getElementById("amount").value
    let base_currency = document.getElementById("base_currency").value.toLowerCase()
    let final_currency = document.getElementById("final_currency").value.toLowerCase()
    let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+base_currency+"/"+final_currency+".json"
    xhttp.open("GET", url, true)
    xhttp.send()
}