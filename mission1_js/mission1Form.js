import { addItem, resetAllItems } from "./mission1List.js";
export const declareEvents = () =>{
    let reset_btn = document.querySelector("#btnReset");
  let id_form = document.querySelector("#id_form");
  reset_btn.addEventListener("click", () => {
    resetAllItems();
  });
  id_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(document.querySelector("#textInput").value == ""){
      alert("Text input cannot be clean!")
      return 0;
   
    }
    if( document.querySelector("#dateInput").value == ""){
      alert("Time input cannot be clean!")
      return 0;
    }
  
    let newItem = {

        name: document.querySelector("#textInput").value,
        amount: document.querySelector("#dateInput").value,
        id: Date.now(),
       
      };
      addItem(newItem);
    console.log(newItem);
    
    document.querySelector("#textInput").value= ""
    document.querySelector("#dateInput").value =""
    document.getElementById("textInput").placeholder= "Provide some details of to-do task here..."
   

});
}

