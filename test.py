import requests
import pandas as pd
import json
import numpy as np

headers = {
    'authority': 'x14blnzsqf.execute-api.us-east-2.amazonaws.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,es;q=0.8',
    'dnt': '1',
    'origin': 'https://www.lanacion.com.ar',
    'referer': 'https://www.lanacion.com.ar/',
    'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
    'x-token': '36FE17A0-2E7B-456F-9855-124601188D55',
    'x-value': 'f794a873-33e0-40d1-99d0-c06331a6d507',
}



def partidosTerminados(fix):
    term=[]
    for x in fix:
        if x['status'] == 'full_time':
            term.append(x)
    return term




def calculoScore(fix,preds):
    finished=partidosTerminados(fix)
    preds_dict=get_preds_dict(fix,preds)
    puntos=[]
    for x in finished:
  
        resultado = (int(x['goal_1_opta']), int(x['goal_2_opta']))
        prediccion = (int(preds_dict[x['match_id']][0]['S']), int(preds_dict[x['match_id']][1]['S']))
        score=puntaje(prediccion, resultado)
        puntos.append(score)
    return np.array(puntos).sum()

def get_preds_dict(fix,preds):
    groups=['A','B','C','D','E','F','G','H']

    fixGrupos=[]
    for n in groups:
        grupo=[]
        for x in fix[:48]:
            if x['group']== n:
                grupo.append(x)
        fixGrupos.append(grupo)       

    ids_partidos=[]
    for i,x in enumerate(fixGrupos):
        for j,y in enumerate(x):
            if j == 4:
                ids_partidos.append(x[5]['match_id'])
            elif j == 5:
                ids_partidos.append(x[4]['match_id'])
            else:
                ids_partidos.append(y['match_id'])
    apreds=np.array(preds)
    preds48x2=apreds.reshape([48,2])
    preds_dict=dict(zip(ids_partidos, preds48x2))     
    return preds_dict

def puntaje(prediccion, resultado):
    if prediccion == resultado:
        return 5

    if np.sign(resultado[0] - resultado[1]) == np.sign(prediccion[0] - prediccion[1]):
        return 3

    return 0

def tablapuntos(x):
    preds=json.loads(x)
    return calculoScore(fix,preds)

def get_tabla(df):
    puntos=df.preds.apply(lambda x: tablapuntos(x))
    df['puntos']=puntos
    df2=df.sort_values('puntos',ascending=False)
    return df2.drop(['id','preds'], axis=1)

response = requests.get('https://x14blnzsqf.execute-api.us-east-2.amazonaws.com/prod/fixture', headers=headers)
fix=response.json()
df=pd.read_csv('https://raw.githubusercontent.com/carabedo/prode/main/results.csv')

print(get_tabla(df))