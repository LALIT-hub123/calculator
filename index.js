const result = () =>{
    var p = document.getElementById('principal').value;
    var t = document.getElementById('time').value;
    var r = document.getElementById('rate').value;

    p = parseInt(p);
    t = parseInt(t);
    r = parseInt(r);
    
    var i = (r/100)/12;
    var n = t*12;

    var x = p*((1+i)**n-1)*((i+1)/i);
    x = Math.round(x*100)/100;

    var z = p*n;
    var w = Math.round((x-z)*100)/100;

    document.getElementById('amount').innerHTML= x;
    document.getElementById('inval').innerHTML = z;
    document.getElementById('intval').innerHTML = w;

       
    
}
//P [ (1+i)^n-1 ] * (1+i)/i