import { useState } from "react";

function Soma() {

    const [num1, setNum1] = useState<any>();
    const [num2, setNum2] = useState<any>();
    const [soma, setSoma] = useState<any>();

    function somar() { //clicar no botão
        setSoma(Number.parseInt(num1) + Number.parseInt(num2));
        console.log(soma);

    };

    function Digitar1(event: any) {
        setNum1(event.target.value);
        // console.log(num1);
    }

    function Digitar2(event: any) {
        setNum2(event.target.value);
        // console.log(num2);
    }

  return (
    <div>
      <h1>Função de soma</h1>

      <div>
        <label>Número 1: </label>
        <input type="text" onChange={Digitar1}/>

        <div>
          <label>Número 2: </label>
          <input type="text" onChange={Digitar2}/>
        </div>
      </div>

      <div>
        <br />
        <button onClick={somar}>Somar</button>
        <br/>
        <span>Resultado: {soma}</span>
      </div>
    </div>

  );
}

export default Soma;

/* 
    TODO COMPONENTE TEM QUE SER EXPORTADO
    TODO COMPONENTE TEM QUE TER LETRA MAIÚSCULA
    O COMPONENTE TEM QUE SER IMPORTADO DENTRO DE UMA TAG HTML 
    TODO COMPONENTE DEVE TER UMA FUNÇÃO
    TODO COMPONENTE DEVE RETORNAR APENAS UM ELEMENTO PAI HTML

*/
