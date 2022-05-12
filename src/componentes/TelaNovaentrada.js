import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./Usecontext";
import Vector1 from "./../assets/Vector1.svg";
import Vector2 from "./../assets/Vector2.svg";
import VectorSair from "./../assets/VectorSair.svg";


export default function TelaNovaentrada() {
 

    const { dados } = useContext(UserContext)
    const [valor, setValor] = useState("");
    const [descriçao, setDescriçao] = useState("");

    console.log(dados)

    const navigate = useNavigate();

    function novoValor() {
        const URL = "http://127.0.0.1:5000/add-value";
        
        const promise = axios.post(URL, {
            valor, // email: email
            descriçao,
        });
        promise.then(response => {
            const { data } = response;
            console.log(data);
            {data.setToken === null ? navigate("/sign-up") : navigate("/home");}
            
        })
        promise.catch(err => {
            alert("Insira dados válidos")
        });
    }



    return (<Container>
        <Topo>
           <h1 className="icon">Nova entrada </h1>
        </Topo>
        <Main>
        <input typeof="text" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} />
        <input typeof="text" placeholder="Descrição" value={descriçao} onChange={(e) => setDescriçao(e.target.value)} />
            <Button onClick={novoValor} >Salvar a entrada</Button>
        </Main>
    </Container>
    )
}


const Container3 = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        `;
const Container = styled.div`
width: 100%;
height: 100vh;
padding: 31px;

`;
const Topo = styled.div`
width: 100%;
position: absolute;
left: 0;
right: 0;
top: 25px;
margin-left: 32px;

.imagem {
    
left: 87.47%;
right: 6.4%;
top: 4.2%;
bottom: 92.2%;


}

h1 {
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
}
`;

const Main = styled.div`
margin-top: 40px;

input {
    width: 299px;
height: 52px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-top: 16px;

font-family: 'Raleway';
font-style: normal;
color: #DBDBDB;
}

h1 {
width: 180px;
height: 46px;

font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #868686;}
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 13px;
`;
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #A328D6;
border-radius: 4.63636px;
margin-top: 10px;
margin-bottom: 24px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;

`
const Button1 = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
`;
const Button2 = styled.div`

width: 156px;
height: 114px;
background: #A328D6;
border-radius: 5px;
`;