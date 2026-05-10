import { useState } from "react";

export let All = () => {
    let [name,setName]=useState("john");
    let changevalue = (e)=>{
        e.target.value === "" ? setName("john") : setName(e.target.value)}
    return (
        <>
        <input type="text" onChange={changevalue} />
        <h1>hello, you type : {name}</h1>
        </>
    );
};


export let Is_premium = ()=>{
    let [crdiet,setcredit] = useState(3);

    let setallcards = ()=>{
        setcredit(0);
    }

    return(<>
        <h3>you have {crdiet} cards</h3>
        <button onClick={setallcards}>subscribe</button>
        </>)
}

export let Increment = ()=>{
    let [counter,setcounter] = useState(0);

    let recount = ()=>{
        setcounter((prev)=>prev + 1);
        setcounter((prev)=>prev + 5);
        setcounter((prev)=>prev + 10);
    }

    return(<>
        <h3>you have {counter} cards</h3>
        <button onClick={recount}>subscribe</button>
        </>)
}

export let Objectstate = ()=>{
    
    let [counter,setcounter] = useState({name:"ahmed",salary:400,available:true,address :["cairo","sohag"]});

    return(<>
        <ul>you info are :
            <li><h3>name : {counter.name}</h3></li>
            <li><h3>name : {counter.salary}</h3></li>
            <li><h3>name : {counter.available ? "available" : "not available"}</h3></li>
            <li><h3>address : {counter.address.map((e)=>e + "  ")}</h3></li>
        </ul>

        <button onClick={()=>setcounter({...counter,name :"hello"})}>update name </button>
        <button onClick={()=>setcounter({...counter,salary : counter.salary +5 })}>update salary</button>
        <button onClick={()=>setcounter({...counter,available :false})}>update state</button>
        <button onClick={()=>setcounter({...counter, address: [...counter.address, "giza"]})}>update city</button>
    </>)
}

export let Dolist = ()=>{
    
    let [item,setitem] = useState([
        {key:1,name:"ahmed",salary:400,available:true,done:false},
        {key:2,name:"sayed",salary:500,available:false,done:false},
        {key:3,name:"ali",salary:600,available:true,done:false}     ]);

    let removedata = (id)=>{
        setitem(item.filter((item)=> id !== item.key  ))
    };
    let finishcourse = (state)=>{
        setitem(item.map((item)=>
            state==item.key 
            ? { ...item , done : !item.done }
            : item ))
    };
    return(<>
        <ul><h3>you info are :</h3>
            {item.map((person)=>
            <li>
                <span style={{textDecoration : person.done ? "line-through" : "none"}}>
                    {"name : "+person.name + " , salary is : " + person.salary +" , availability is " + person.available +  person.salary +" , done is " + person.done}
                </span>
            <button onClick={()=>removedata(person.key)}>delete me </button>
            <button onClick={()=>finishcourse(person.key)}>{person.done ? "undo" : "done"}</button>
            </li>)}
        </ul>
    </>)
}

let i = 1;
export let Todolist = ()=>{
    let [job,setjob] = useState([]);
    let [InputValue,SetInputValue] = useState("");
    let [Edited,SetEdited] = useState(null);

    let addjob = ()=>{
        if(InputValue === "") return ;
        
        let newjob ={
            key : i,
            data:InputValue,
            st:false
        }
        
        if(Edited === null){
            setjob(job.concat(newjob));
            i++;
        } else {
            setjob(job.map((j)=>{
                if(Edited === j.key){
                    return {...j , data : InputValue}
                } else {
                    return j;
                }}))
            SetEdited(null);
            }
        SetInputValue("");
    }

    let deletejob = (num)=>{
        setjob(job.filter((j)=> j.key!=num  ));
    }

    let donejob = (status)=>{
        setjob(job.map((j)=> j.key != status ? j : {...j , st: !j.st}  ));
    }

    let editjob = (ek,ed)=>{
        SetEdited(ek)
        SetInputValue(ed);
    };

    return(<ul>
    {job.map((j)=><li>
        <p style={{textDecoration : j.st ? "line-through" : "none"}} >{"=>> "+ j.data}</p> 
        <button onClick={()=>donejob(j.key)}>Done</button>
        <button onClick={()=>deletejob(j.key)}>delete</button>
        <button onClick={()=>editjob(j.key,j.data)}>edit</button>
        </li>   )}
        <button onClick={addjob}>{Edited ==null ? "add" : "updata"}</button>
    <input value={InputValue} onChange={(e) => SetInputValue(e.target.value)} />
    </ul>)
}


let Card = ({price,change})=>{
    let [Counta , setCounta] = useState(0);
    let [Countp , setCountp] = useState(0);

    let updata = (price)=>{
        setCounta(Counta + 1);
        setCountp(Countp + price);
        change(price);
    }
    return(<div style={{ 
            backgroundColor: "#f4f4f4", 
            border: "1px solid #ccc",
            width: "200px", 
            padding: "20px", 
            margin: "10px",
            borderRadius: "8px",
            display: "inline-block",
            textAlign: "center"
        }}>
    <h4>price :{price}$</h4>
    <h4>amount : {Counta}</h4>
    <button onClick={()=>updata(price)}>add to card</button>
    </div>)
}

let Summary = ({totala,totalp})=>{
    return (<>
    <h2>summary </h2>
    <h3>total amount is : {totala}</h3>
    <h3>total price is : {totalp}$</h3>
    </>)
}
export let Shopping = ()=>{
let [CountPrice , setCountPrice] = useState(0);
let [CountAll , setCountAll] = useState(0);


let changdata=(p)=>{
    setCountPrice(CountPrice + p)
    setCountAll(CountAll + 1)
}

return(<>
    <Card price = {250} change={changdata}/>
    <Card price = {500}  change={changdata}/>
    <Summary totala={CountAll} totalp={CountPrice}/>
</>)

}