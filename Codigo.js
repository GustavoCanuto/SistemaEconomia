//Principais Varivaies 

// pegando elementos html
let formulario1 = document.getElementById("form1")
let formulario2 = document.getElementById("form2")
let registro = document.getElementById("registro")//obs


//variaveis de controle de gastos
let TotalEssencial = 0;
let SomaEssencialEconomia = 0; // totalessencial + economiaInput
let MaximoEconomia = 0; // Saldo
let ValorPodeGastar = 0;
let valorPodeGastarFixo = 0;
let ValorSugeridoGastarPorDia = 0;
let TotalGastoNoMes = 0;
let TotalGastoNoDia = 0;
let DiaMaiorGasto = 0;
let MaisDeUmDia = "";

let PorcetagemGastoNaoEssencial = 0;

let TotalEntretenimento = 0;
let TotalModa = 0
let Totalfastfood = 0
let TotalViagens = 0
let TotalEletronicos = 0
let TotalUtensilios = 0
let TotalOutrosNao = 0
let TotalNaoEssencial = 0;

let ValorDiaMaiorGasto = 0;

let diaAtual = 1;

//valores de renda e gastos essenciais 
let AluguelInput = 0;
let AguaInput = 0;
let EnergiaInput = 0;
let TelefoneInput = 0;
let GasInput = 0;
let AlimentacaoInput = 0;
let transporteInput = 0;
let OutrosInput = 0;
let RendaInput = 0;
let EconomiaInput = 0;


//gastos nao essenciais 
let EntretenimentoInput = 0;
let ModaInput = 0;
let fastfoodInput = 0;
let ViagensInput = 0;
let EletronicosInput = 0;
let UtensiliosInput = 0;
let OutrosNaoInput = 0;
let ObservacaoInput = "";


//Função que pega valor do input e convert para numerico
function conversaoInput() {

    //Essenciais 

    AluguelInput = parseFloat(document.getElementById("Aluguel").value)
    AguaInput = parseFloat(document.getElementById("Agua").value)
    EnergiaInput = parseFloat(document.getElementById("Energia").value)
    TelefoneInput = parseFloat(document.getElementById("Telefone").value)
    GasInput = parseFloat(document.getElementById("Gas").value)
    AlimentacaoInput = parseFloat(document.getElementById("Alimentacao").value)
    transporteInput = parseFloat(document.getElementById("Transporte").value)
    OutrosInput = parseFloat(document.getElementById("Outros").value)
    RendaInput = parseFloat(document.getElementById("Renda").value)
    EconomiaInput = parseFloat(document.getElementById("Economia").value)

    //Não Essenciais 

    EntretenimentoInput = parseFloat(document.getElementById("Entretenimento").value)
    ModaInput = parseFloat(document.getElementById("Moda").value)
    fastfoodInput = parseFloat(document.getElementById("fastfood").value)
    ViagensInput = parseFloat(document.getElementById("Viagens").value)
    EletronicosInput = parseFloat(document.getElementById("Eletronicos").value)
    UtensiliosInput = parseFloat(document.getElementById("Utensilios").value)
    OutrosNaoInput = parseFloat(document.getElementById("OutrosNao").value)
    ObservacaoInput = document.getElementById("Observacao").value

}

//Retornar fielsetEssencial e pergunta se gostaria de alteração
function RertornoEssenciais() {

    if (formulario2.checkValidity()) {

        // esconde o formulário de gastos nao essenciais
        document.getElementById("nao-essenciais").style.display = "none";

        //mostrando essencial
        document.getElementById("essenciais").style.display = "block";

        //Alteração formulario essencial

        //alterando texto inicial
        document.getElementById("TextoPrimeiraPagina").innerHTML = "Deseja realizar alguma alteração nos gastos essenciais ?";

        //Alterar texto renda
        document.getElementById("TextoRenda").innerHTML = "Deseja realizar alguma alteração na sua renda ?";

        //Escondendo campo Economia
        document.getElementById("divEconomia").style.display = "none";

        //escondendo botão anterior
        document.getElementById("BotaoRegistrar").style.display = "none";

        //mostrando botão para mostrar relatorio
        document.getElementById("BotaoMostrarRelatorio").style.display = "block";



    }

}

//esconde tudo e deixar apenas fieldset registro e relatorio
function MostrarRelatorio() {
    if (formulario1.checkValidity()) {
        document.getElementById("pMessagemMeta").style.color = "black";
        EconomiaMinima();
        InformacaoRelatorio();

        document.getElementById("essenciais").style.display = "none";

        document.getElementById("relatorio").style.display = "block";

        document.getElementById("NovoMes").style.display = "block";


    }


}

//Ao apertar botão inserir novo mes - manter valores essencial e reseta outros valores
function InserirNovoMes() {

    // remover todos os filhos da fieldset Regitro/ tenho que ver se consigo ultilizar variavel registro ja criada
    registro = document.getElementById("registro");

    while (registro.firstChild) {

        registro.removeChild(registro.firstChild);

    }

    //retornando nome da <legend> da fieldset

    let TituloGastoDiarios = document.createElement("legend");
    TituloGastoDiarios.textContent = "Registro de gastos diarios";
    registro.appendChild(TituloGastoDiarios);


    //Escondendo e mostrando outros
    document.getElementById("essenciais").style.display = "Block";

    document.getElementById("BotaoRegistrar").style.display = "Block";

    document.getElementById("BotaoMostrarRelatorio").style.display = "none";

    document.getElementById("divEconomia").style.display = "block";

    document.getElementById("registro").style.display = "none";

    document.getElementById("relatorio").style.display = "none";

    document.getElementById("NovoMes").style.display = "none";

    //Recuperando texto
    document.getElementById("TextoRenda").innerHTML = "Deseja fazer alguma alteração no valor de renda ou de economia?";

    document.getElementById("dia").innerHTML = "Dia 01 - Informe os gastos realizado hoje :";

    //Zerando Valores
    diaAtual = 1;
    TotalGastoNoDia = 0;
    MaisDeUmDia = "";
    DiaMaiorGasto = 0;
    ValorDiaMaiorGasto = 0;
    valorPodeGastarFixo = 0;
    ValorPodeGastar = 0;
    TotalEntretenimento = 0;
    TotalModa = 0;
    Totalfastfood = 0;
    TotalViagens = 0;
    TotalEletronicos = 0;
    TotalUtensilios = 0;
    TotalOutrosNao = 0;
    TotalNaoEssencial = 0;
    PorcetagemGastoNaoEssencial = 0;
    SaldoTotal = 0;

    //recuperando estilo
    document.getElementById("pMessagemMeta").style.color = "black";
    document.getElementById("ValorMaximoGastar").style.color = "black";
    document.getElementById("MetaEconomia").style.color = "black";

}

//Ao Apertar botão primeira pagina
function MostrarNaoEssencais() {

    // sem numeros negativos e mostrando aviso padrao pelo document.querySelector('form').reportValidity(); 
    //conversaoInput();

    EconomiaMinima();

    // alert(TotalEssencial) // teste

    // verificando se os campos foram preenchido corretamente
    if (formulario1.checkValidity()) {


        if (EconomiaInput >= RendaInput) {

            alert(" O valor que você gostaria de economizar é maior ou igual a sua renda! \n Por favor, insira novos valores!")

        }
        else if (TotalEssencial >= RendaInput) {

            alert(" Seus gastos Essencais são maiores ou iguais a sua renda!\n Por favor, insira novos valores!")

        }
        else if (SomaEssencialEconomia >= RendaInput) {
            alert(" Não é possível realizar essa economia!\n" +
                " O valor máximo possível de economizar é R$ " + MaximoEconomia.toFixed(2) +
                "\n Por favor, insira um valor de economia menor!")
        }

        else {

            formularioVazio();

            //Mudando texto com informações pega
            document.getElementById("ValorSugeridoDiario").innerHTML = "valor sugerido gastar por dia: R$ "
                + ValorSugeridoGastarPorDia.toFixed(2);

            document.getElementById("MetaEconomia").innerHTML = "Meta de economia desse Mês: R$ "
                + EconomiaInput;

            document.getElementById("ValorMaximoGastar").innerHTML = "valor maximo possivel gastar: R$ "
                + ValorPodeGastar.toFixed(2);

            // esconde o formulário de gastos essenciais
            document.getElementById("essenciais").style.display = "none";

            // mostra o formulário de gastos não essenciais
            document.getElementById("nao-essenciais").style.display = "block";

            document.getElementById("registro").style.display = "block";

            document.getElementById("relatorio").style.display = "none";

        }

    }
}

//Função ao apertar botão registrar gastos do dia
function GastosNaoEssenciais() {


    if (formulario2.checkValidity()) {

        if (diaAtual <= 31) {

            formularioVazio();


            //Exibir dia que foi realizado o gasto  

            //Criando uma tag <p> para inserir o valor do dia atual
            let pDiaDosGastos = document.createElement("p");

            // Inserindo na tag <p> o texto e o dia atual
            pDiaDosGastos.textContent = " ****** Gastos do dia " + diaAtual.toString().padStart(2, '0') + " ****** ";
            //metodo padStart para valor do dia estava usando 2 letras

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pDiaDosGastos);

            //Exibir gastos de Entretenimento

            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastoEntretenimento = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastoEntretenimento.textContent = "O valor gasto com Entretenimento foi: R$ " + EntretenimentoInput;

            TotalEntretenimento += EntretenimentoInput;

            //Ajustando espaçamento do paragrafo
            pValorGastoEntretenimento.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastoEntretenimento);

            //Exibir gastos de Moda              

            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastoModa = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastoModa.textContent = "O valor gasto com Moda e Beleza foi: R$ " + ModaInput;

            TotalModa += ModaInput;

            //Ajustando espaçamento do paragrafo
            pValorGastoModa.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastoModa);

            //Exibir gastos de fastfood

            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastofastfood = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastofastfood.textContent = "O valor gasto com fastfood foi: R$ " + fastfoodInput;

            Totalfastfood += fastfoodInput;

            //Ajustando espaçamento do paragrafo
            pValorGastofastfood.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastofastfood);

            //Exibir gastos de Viagens


            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastoViagens = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastoViagens.textContent = "O valor gasto com Viagens foi: R$ " + ViagensInput;

            TotalViagens += ViagensInput;

            //Ajustando espaçamento do paragrafo
            pValorGastoViagens.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastoViagens);

            //Exibir gastos de Eletronicos


            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastoEletronicos = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastoEletronicos.textContent = "O valor gasto com Eletronicos foi: R$ " + EletronicosInput;

            TotalEletronicos += EletronicosInput

            //Ajustando espaçamento do paragrafo
            pValorGastoEletronicos.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastoEletronicos);

            //Exibir gastos de Utensilios


            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastoUtensilios = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastoUtensilios.textContent = "O valor gasto com Utensilios foi: R$ " + UtensiliosInput;

            TotalUtensilios += UtensiliosInput

            //Ajustando espaçamento do paragrafo
            pValorGastoUtensilios.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastoUtensilios);

            //Exibir gastos de OutrosNao

            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorGastoOutrosNao = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorGastoOutrosNao.textContent = "O valor gasto com outras coisas não essencial foi: R$ " + OutrosNaoInput;

            TotalOutrosNao += OutrosNaoInput;

            //Ajustando espaçamento do paragrafo
            pValorGastoOutrosNao.style.margin = "3px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorGastoOutrosNao);


            //Exibir total gasto no dia

            //Recebendo Total Gasto no dia                 
            TotalGastoNoDia = EntretenimentoInput + ModaInput + fastfoodInput + ViagensInput + EletronicosInput
                + UtensiliosInput + OutrosNaoInput;

            EconomiaMinima();

            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorTotalGastoDia = document.createElement("p");

            // Inserindo um texto na tag <p> que foi criada acima
            pValorTotalGastoDia.textContent = "O Total gasto nesse dia foi: R$ " + TotalGastoNoDia;


            //Ajustando espaçamento do paragrafo
            pValorTotalGastoDia.style.margin = "6px";

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorTotalGastoDia);

            //Exibir observação do dia

            // Criando uma tag <p> para exibir o valor do entrenimento 
            let pValorObservacao = document.createElement("p");

            if (ObservacaoInput != "") {
                // Inserindo um texto na tag <p> que foi criada acima
                pValorObservacao.textContent = "Observação do dia: " + ObservacaoInput;
            } else {
                ObservacaoInput = "Esse dia nao possui Observação ";
                pValorObservacao.textContent = ObservacaoInput;
            }

            //Informar que esse essa tag <p> vai ser filho da tag fieldset com id registro
            registro.appendChild(pValorObservacao);



            //Mostrando avisos conforme vai gastando

            if (ValorSugeridoGastarPorDia >= 0) {
                document.getElementById("ValorSugeridoDiario").innerHTML = "valor sugerido gastar por dia: R$ "
                    + ValorSugeridoGastarPorDia.toFixed(2);

            }
            else {
                document.getElementById("ValorSugeridoDiario").innerHTML = "Não é recomendado realizar gastos nesse mês para manter a economia!"
            }

            document.getElementById("MetaEconomia").innerHTML = "Meta de economia desse Mês: R$ "
                + EconomiaInput;


            if (ValorPodeGastar > 0) {

                document.getElementById("ValorMaximoGastar").innerHTML = "valor maximo possivel gastar: R$ "
                    + ValorPodeGastar.toFixed(2);

                if (PorcetagemGastoNaoEssencial > 90 && PorcetagemGastoNaoEssencial <= 100) {

                    alert("Você gastou mais que 90% do valor que podia gastar nesse Mês!");

                }

            }
            else if (ValorPodeGastar == 0) {
                alert("Você atingiu o valor maximo que pode gastar no mês! ")
                document.getElementById("ValorMaximoGastar").innerHTML = "Você atingiu o valor maximo que pode gastar no mês! "

            }
            //Se valor pode gastar menor que zero
            else {

                alert("Você Ultrapassou o valor maximo que podia gastar no Mês!")

                document.getElementById("ValorMaximoGastar").innerHTML = "Você Ultrapassou o valor maximo que podia gastar no Mês!"
                document.getElementById("ValorMaximoGastar").style.color = "red";

                document.getElementById("MetaEconomia").innerHTML = "Valor restante possivel economizar: " + MaximoEconomia.toFixed(2);

            }

            if (TotalEssencial > 0) {

                if (MaximoEconomia < 0) {

                    alert("Você Ultrapassou o valor reservado para os gastos Essenciais!")

                    document.getElementById("ValorMaximoGastar").innerHTML = "Você Ultrapassou o valor reservado para os gastos Essenciais! "
                    document.getElementById("ValorMaximoGastar").style.color = "red";

                    document.getElementById("MetaEconomia").innerHTML = "Não é possivel economizar esse mês! <br> " +
                        "foi gasto R$ " + Math.abs(MaximoEconomia.toFixed(2)) + " dos R$ " + TotalEssencial.toFixed(2) + " que estava reservado para os gastos Essenciais";
                    document.getElementById("ValorMaximoGastar").style.color = "red";


                }

            }

            if (TotalNaoEssencial > RendaInput) {

                alert("Você Ultrapassou o valor da sua renda!")
                document.getElementById("ValorMaximoGastar").innerHTML = "Você Ultrapassou o valor da sua renda com gastos não essenciais! "
                document.getElementById("ValorMaximoGastar").style.color = "red";

                document.getElementById("MetaEconomia").innerHTML = "Seu Saldo é de R$ " + MaximoEconomia.toFixed(2);

                document.getElementById("MetaEconomia").style.color = "red";


            }

            InformacaoRelatorio();



            if (TotalNaoEssencial == 0) {
                document.getElementById("pDiaMaiorGasto").innerHTML = "Você teve nenhum gasto com coisas não essenciais esse Mês!";
                document.getElementById("pObservacaoDiaMaiorGasto").innerHTML = ""

            }
            else if (TotalGastoNoDia > ValorDiaMaiorGasto) {

                ValorDiaMaiorGasto = TotalGastoNoDia
                DiaMaiorGasto = diaAtual;
                document.getElementById("pDiaMaiorGasto").innerHTML = "Você teve maior gasto no dia " + DiaMaiorGasto
                    + " O valor gasto nesse dia foi R$ " + ValorDiaMaiorGasto;
                document.getElementById("pObservacaoDiaMaiorGasto").innerHTML = "Observação desse dia: " + ObservacaoInput;
                MaisDeUmDia = diaAtual.toString();

            }

            else if (TotalGastoNoDia == ValorDiaMaiorGasto) {


                MaisDeUmDia += " - " + diaAtual.toString()

                document.getElementById("pDiaMaiorGasto").innerHTML = "Os dias com maiores gastos foram : " + MaisDeUmDia
                    + " O valor gasto nesses dias foi R$ " + ValorDiaMaiorGasto;
                document.getElementById("pObservacaoDiaMaiorGasto").innerHTML = "Verifique o Registro para ver as Observações desses dias ";


            }

            // Dia atual ganha + 1
            diaAtual++;

            //Outra verificação para manter dia ao qual o usario estar insirindo valor 1 a mais do que estar no registro
            if (diaAtual <= 31) {

                //modifica o texto da tag p com id Dia
                document.getElementById("dia").innerHTML = "Dia " + diaAtual.toString().padStart(2, '0') + " - Informe os gastos realizado hoje :";

            }
            // Caso chegue no dia 31 finaliza
            else {

                RertornoEssenciais();
            }

        }
    }

}

//limpa formulario 
function limparFormulario() {

    // verifica se todos os campos obrigatórios estão preenchidos e no formato correto
    if (formulario2.checkValidity()) {

        // limpa o formulário se os campos estiverem válidos
        formulario2.reset();

    }

}

//realiza todos os calculos
function EconomiaMinima() {


    //conversaoInput();

    formularioVazio();

    //Total dos valores essencial
    TotalEssencial = AluguelInput + AguaInput + EnergiaInput
        + TelefoneInput + GasInput + AlimentacaoInput + transporteInput + OutrosInput;

    TotalNaoEssencial = TotalEntretenimento + TotalModa + Totalfastfood + TotalViagens
        + TotalEletronicos + TotalUtensilios + TotalOutrosNao;

    SomaEssencialEconomia = TotalEssencial + EconomiaInput;

    TotalGastoNoMes = TotalEssencial + TotalNaoEssencial

    MaximoEconomia = (RendaInput - TotalGastoNoMes);

    ValorPodeGastar = MaximoEconomia - EconomiaInput;

    valorPodeGastarFixo = RendaInput - TotalEssencial - EconomiaInput;

    ValorSugeridoGastarPorDia = ValorPodeGastar / 31;

    PorcetagemGastoNaoEssencial = (TotalNaoEssencial / valorPodeGastarFixo) * 100;




}

//atribuir valor 0 ser campo estiver vazio
function formularioVazio() {

    conversaoInput();

    //Essenciais 

    if (isNaN(EnergiaInput)) {
        EnergiaInput = 0;
        document.getElementById("Energia").value = 0;
    }

    if (isNaN(TelefoneInput)) {
        TelefoneInput = 0;
        document.getElementById("Telefone").value = 0;
    }

    if (isNaN(GasInput)) {
        GasInput = 0;
        document.getElementById("Gas").value = 0;
    }

    if (isNaN(AlimentacaoInput)) {
        AlimentacaoInput = 0;
        document.getElementById("Alimentacao").value = 0;
    }

    if (isNaN(transporteInput)) {
        transporteInput = 0;
        document.getElementById("Transporte").value = 0;
    }

    if (isNaN(OutrosInput)) {
        OutrosInput = 0;
        document.getElementById("Outros").value = 0;


    }
    if (isNaN(AluguelInput)) {
        AluguelInput = 0;
        document.getElementById("Aluguel").value = 0;
    }

    if (isNaN(AguaInput)) {
        AguaInput = 0;
        document.getElementById("Agua").value = 0;
    }

    //Não Essenciais 

    if (isNaN(EntretenimentoInput)) {
        EntretenimentoInput = 0;

    }

    if (isNaN(ModaInput)) {
        ModaInput = 0;

    }

    if (isNaN(fastfoodInput)) {
        fastfoodInput = 0;

    }

    if (isNaN(ViagensInput)) {
        ViagensInput = 0;

    }

    if (isNaN(EletronicosInput)) {
        EletronicosInput = 0;

    }

    if (isNaN(UtensiliosInput)) {
        UtensiliosInput = 0;



    }
    if (isNaN(OutrosNaoInput)) {
        OutrosNaoInput = 0;

    }




}

//Mandando Valores para relatorio
function InformacaoRelatorio() {

    //EconomiaMinima();

    document.getElementById("pTotalGastoNoMes").innerHTML = "O valor total gasto no Mês foi: "
        + TotalGastoNoMes.toFixed(2)

    document.getElementById("pTotalEssencial").innerHTML = "O valor total de gasto Essencial no Mês foi: "
        + TotalEssencial.toFixed(2)

    document.getElementById("pTotalNaoEssencial").innerHTML = "O valor total de gasto Não Essencial no Mês foi: "
        + TotalNaoEssencial.toFixed(2)

    document.getElementById("pTotalEntretenimento").innerHTML = "O valor total de gasto com Entretenimento no Mês foi: "
        + TotalEntretenimento.toFixed(2)

    document.getElementById("pTotalModa").innerHTML = "O valor total de gasto com Moda e Beleza no Mês foi: "
        + TotalModa.toFixed(2)

    document.getElementById("pTotalfastfood").innerHTML = "O valor total de gasto com FastFood no Mês foi: "
        + Totalfastfood.toFixed(2)

    document.getElementById("pTotalViagens").innerHTML = "O valor total de gasto com Viagens no Mês foi: "
        + TotalViagens.toFixed(2)

    document.getElementById("pTotalEletronicos").innerHTML = "O valor total de gasto com Eletronicos no Mês foi: "
        + TotalEletronicos.toFixed(2)

    document.getElementById("pTotalUtensilios").innerHTML = "O valor total de gasto com Utensilios no Mês foi: "
        + TotalUtensilios.toFixed(2)

    document.getElementById("pTotalOutrosNao").innerHTML = "O valor total de gasto com outras coisas não essencial no Mês foi: "
        + TotalOutrosNao.toFixed(2)



    if (MaximoEconomia == EconomiaInput) {

        document.getElementById("pMessagemMeta").innerHTML = "Parabéns! Você conseguiu atingir sua meta de enconomia <br> "
            + "Voce economizou R$ " + EconomiaInput + " esse mês"
    }
    else if (MaximoEconomia > EconomiaInput) {
        document.getElementById("pMessagemMeta").innerHTML = "Parabéns! Você conseguiu economizar mais que sua meta de economia <br> "
            + "Sua meta de economia é R$ " + EconomiaInput.toFixed(2) + " Você conseguiu economizar R$ " + ValorPodeGastar.toFixed(2) + " a mais que sua meta"
    }
    else if (MaximoEconomia < EconomiaInput && MaximoEconomia > 0) {
        document.getElementById("pMessagemMeta").innerHTML = "Infelizmente você nao conseguiu atingir a meta de economia esse mês <br> "
            + "Porém você consegiu economizar R$ " + MaximoEconomia.toFixed(2) + " nesse mês"

    } else if (MaximoEconomia == 0) {
        document.getElementById("pMessagemMeta").innerHTML = "Infelizmente você nao conseguiu economizar esse mês <br> "

    } else if (MaximoEconomia < 0) {

        document.getElementById("pMessagemMeta").innerHTML = "Você Ultrapassou o valor da sua renda ! <br> " +
            "Seu Saldo é de R$ " + MaximoEconomia.toFixed(2);

        document.getElementById("pMessagemMeta").style.color = "red";


    }



}

//Função Esconder Cabeçalho
function EsconderCabecalho() {

    document.getElementById("Cabecalho").style.display = "none";
    document.getElementById("botaoCabecalho").style.display = "block";

}

//Função Mostrar Cabeçalho
function MostrarCabecalho() {

    document.getElementById("Cabecalho").style.display = "block";
    document.getElementById("botaoCabecalho").style.display = "none";

}