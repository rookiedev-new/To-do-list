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
  const delbtb=document.createElement("button");
  delbtb.textContent="🗑️";
  delbtb.classList.add("remove");
  newli.textContent=data;
 
   newli.append(delbtb);
  newli.classList.add("listitm");
  
  list.append(newli);

  delbtb.addEventListener("click",()=>{
   newli.remove();
  })
}