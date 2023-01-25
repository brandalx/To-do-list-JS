import { createList , checkLocalInit } from "./mission1List.js";
import {   declareEvents, } from "./mission1Form.js";
const init =() =>{
    checkLocalInit()
createList();
declareEvents()

}

init()