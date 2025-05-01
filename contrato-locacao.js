document.getElementById("contractGenerator").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura dos dados do formulário
    const ownerName = document.getElementById("ownerName").value;
    const nationality = document.getElementById("nationality").value;
    const maritalStatus = document.getElementById("maritalStatus").value;
    const occupation = document.getElementById("occupation").value;
    const rgNumber = document.getElementById("rgNumber").value;
    const cpfNumber = document.getElementById("cpfNumber").value;
    const propertyAddressFull = document.getElementById("propertyAddressFull").value;

    const tenantName = document.getElementById("tenantName").value;
    const tenantNationality = document.getElementById("tenantNationality").value;
    const tenantMaritalStatus = document.getElementById("tenantMaritalStatus").value;
    const tenantOccupation = document.getElementById("tenantOccupation").value;
    const tenantRg = document.getElementById("tenantRg").value;
    const tenantCpf = document.getElementById("tenantCpf").value;

    const propertyType = document.getElementById("propertyType").value;
    const propertyAddressFullImovel = document.getElementById("propertyAddressFullImovel").value;
    const rentalValue = document.getElementById("rentalValue").value;
    const rentalValueText = document.getElementById("rentalValueText").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const securityDeposit = document.getElementById("securityDeposit").value;
    const reajuste = document.getElementById("reajuste").value;
    const signatureDate = document.getElementById("signatureDate").value;

    // Formatação da data de assinatura para exibição
    const assinaturaFormatada = new Date(signatureDate).toLocaleDateString("pt-BR", {
        day: '2-digit', month: 'long', year: 'numeric'
    });

    // Geração do texto do contrato
    const contrato = `
<h2>CONTRATO DE LOCAÇÃO RESIDENCIAL</h2>

<strong>IDENTIFICAÇÃO DAS PARTES</strong><br>
LOCADOR(A): ${ownerName}, ${nationality}, ${occupation}, ${maritalStatus}, portador do RG nº ${rgNumber}, inscrito no CPF nº ${cpfNumber}, residente à ${propertyAddressFull}.<br><br>

LOCATÁRIO(A): ${tenantName}, ${tenantNationality}, ${tenantOccupation}, ${tenantMaritalStatus}, portador(a) do RG nº ${tenantRg}, inscrito(a) no CPF nº ${tenantCpf}, residente em Terra Roxa PR.<br><br>

<strong>CLÁUSULA 01 - DO IMÓVEL</strong><br>
O LOCADOR(A) dá em locação ao LOCATÁRIO(A) o imóvel ${propertyType}, situado à ${propertyAddressFullImovel}.<br><br>

<strong>CLÁUSULA 02 – DO PRAZO </strong><br>
O prazo de locação é de 12 (doze) meses, com início em ${startDate} e término em ${endDate}.<br><br>

<strong>CLÁUSULA 03 – DA RENOVAÇÃO </strong><br>
A renovação será automática para mais 12 (doze) meses, se nenhuma das partes se manifestar em contrário.<br><br>

<strong>CLÁUSULA 04 – DO ALUGUEL </strong><br>
O aluguel mensal é de R$ ${rentalValue} (${rentalValueText}), a ser pago até o dia 05 de cada mês mediante depósito em conta indicada pelo LOCADOR(A) ou via Pix (CPF).<br><br>

<strong>CLÁUSULA 05 – DO REAJUSTE</strong><br>
O aluguel será reajustado conforme periodicidade ${reajuste}.<br><br>

<strong>CLÁUSULA 06 – DAS DESPESAS</strong><br>
O LOCATÁRIO(A) é responsável pelas despesas de consumo: água, energia elétrica, esgoto e taxas relativas ao imóvel, ou ainda serviços contratados pelo(a) Inquilino(a) .<br><br>

<strong>CLÁUSULA 07 – DO USO DO IMÓVEL</strong><br>
O imóvel será destinado exclusivamente à residência do LOCATÁRIO(A) e familiares, sendo vedada a sublocação ou cessão sem autorização expressa do LOCADOR(A).<br><br>

<strong>CLÁUSULA 08 – DA CONSERVAÇÃO</strong><br>
O LOCATÁRIO(A) compromete-se a conservar o imóvel em bom estado, respondendo por danos decorrentes de uso indevido.<br><br>

<strong>CLÁUSULA 09 – DA MULTA POR INADIMPLÊNCIA</strong><br>
O atraso no pagamento do aluguel acarretará multa de 10%, juros de 1% ao mês e correção monetária.<br><br>

<strong>CLÁUSULA 10 – DA RESCISÃO</strong><br>
Em caso de descumprimento ou rescisão antecipada, a parte infratora pagará multa equivalente a três aluguéis mensais.<br><br>

<strong>CLÁUSULA 11 – DAS COMUNICAÇÕES</strong><br>
Todas as comunicações deverão ser feitas por escrito.<br><br>

<strong>CLÁUSULA 12 – OUTRAS INFORMAÇÕES </strong><br>
A LOCATÁRIO(A) tem ciência de que o imóvel ora locado encontra-se 
disponível para venda, ficando desde já autorizada a entrada de terceiros 
que demonstrarem interesse na compra. 

<strong>DO FORO</strong><br>
Fica eleito o foro da Comarca de Terra Roxa - PR para dirimir quaisquer dúvidas oriundas deste contrato.<br><br>

Terra Roxa - PR, ${assinaturaFormatada}.<br><br>


_________________________________________<br>
LOCADOR(A): ${ownerName}<br><br>


_________________________________________<br>
LOCATÁRIO(A): ${tenantName}<br><br>

<strong>Testemunhas:</strong><br>
1. Nome: ____________________________________ CPF: ______________________<br>

2. Nome: ____________________________________ CPF: ______________________
`;

    // Exibição do contrato gerado
    document.getElementById("generatedContract").innerHTML = contrato;
    // Mostrar o botão de download
document.getElementById("downloadPdfBtn").style.display = "block";

// Adiciona evento ao botão para gerar o PDF
document.getElementById("downloadPdfBtn").addEventListener("click", function () {
    const element = document.getElementById("generatedContract");

    const opt = {
        margin:       0.5,
        filename:     'contrato-locacao.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});

});
