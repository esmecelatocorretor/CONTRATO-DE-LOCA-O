document.addEventListener('DOMContentLoaded', function () {
    const contractGeneratorForm = document.getElementById('contractGenerator');
    const generatedContract = document.getElementById('generatedContract');

    contractGeneratorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        generateContract();
    });

    function generateContract() {
        const ownerName = document.getElementById('ownerName').value;
        const nationality = document.getElementById('nationality').value;
        const maritalStatus = document.getElementById('maritalStatus').value;
        const occupation = document.getElementById('occupation').value;
        const rgNumber = document.getElementById('rgNumber').value;
        const cpfNumber = document.getElementById('cpfNumber').value;
        const ownerAddress = document.getElementById('ownerAddress').value;
        const tenantName = document.getElementById('tenantName').value;
        const tenantCPF = document.getElementById('tenantCPF').value;
        const tenantRG = document.getElementById('tenantRG').value;
        const tenantAddress = document.getElementById('tenantAddress').value;
        const rentalValue = document.getElementById('rentalValue').value;
        const rentalValueText = document.getElementById('rentalValueText').value;
        const propertyAddress = document.getElementById('propertyAddress').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const dueDate = document.getElementById('dueDate').value;
        const signatureDate = document.getElementById('signatureDate').value;

        const contractText = `    
CONTRATO DE LOCAÇÃO DE IMÓVEL RESIDENCIAL

LOCADOR: ${ownerName}, ${nationality}, ${maritalStatus}, ${occupation}, RG nº ${rgNumber}, CPF nº ${cpfNumber}, residente à ${ownerAddress}.

LOCATÁRIO: ${tenantName}, portador do RG nº ${tenantRG} e do CPF nº ${tenantCPF}, residente à ${tenantAddress}.

As partes acima identificadas têm entre si justo e contratado o que segue:

CLÁUSULA 1ª - DO OBJETO: O presente contrato tem como objeto o imóvel residencial situado à ${propertyAddress}, que será utilizado exclusivamente para fins de moradia do LOCATÁRIO.

CLÁUSULA 2ª - DO VALOR DO ALUGUEL: O aluguel mensal será de R$ ${rentalValue} (${rentalValueText}), com vencimento todo dia ${dueDate} de cada mês.

CLÁUSULA 3ª - DO PRAZO: O prazo da locação é de ${startDate} a ${endDate}, podendo ser renovado conforme legislação vigente.

CLÁUSULA 4ª - DAS OBRIGAÇÕES DO LOCADOR: O LOCADOR se compromete a entregar o imóvel em boas condições de uso, e a garantir seu uso pacífico durante a vigência do contrato.

CLÁUSULA 5ª - DAS OBRIGAÇÕES DO LOCATÁRIO: O LOCATÁRIO compromete-se a conservar o imóvel, pagar pontualmente o aluguel e encargos, e devolvê-lo nas mesmas condições recebidas, salvo desgastes naturais pelo uso.

CLÁUSULA 6ª - DO REAJUSTE: O valor do aluguel poderá ser reajustado anualmente, conforme índice previsto em lei.

CLÁUSULA 7ª - DAS PENALIDADES: O descumprimento de qualquer cláusula deste contrato sujeitará a parte infratora às penalidades legais.

CLÁUSULA 8ª - DO FORO: Fica eleito o foro da comarca de Terra Roxa - PR para dirimir quaisquer dúvidas ou litígios decorrentes deste contrato.

E por estarem justos e contratados, assinam o presente instrumento.

Terra Roxa - PR, ${signatureDate}.

LOCADOR:

_________________________________
${ownerName}

LOCATÁRIO:

_________________________________
${tenantName}

Testemunhas:

_________________________________ - CPF: __________________

_________________________________ - CPF: __________________
`;

        const contractWithStyles = `
        <div style="font-family: Arial, sans-serif; font-size: 14px; text-align: justify; margin-left: 5cm; margin-right: 1cm; margin-top: 2cm; margin-bottom: 2cm;">
            ${contractText.replace(/\n/g, '<br>')}
        </div>
        `;

        generatedContract.innerHTML = contractWithStyles;
    }
});
