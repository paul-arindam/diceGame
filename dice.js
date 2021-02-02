
function roll(){
    var arr=[];
    document.getElementById("result").innerHTML="";
    for(let i=0; i<4; i++)
    {    
        var value = Math.floor(Math.random() * 6) + 1;
        document.getElementById(i).innerHTML=value;
        arr.push(value);
    }
    if(isDraw(arr))
    {
        document.getElementById("result").innerHTML="Draw";
    }
    else
    {
        winner= arr.indexOf(Math.max.apply(null, arr))+1;
        document.getElementById("result").innerHTML="Winner: Player"+ winner; 
    }
    
}

function isDraw(array) {
    let checkedValues = []
  
    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (checkedValues.indexOf(value) !== -1) {
        return true
      }
      checkedValues.push(value)
    }
    return false
  }