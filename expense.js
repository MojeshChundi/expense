var form=document.getElementById("act");

var btn=document.getElementById("button")

var item=document.getElementById("select")


form.addEventListener('submit',savedTolocal)
function savedTolocal(e){
e.preventDefault();
var Amount=document.getElementById("exe").value;
var Type=document.getElementById('type').value;
var Description=document.getElementById('desc').value;
var obj={
    Amount:Amount,
    Type:Type,
    Description:Description
}
let obj1=JSON.stringify(obj);
console.log(obj1)
localStorage.setItem(Amount,obj1)

var li=document.createElement('li');
li.className="list";
li.id="select";
var text=document.createTextNode(Amount+'_'+Type+'_'+Description);
li.appendChild(text)
var remo=document.getElementById("mylist").appendChild(li)


var button =document.createElement('button');
button.className='but';
button.id='butt'
button.appendChild(document.createTextNode('delete'));
li.appendChild(button)

  
var button2=document.createElement("button");
button2.className="button primary edit";
button2.id='butt2'

button2.appendChild(document.createTextNode('edit'));
li.appendChild(button2)
document.getElementById('act').reset()

}
var ul=document.getElementById("mylist")
ul.addEventListener('click',(e)=>{
      //alert('Are you sure?')
    if(e.target.tagName==='BUTTON'){
        const button=e.target;
        const li=button.parentNode;
        const ul=li.parentNode;
        if(button.textContent==='delete'){
            ul.removeChild(li) 
           localStorage.removeItem(document.getElementById("expense").value)
    }
}
})



