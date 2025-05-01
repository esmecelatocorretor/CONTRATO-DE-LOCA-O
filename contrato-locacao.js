document.getElementById("contractGenerator").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coletar os dados do formulário
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
    const reajuste = document.getElementById("reajuste").value;
    const signatureDate = document.getElementById("signatureDate").value;

    // Verificação de campos obrigatórios
    if (!ownerName || !tenantName || !propertyType || !propertyAddressFullImovel || !rentalValue || !startDate || !endDate || !signatureDate) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Formatação da data de assinatura
    const assinaturaFormatada = new Date(signatureDate).toLocaleDateString("pt-BR", {
        day: '2-digit', month: 'long', year: 'numeric'
    });

    // Geração do contrato
    const contrato = `
        <style>
            body {
                font-family: 'Times New Roman', serif;
                font-size: 12pt;
                line-height: 1.15;
                margin: 3cm;
                text-align: justify;
            }
            h2 {
                text-align: center;
                font-size: 14pt;
                margin-bottom: 20px;
            }
            p {
                text-align: justify;
                margin-bottom: 10px;
            }
            strong {
                font-weight: bold;
            }
        </style>

        <h2>CONTRATO DE LOCAÇÃO RESIDENCIAL</h2>

        <p><strong>IDENTIFICAÇÃO DAS PARTES</strong></p>

        <p><strong>LOCADOR(A):</strong> ${ownerName}, ${nationality}, ${occupation}, ${maritalStatus}, portador do RG nº ${rgNumber}, inscrito no CPF nº ${cpfNumber}, residente à ${propertyAddressFull}.</p>

        <p><strong>LOCATÁRIO(A):</strong> ${tenantName}, ${tenantNationality}, ${tenantOccupation}, ${tenantMaritalStatus}, portador(a) do RG nº ${tenantRg}, inscrito(a) no CPF nº ${tenantCpf}, residente em Terra Roxa PR.</p>

        <p><strong>CLÁUSULA 01 - DO IMÓVEL</strong></p>

        <p>O LOCADOR(A) dá em locação ao LOCATÁRIO(A) o imóvel ${propertyType}, situado à ${propertyAddressFullImovel}.</p>

        <p><strong>CLÁUSULA 02 – DO PRAZO</strong></p>

        <p>O prazo de locação é de 12 (doze) meses, com início em ${startDate} e término em ${endDate}.</p>

        <p><strong>CLÁUSULA 03 – DA RENOVAÇÃO</strong></p>

        <p>A renovação será automática para mais 12 (doze) meses, se nenhuma das partes se manifestar em contrário.</p>

        <p><strong>CLÁUSULA 04 – DO ALUGUEL</strong></p>

        <p>O aluguel mensal é de R$ ${rentalValue} (${rentalValueText}), a ser pago até o dia 05 de cada mês mediante depósito em conta indicada pelo LOCADOR(A) ou via Pix (CPF).</p>

        <p><strong>CLÁUSULA 05 – DO REAJUSTE</strong></p>

        <p>O aluguel será reajustado conforme periodicidade ${reajuste}.</p>

        <p><strong>CLÁUSULA 06 – DAS DESPESAS</strong></p>

        <p>O LOCATÁRIO(A) é responsável pelas despesas de consumo: água, energia elétrica, esgoto e taxas relativas ao imóvel.</p>

        <p><strong>CLÁUSULA 07 – DO USO DO IMÓVEL</strong></p>

        <p>O imóvel será destinado exclusivamente à residência do LOCATÁRIO(A) e familiares.</p>

        <p><strong>CLÁUSULA 08 – DA CONSERVAÇÃO</strong></p>

        <p>O LOCATÁRIO(A) compromete-se a conservar o imóvel em bom estado, respondendo por danos decorrentes de uso indevido.</p>

        <p><strong>CLÁUSULA 09 – DA MULTA POR INADIMPLÊNCIA</strong></p>

        <p>O atraso no pagamento do aluguel acarretará multa de 10%, juros de 1% ao mês e correção monetária.</p>

        <p><strong>CLÁUSULA 10 – DA RESCISÃO</strong></p>

        <p>Em caso de descumprimento, a parte infratora pagará multa equivalente a três aluguéis mensais.</p>

        <p><strong>CLÁUSULA 11 – DAS COMUNICAÇÕES</strong></p>

        <p>Todas as comunicações deverão ser feitas por escrito.</p>

        <p><strong>CLÁUSULA 12 – DO FORO</strong></p>

        <p>Fica eleito o foro da Comarca de Terra Roxa - PR para dirimir quaisquer dúvidas oriundas deste contrato.</p>

        <p>Terra Roxa - PR, ${assinaturaFormatada}.</p>

        <p>_________________________________________<br>LOCADOR(A): ${ownerName}</p>

        <p>_________________________________________<br>LOCATÁRIO(A): ${tenantName}</p>

        <p><strong>Testemunhas:</strong></p>

        <p>1. Nome: ____________________________________ CPF: ______________________</p>

        <p>2. Nome: ____________________________________ CPF: ______________________</p>
    `;

    // Exibindo o contrato gerado no HTML
    document.getElementById("generatedContract").innerHTML = contrato;

    // Configuração do PDF
    const opt = {
        margin: 10,
        filename: 'contrato-locacao.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Criação do PDF
    const container = document.createElement('div');
    container.innerHTML = contrato;
    document.body.appendChild(container);

    html2pdf().from(container).set(opt).save().then(() => {
        document.body.removeChild(container);
    });
});
