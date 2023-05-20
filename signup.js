var allInp=document.querySelectorAll("input")
var allSelectTag=document.querySelectorAll("select")
var userGen;
function storeTheValue()
{
    var firstName=allInp[0].value
    var surName=allInp[1].value
    var emailOrMobile=allInp[2].value
    var pass=allInp[3].value
    var date=allSelectTag[0].value
    var month=allSelectTag[1].value
    var year=allSelectTag[2].value

    localStorage.setItem("Fname",firstName)
    localStorage.setItem("surname",surName)
    localStorage.setItem("E&M",emailOrMobile)
    localStorage.setItem("pass",pass)
    localStorage.setItem("dd",date)
    localStorage.setItem("mm",month)
    localStorage.setItem("yy",year)
    localStorage.setItem("gender",userGen)
    sessionStorage.setItem("E&M",emailOrMobile)
    sessionStorage.setItem("pass",pass)
}
function gen(g)
{
    userGen=g;
}