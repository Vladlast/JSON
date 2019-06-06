const request = new XMLHttpRequest
request.open("GET","1.json")
request.onreadystatechange = function (event) {
    if (this.readyState === 4)
       if (this.status === 200)
            console.log(JSON.parse(this.responseText))
}
request.send()