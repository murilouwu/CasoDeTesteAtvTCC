function ocultar(obj, es){
    let div = document.querySelector(obj);
    if(es==1){
        div.style.display = 'flex';
    }else{
        div.style.display = 'none';
    };
};

function Condiction(Case){
    let res = '';
    for (let i = 0; i<CaseItem[Case][2].length; i++) {
        res += `
        <li>${CaseItem[Case][2][i]}</li>
        `;
    }

    return res;
}

function DataTabele(Case){
    let res = '';
    for(i=0; i<CaseItem[Case][3].length; i++){
        res += `
        <tr>
            <td class="start">${(i+1)}</td>
            <td>${(i+1)}-${CaseItem[Case][3][i][0]}</td>
            <td>${(i+1)}-${CaseItem[Case][3][i][1]}</td>
            <td>
                <div class="toggle-pill-dark">
                    <input type="checkbox" id="pill${i}">
                    <label for="pill${i}"></label>
                </div>
            </td>
        </tr>
        `;
    }
   return res;
}

function tableOpen(Case, ids){
    ocultar(ids[0], 1);
    ocultar(ids[1], 0);

    let Title = document.querySelector(ids[2]); //title
    Title.innerHTML = 'Caso de Teste - '+(Case+1);

    let ListCondiction = Condiction(Case);
    let dataTable = DataTabele(Case);
    let text = `
    <div class="titleTable">
        <i class="fa-solid fa-gear"></i>
        <h3>${CaseItem[Case][0]}</h3>
    </div>
    <div class="blockIn">
        <div class="ul">
            <h3 class="titleUl">Caso - ${(Case+1)}</h3>
        </div>
        <div class="ul">
            <h3 class="titleUl">Objetivo do teste</h3>
            <p class="description">
                ${CaseItem[Case][1]}
            </p>
        </div>
        <div class="ul">
            <h3 class="titleUl">Pré-condições</h3>
            <ol>
                ${ListCondiction}
            </ol>
        </div>
        <div class="ul">
            <table>
                <tbody>
                    <tr>
                        <th class="start"><i class="fa-solid fa-chess-knight"></i>#</th>
                        <th>Ações do Passo</th>
                        <th>Resultado Esperado</th>
                        <th><i class="fa-solid fa-check"></i><i class="space"></i><i class="fa-solid fa-xmark red"></i></th>
                    </tr>
                    ${dataTable}
                </tbody>
            </table>
        </div>
    </div>
    `;

    let Table = document.querySelector(ids[0]);
    Table.innerHTML = text;
}

function tableClose(QtCase, ids){
    ocultar(ids[0], 1);
    ocultar(ids[1], 0);
    
    let Title = document.querySelector(ids[2]);
    Title.innerHTML = 'Caso de Testes';

    let div = document.querySelector(ids[0]);
    div.innerHTML = '';
    for (var i = 0; i<QtCase; i++){
        div.innerHTML += `
            <button onclick="tableOpen(${i}, ['#Table', '#Btns', '.Title'])" class="btn">Case ${(i+1)}</a>
        `;
    }
}