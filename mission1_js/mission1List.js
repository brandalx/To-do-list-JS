import TaskItem from "./mission1Item.js"

const defaultListArr = [
    {name: "Wake up", amount: "07:30"},
    {name: "Make breakfast", amount: "08:30"},
    {name: "Go to work", amount: "09:30"}
];

export const checkLocalInit = () =>{
    if(localStorage["shopList"]){
      let local_ar = JSON.parse(localStorage["shopList"])
      defaultListArr.splice(0,Infinity,...local_ar)
      
    }
  }

  
const saveLocalData = () =>{
    let jsonToString = JSON.stringify(defaultListArr)
    localStorage.setItem("shopList",jsonToString)
}


export  const createList=  () =>{
    document.querySelector("#id_wrap_card").innerHTML =" ";
    let badge =document.querySelector("#badge");
    badge.innerHTML = `${defaultListArr.length}`
    if(badge.innerHTML == "0"){
        badge.innerHTML = "You dont have tasks to do"
        badge.classList ="badge  bg-success top-100 ms-2 mb-5"
    }
    else{
        badge.classList = "badge  bg-danger top-100 ms-2 mb-5"  
    }
   
   
    defaultListArr.forEach((item)=>{
        let task = new TaskItem("#id_wrap_card", item, deleteItem)
        task.render()
    });
    saveLocalData()
}


export const addItem = (_item)=>{
    defaultListArr.push(_item);
    createList()
}

const deleteItem = (_delId) =>{
    let delIndex = defaultListArr.findIndex((item)=> item.id == _delId);
    defaultListArr.splice(delIndex, 1);
    createList()
}

export const resetAllItems = () => {
    if(window.confirm("Do you sure you want to delete all the tasks?"))
    defaultListArr.splice(0, defaultListArr.length+1)
    createList()
}




