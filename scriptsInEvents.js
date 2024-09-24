


const scriptsInEvents = {

	async EventSheet1_Event2_Act9(runtime, localVars)
	{
		// Obtenha o valor da variável global 'UserInput'
		const userInput = runtime.globalVars.UserInput;
		
		// Estrutura do corpo da mensagem para limpar o histórico de conversas
		const messageData = {
		    // Prompt inicial para iniciar a conversa
		    Userinput: userInput, // Enviando o input do usuário
		    resetHistory: true // Comando para resetar o histórico
		};
		
		// Teste de conexão com a API, enviando o input do usuário e resetando o histórico
		fetch('https://34.82.78.95/api/proxy.php', {
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(messageData)
		})
		.then(response => {
		    // Verifica se a resposta foi bem-sucedida
		    if (!response.ok) {
		        throw new Error('Erro na rede ou API não disponível');
		    }
		    return response.json();
		})
		.then(data => {
		    // Exibe a resposta completa da API no console
		    console.log('Estrutura completa da resposta da API:', JSON.stringify(data));
		
		    // Verifica se a API reconheceu o reset do histórico
		    if (data.resetStatus === "success") {
		        console.log("Histórico da API resetado com sucesso.");
		    } else if (data.resetStatus === "failed") {
		        console.log("Falha ao resetar o histórico da API.");
		    } else {
		        console.log("Reset do histórico não foi processado.");
		    }
		
		    // Limpa a variável global 'BotResponse' antes de armazenar a nova resposta
		    runtime.globalVars.BotResponse = ""; 
		
		    // Armazena a resposta da API na variável global 'BotResponse', se presente
		    runtime.globalVars.BotResponse = data.AIResponse ? data.AIResponse.toString() : "Sem resposta";
		
		    // Sinaliza que a resposta foi recebida para o Construct
		    runtime.globalVars.ResponseReceived = true; 
		    
		    // Log para verificar o que está sendo armazenado na variável
		    console.log('BotResponse armazenada:', runtime.globalVars.BotResponse);
		})
		.catch(error => {
		    // Mostra erros no console, se houver
		    console.error('Erro ao conectar com a API:', error);
		    runtime.globalVars.BotResponse = "Erro na conexão com a API";
		});
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

