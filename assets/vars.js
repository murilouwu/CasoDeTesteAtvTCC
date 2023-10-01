/*
    0-Titulo do caso.
    1-Descrição do caso
    2-Pré condições
    3-tabela
        3,1 - Ações do passo
        3,2 - Resultado esperado
*/

const CaseItem = [];
CaseItem[0] = [
    'Cadastro',
    'Verificar o processo de cadastro em um aplicativo móvel, onde o usuário insere seus dados pessoais.',
    [
        'Pré-condição 1: O aplicativo está instalado no dispositivo móvel.',
        'Pré-condição 2: O dispositivo móvel está conectado à internet.',
        'Pré-condição 3: O usuário não possui uma conta registrada no aplicativo.'
    ],
    [
        [
            'Abre o aplicativo móvel.',
            'O aplicativo é aberto com sucesso.'
        ],
        [
            'Navega até a página de cadastro.',
            'A página de cadastro é exibida.'
        ],
        [
            'Preenche o formulário de cadastro com informações válidas.',
            'O formulário é preenchido sem erros.'
        ],
        [
            'Clica no botão "Cadastrar".',
            'O sistema processa o cadastro e redireciona o usuário para a página central do aplicativo.'
        ],
        [
            'Verifica se a página central é exibida.',
            'A página central é exibida corretamente, indicando que o cadastro foi bem-sucedido.'
        ]
    ]
];

CaseItem[1] = [
    'Login',
    'Verificar o processo de login em um aplicativo móvel, onde o usuário insere seu email e senha.',
    [
        'O aplicativo está instalado no dispositivo móvel.',
        'O dispositivo móvel está conectado à internet.',
        'O usuário possui uma conta registrada no aplicativo.'
    ],
    [
        [
            'Abre o aplicativo móvel.',
            'O aplicativo é aberto com sucesso.'
        ],
        [
            'Navega até a página de login.',
            'A página de login é exibida.'
        ],
        [
            'Preenche o formulário de login com email e senha corretos.',
            'O formulário é preenchido sem erros.'
        ],
        [
            'Clica na opção "Esqueceu a senha?".',
            'O usuário é direcionado para um formulário de recuperação de senha.'
        ],
        [
            'Preenche o formulário de recuperação de senha com informações válidas.',
            'O formulário de recuperação é preenchido corretamente.'
        ],
        [
            'Clica no botão "Enviar".',
            'O sistema processa a solicitação de recuperação de senha.'
        ],
        [
            'Verifica se o usuário é direcionado para a página de troca de senha.',
            'A página de troca de senha é exibida, indicando que a solicitação foi bem-sucedida.'
        ],
        [
            'Preenche o formulário de login com email e senha corretos.',
            'O formulário é preenchido sem erros.'
        ],
        [
            'Clica no botão "Entrar".',
            'O sistema verifica as informações de login e redireciona o usuário para a página central do aplicativo.'
        ],
        [
            'Verifica se a página central é exibida.',
            'A página central é exibida corretamente, indicando que o login foi bem-sucedido.'
        ]
    ]
];

CaseItem[2] = [
    'Rastreador',
    'Verificar o funcionamento do rastreador GPS em um aplicativo móvel, que localiza o veículo desejado em tempo real.',
    [
        'A localização em tempo real está ativada no dispositivo móvel.'
    ],
    [
        [
            'Abre o aplicativo móvel.',
            'O aplicativo é aberto com sucesso.'
        ],
        [
            'Navega até a seção de rastreamento.',
            'A seção de rastreamento é exibida.'
        ],
        [
            'Aperta a opção de rastreamento.',
            'O sistema inicia a busca pelo veículo.'
        ],
        [
            'Verifica se o veículo é localizado.',
            'Se o veículo for localizado com sucesso, o sistema exibe um mapa em tempo real mostrando a localização atual do veículo.'
        ]
    ]
];

CaseItem[3] = [
    'Carga Horária',
    'Verificar a funcionalidade que exibe ao usuário a carga horária de cada transporte em uma aplicação móvel.',
    [
        'As informações corretas do horário dos veículos estão disponíveis.'
    ],
    [
        [
            'Abre o aplicativo móvel.',
            'O aplicativo é aberto com sucesso.'
        ],
        [
            'Navega até a seção de "Carga Horária".',
            'A seção de "Carga Horária" é exibida.'
        ],
        [
            'Aperta a opção "Exibir Carga Horária".',
            'O sistema carrega as informações de carga horária para cada transporte disponível.'
        ],
        [
            'Verifica se a tabela de horário é exibida para cada rota de transporte.',
            'Cada rota de transporte exibe a respectiva tabela de horário com informações precisas sobre os horários disponíveis.'
        ]
    ]
];

CaseItem[4] = [
    'Perfil PCD',
    'Verificar a funcionalidade que exibe o perfil pessoal de cada usuário em um aplicativo móvel, com foco especial nos indivíduos com deficiência (PCDs).',
    [
        'As informações corretas dos usuários estão disponíveis.'
    ],
    [
        [
            'Abre o aplicativo móvel.',
            'O aplicativo é aberto com sucesso.'
        ],
        [
            'Navega até a seção de "Perfil PCD".',
            'A seção de "Perfil PCD" é exibida.'
        ],
        [
            'Aperta a opção "Exibir Informações Pessoais".',
            'O sistema carrega as informações pessoais do usuário, com foco nas informações relevantes para indivíduos PCDs.'
        ],
        [
            'Verifica se as informações cadastradas são exibidas corretamente.',
            'Todas as informações cadastradas pelo usuário, especialmente aquelas relevantes para PCDs, são exibidas com precisão.'
        ]
    ]
];
