// Início: Cliente da Twitch e canal alvo das mensagens.

    const client = require('./cliente.js');
    const canal = 'Canal onde o bot vai enviar mensagens';
    client.connect();

// Fim: Cliente da Twitch e canal alvo das mensagens.



// Início: Carregamento de módulos/funções via 'require'.

    const agendarMensagens = require('./Funções/programarMensagens.js');

    const comandoSigno = require('./Funções/signosEnviar.js');

    const monitorarMensagensDeus = require('./Funções/deusMaiusculo.js');

    const avisosAleatorios = require('./Funções/AvisosRotativos.js');

    const monitorComandos = require('./Funções/comandosDiversos.js');
    
    const eventosLive = require('./Funções/lidarEventosLive.js')

// Fim: Carregamento de módulos/funções via 'require'.



// Início: Programação de mensagens para envio em horários específicos.

    agendarMensagens(client, canal, 0, 0, 'Adicionar sua mensagem.');

    agendarMensagens(client, canal, 23, 57, 'Adicionar sua mensagem.');

// Fim: Programação de mensagens para envio em horários específicos.



// Início: Programador de mensagens para envio em horários aleatórios (intervalo de 30 minutos a 1 hora).

    avisosAleatorios("Adicionar sua mensagem.", canal, client);

    avisosAleatorios("Adicionar sua mensagem.", canal, client);

// Fim: Programador de mensagens para envio em horários aleatórios.



// Início: Seção de comandos.

    // Início: Seção de comandos simples.

        // Comandos simples que respondem citando o usuário que acionou o comando.
            monitorComandos.MonitorDeComandoComCitacao(client, canal, "!alias do seu comando.", "Resposta do seu comando.")

        // Comandos simples que respondem sem citar o usuário que acionou o comando.
            monitorComandos.MonitorDeComandoSemCitacao(client, canal, "!alias do seu comando.", "Resposta do seu comando.")

        // Comandos simples que respondem citando o moderador ou streamer que acionou o comando.
            monitorComandos.MonitorDeComandoParaModsEStreamerComCitacao(client, canal, "!alias do seu comando.", "Resposta do seu comando.")

        // Comandos simples que respondem sem citar o moderador ou streamer que acionou o comando.
            monitorComandos.MonitorDeComandoParaModsEStreamerSemCitacao(client, canal, "!alias do seu comando.", "Resposta do seu comando.")

    // Fim: Seção de comandos simples.



    // Início: Seção de comandos complexos.

        // Comando !signo
            comandoSigno(client);

        // Monitoramento para verificar se a palavra "Deus" está sendo escrita com "D" maiúsculo.
            monitorarMensagensDeus(client);

    // Fim: Seção de comandos complexos.

// Fim: Seção de comandos.



// Início: Seção para lidar com eventos. (Modifique para suas frases de agradecimento.)

    // Acionado em renovações de assinatura. Retorna usuário, meses e mensagem.
        eventosLive.mensagemResub(client, "Obrigado por mais um mês, {user}! Total de {meses} meses. Você disse: '{mensagem}'"); // Variáveis {user}, {meses}, {mensagem}

    // Acionado em novas assinaturas. Retorna usuário e mensagem.
        eventosLive.mensagemSub(client, "Obrigado pela assinatura, {user}! Você disse: '{mensagem}'"); // Variáveis {user}, {mensagem}

    // Acionado quando um usuário dá uma assinatura de presente. Retorna usuário, meses e receptor.
        eventosLive.mensagemSubGift(client, "{user} deu uma assinatura para {recebedor}. {recebedor} agora tem {meses} de sub Obrigado!"); // Variáveis {user}, {recebedor}, {meses}

    // Disparado para assinaturas de presente anônimas. Retorna receptor e meses.
        eventosLive.mensagemAnonSubGift(client, "Alguém deu uma assinatura para {recebedor} de forma anônima. {recebedor} agora tem {meses} de sub, obrigado!"); // Variáveis {recebedor}, {meses}

    // Acionado quando assinaturas são dadas aleatoriamente. Retorna usuário e contagem de assinaturas.
        eventosLive.mensagemSubMysteryGift(client, "{user} deu {quantidade} assinaturas para espectadores aleatórios. Muito obrigado!"); // Variáveis {user}, {quantidade}

    // Acionado quando usuário do Prime atualiza. Retorna usuário.
        eventosLive.mensagemPrimePaidUpgrade(client, "{user} atualizou de Twitch Prime para uma assinatura regular. Obrigado!"); // Variáveis {user}

    // Acionado quando assinatura de presente é continuada. Retorna usuário e doador.
        eventosLive.mensagemGiftPaidUpgrade(client, "{user} decidiu continuar a assinatura que {quemEnviou} deu! Obrigado!"); // Variáveis {user}, {quemEnviou}

    // Assinatura de presente anônima continuada. Retorna usuário.
        eventosLive.mensagemAnonGiftPaidUpgrade(client, "{user} decidiu continuar a assinatura anônima. Obrigado!"); // Variáveis {user}

    // Acionado quando ocorre uma raid. Retorna usuário que fez a raid e contagem de espectadores.
        eventosLive.mensagemRaid(client, "Estamos sendo raidados por {user} com {viewers} espectadores! Obrigado pelo raid!"); // Variáveis {user}, {viewers}

// Fim: Seção para lidar com eventos.