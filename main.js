let itemList = localStorage.getItem('items')

if (itemList) {
    itemList = JSON.parse(itemList)
} else {
    itemList = []
}
console.log('Arreglo sin llenar', itemList)

ShowList()

function AddItem() {
    var nameItem = document.getElementById('nameItem').value
    var dateItem = document.getElementById('dateItem').value
    var adnItem = document.getElementById('adnItem').value
    
    if (nameItem && dateItem && adnItem) {
        itemList.push({'itemName' : nameItem, 'itemDate' : dateItem, 'itemAdn' : adnItem})
        SaveLocalStorage()

        document.getElementById('nameItem').value = "";
        document.getElementById('dateItem').value = "";
        document.getElementById('adnItem').value = "";

        ShowList()

    } else {
        alert('Por favor llenar todos los campos.')
    }
       
}

function ShowList() {
    let html = `<div class="row" > 
            <div class="col" ><strong>Nombre del Estudiante</strong></div>
            <div class="col" ><strong>Fecha de Nacimiento</strong> </div>
            <div class="col" ><strong>Tipo de Sangre</strong> </div>
            <div class="col" ><strong>Acción</strong> </div>
            </div> `

    itemList.forEach((i, index )=> {
      html += `<div class="row" > 
            <div class="col" > ${i.itemName} </div>
            <div class="col" > ${i.itemDate} </div>
            <div class="col" > ${i.itemAdn} </div>
            <div class="col" > <input class="btn btn-danger" type="button" onclick="Delete(${index});" value="X"> 
            </div> 
        </div> <br>`
          
    }) 
    
    document.getElementById('showItemList').innerHTML =html
}

function Delete (index){
    console.log("Se elimino a: ",itemList.splice(index, 1) , "\nArreglo actual: ", itemList)
    SaveLocalStorage()
    ShowList()
}

function SaveLocalStorage(){
    let myArryJson = JSON.stringify(itemList)
    localStorage.setItem('items', myArryJson) 
}