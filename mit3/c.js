let data=[{id:1,name:"shivani",email:"21@gmail.com"}]
function readAll(){
    localStorage.setItem("object",JSON.stringify(data))
    var tabledata=document.querySelector("createform")
    var object=localStorage.getItem('object')
    var objectdata=JSON.parse(object)
    var elements=""
    // tabledata.innerHTML=elements
}
// function create(){
    // document.querySelector(".createform").style.display="block"
    document.querySelector(".after").style.display="none"
// }
function add(){
    var name= document.querySelector(".name").value
    var email= document.querySelector(".email").value
    var newobj ={id:2,name:name,email:email}
    data.push(newobj)
    
    // document.querySelector(".createform").style.display="none"
   var h= document.querySelector(".h").style.display="block"
    readAll()
    var h=document.querySelector(".h")
    h.innerHTML="<div class='after'><label>name: </label><br> <label>email:</label></div>"
//     var after= document.querySelector(".after").value
//     after.innerHTML=newobj.value
}
// loacal storage successfully displayed


