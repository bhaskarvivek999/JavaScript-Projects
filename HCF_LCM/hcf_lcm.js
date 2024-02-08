


calHCF = ()=>{
   // alert("HCF");

   let value1 = document.querySelector("#value1").value;
   let value2 = document.querySelector("#value2").value;


   if(value1.length < 1 || value2.length < 1)
   {
    alert("Enter value");
    return 0;
   }

   
    
   let sm,lg,hcf;
   
    if(value1 < value2)
    {
        sm=value1;
        lg=value2;
    }
    else
    {
        sm=value2;
        lg=value1;
    }

    for(let i = 1;i<sm; i++)
    {
        if(sm%i==0 && lg%i==0)
        {
            hcf=i;
        }
    }

    let ans = `HCF : ${hcf}`;
    //console.log(ans);
    let answer = document.querySelector("#answer");
    answer.innerHTML = ans;
  
}

const bodys = document.querySelector("body");
let pt =document.createElement("p");
pt.innerText="Created by Vivek Bhaskar";
bodys.append(pt);
pt.style.color="white";
pt.style.textAlign="center";

calLCM = ()=>{

    let value1 = document.querySelector("#value1").value;
   let value2 = document.querySelector("#value2").value;

   if(value1.length < 1 || value2.length < 1)
   {
    alert("Enter  value");
    return 0;
   }
    
   let sm,lg,lcm;
   
    if(value1 < value2)
    {
        sm=value1;
        lg=value2;
    }
    else
    {
        sm=value2;
        lg=value1;
    }

    for(let i=1;i>=1;i++)
    {
        if(lg%sm==0)
        {
            lcm = lg;
            break;
        }
        lg = lg * i;
    }

    let ans = `LCM : ${lcm}`;
    //console.log(ans);
    let answer = document.querySelector("#answer");
    answer.innerHTML = ans;
  

  
}