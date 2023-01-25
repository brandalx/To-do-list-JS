export default class TaskItem {
    constructor(_parent, _item, _deleteItem) {
      this.parent = _parent;
      this.name = _item.name;
      this.amount = _item.amount;
      this.id = _item.id;
      this.deleteItem = _deleteItem;
    }

    render() {
        let div = document.createElement("div");
        div.className = "col-lg-5 col-12";
        document.querySelector(this.parent).append(div);
        div.innerHTML = `
        
        <div class="card bg-light mb-3" >
        <div class="card-header d-flex justify-content-between align-items-center">
          <p class="m-0 p-0">New to-do task</p>
          <button  class="btn btn-close x-btn "></button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${this.amount} </h5>
          <p class="card-text">${this.name}</p>
        </div>
      </div>
          
          `;
        let xBtn = div.querySelector(".x-btn");
        xBtn.addEventListener("click", () => {
          this.deleteItem(this.id);
        });
      }
    }