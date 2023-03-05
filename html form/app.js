function saveData()
{
fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;
mail=document.getElementById("mail").value;
pass=document.getElementById("pass").value;
role=document.getElementById("role").value;
gender=document.getElementById("gender").value;
num=document.getElementById("num").value;
add=document.getElementById("add").value;

localStorage.setItem("fname",fname)
localStorage.setItem("lname",lname)
localStorage.setItem("mail",mail)
localStorage.setItem("pass",pass)
localStorage.setItem("role",role)
localStorage.setItem("gender",gender)
localStorage.setItem("num",num)
localStorage.setItem("add",add)

}

