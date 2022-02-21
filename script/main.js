
var btn = document.getElementById('example1');
btn.addEventListener('click', OnExample1Click );
btn = document.getElementById('example2');
btn.addEventListener('click', OnExample2Click );
btn = document.getElementById('example3');
btn.addEventListener('click', OnExample3Click );
btn = document.getElementById('example4');
btn.addEventListener('click', OnExample4Click );
btn = document.getElementById('example5');
btn.addEventListener('click', OnExample5Click );


const C_TABLE_STEP_LENGTH = 10;

function OnExample1Click(){
    console.log(`Insert ${C_TABLE_STEP_LENGTH} items into table`);
    
    var table = window.document.getElementById("tablebody");

    for (let i = 0; i < C_TABLE_STEP_LENGTH; ++i){

        var tdLeft = document.createElement('td');
        tdLeft.innerText = `Item ${i}`;
    
        var tdRight = document.createElement('td');
        tdRight.innerText = `Value ${i*1000}`;

        var newRow = table.insertRow(i);
        newRow.appendChild(tdLeft);
        newRow.appendChild(tdRight);            
    }
}

function OnExample2Click(){
    console.log(`Delete last ${C_TABLE_STEP_LENGTH} items from table`);
    
    var table = window.document.getElementById("tablebody");

    for (let i = 0; i < C_TABLE_STEP_LENGTH; ++i){
        table.deleteRow(table.childElementCount - 1);
    }
}

function OnExample3Click(){
    console.log("Delete whole table");

    var table = window.document.getElementById("tablebody");
    var len = table.childElementCount;
    
    for (let i = 0; i < len; ++i){
        table.deleteRow(0);
    }
}

function OnExample4Click(){
    window.location = "./PersonalBio.html";
}

function OnExample5Click(){
    window.location = "pages/about.html";
}