const OperationNameEl = document.getElementById("operationName")
const OperationAmountEl = document.getElementById("OperationAmount")
const OperationBtnEl = document.querySelector(".save-btn");

function HandleOperation() {
    let OperationNameValue = OperationNameEl.value;
    let OperationAmountValue = OperationAmountEl.value;
    
}

OperationBtnEl.addEventListener("click",HandleOperation)