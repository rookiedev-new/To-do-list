const user=document.querySelector("#inputbox");
const btn=document.querySelector("#btn");
const list=document.querySelector(".box2");

btn.addEventListener("click",()=>{
  const task=user.value.trim();
  if(task===""){
    alert("please Enter task... empty cannot be addded");
  }
  else{
    process(task);
   user.value=""
  }
});
user.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

const process=(data)=>{
  const newli=document.createElement("li");
  newli.textContent=data;
  newli.classList.add("listitm");
  list.append(newli);
  newli.addEventListener("click",()=>{
   newli.remove();
  })
}