let display = document.getElementById("displayText");  
display.innerText='0';
let view = document.getElementById("opperation");
//digits
let d0 = document.getElementById("0");
let d1 = document.getElementById("1");
let d2 = document.getElementById("2");
let d3 = document.getElementById("3");
let d4 = document.getElementById("4");
let d5 = document.getElementById("5");
let d6 = document.getElementById("6");
let d7 = document.getElementById("7");
let d8 = document.getElementById("8");
let d9 = document.getElementById("9");
//operators
let dPercent = document.getElementById("%");
let dDivide = document.getElementById("/");
let dMulti = document.getElementById("x");
let dComma = document.getElementById(",");
let dMinus = document.getElementById("-");
let dAdd = document.getElementById("+");
let dEqual = document.getElementById("=");
//Clears
let allClear = document.getElementById("aclear");
let clear = document.getElementById("c");

let operation='';
// let n1=0;

display.addEventListener('click',()=>
{
    // console.log(n1);
    console.log(operation);
})

allClear.addEventListener('click',()=>
{
    
    display.innerText="0";
    operation = '';
    view.innerText = operation;
    // n1=0;

})

clear.addEventListener('click',()=>
{
    if(display.innerText.length == 0)
    {
        display.innerText='0';
    }else
    {
        let text = display.innerText;
        if(display.innerText.length != 1)
        {
            text = text.slice(0,-1);
            operation = operation.slice(0,-1) ;
        }else
        {
            text = '0';
            // n1=0;
        }
        display.innerText = text;
        // console.log(n1);
    }
})

d0.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="0";
            operation+='0';
        }
        // console.log(n1);

    })

d1.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="1";
           
        }else
        {
            display.innerText = '1';
            
        }
        // console.log(n1);
        operation+='1';
    })

    d2.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="2";
        }else
        {
            display.innerText = '2';
            // operation = '2';
        }
        operation+='2';

    })
    d3.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="3";

        }else
        {
            display.innerText = '3';
            // operation='3';
        }
        operation+='3';

    })
    d4.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="4";

        }else
        {
            display.innerText = '4';
            // operation = '4';
        }
        operation+='4';

    })
    d5.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="5";
            
        }else
        {
            display.innerText = '5';
            // operation='5';
        }
        operation+='5'

    })
    d6.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="6";
        }else
        {
            display.innerText = '6';
            // operation='6';
        }
        operation+='6';

    })
    d7.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="7";
        }else
        {
            display.innerText = '7';
            // operation='7';
        }
        operation+='7';

    })
    d8.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="8";
            
        }else
        {
            display.innerText = '8';
            // operation = '8';
        }
        operation+='8';

    })
    d9.addEventListener('click',()=>
    {
        if(display.innerText != '0')
        {
            display.innerText +="9";
        }else
        {
            display.innerText = '9';
            // operation = '9';
        }
        operation+='9';

    })

    dPercent.addEventListener('click',()=>
    {
        // operation+= n1.toString();
        operation+= ' % ';
        display.innerText='0';
        // n1=0;
        console.log(operation);
        view.innerText = operation.slice(0,-3);

    })

    dComma.addEventListener('click', ()=>
    {
        display.innerText+='.';
        operation+='.';
    })

    dAdd.addEventListener('click',()=>
    {
        // operation+= n1.toString();
        operation+= ' + ';
        display.innerText='0';
        // n1=0;
        console.log(operation);
        view.innerText = operation.slice(0,-3);

    })
    
    

    dMinus.addEventListener('click',()=>
    {
        // operation+= n1.toString();
        operation+= ' - ';
        display.innerText='0';
        // n1=0;
        console.log(operation);
        view.innerText = operation.slice(0,-3);

    })

    dMulti.addEventListener('click',()=>
    {
        // operation+= n1.toString();
        operation+= ' * ';
        display.innerText='0';
        // n1=0;
        console.log(operation);
        view.innerText = operation.slice(0,-3);

    })

    dDivide.addEventListener('click',()=>
    {
        // operation+= n1.toString();
        operation+= ' / ';
        display.innerText='0';
        // n1=0;
        console.log(operation);
        view.innerText = operation.slice(0,-3);

    })

    dEqual.addEventListener('click',()=>
    {
        // operation += n1.toString();
       display.innerText = eval(operation);
       let result=eval(operation);
       view.innerText = operation + " = " + result;
       console.log(operation + " = " + result);
    })