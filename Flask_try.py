import numpy as np
import pandas as pd
import difflib
import pickle
import json
from flask import Flask,render_template,request
app=Flask(__name__,template_folder='templates',static_folder='static')

@app.route('/',methods=['POST','GET'])
def f():
    return render_template("s1.html")
   
@app.route('/t',methods=['POST','GET'])
def t():
    if request.method=='POST':
        todo=request.form.get('todo')
        # print(todo)
        ll=pro(todo)
        # print(ll)
        str1 = ','.join(str(e) for e in ll)
        print(str1)
        json_s=json.dumps(str1)
        print(json_s)
        # return render_template("s1.html",inds=pro(todo))
        return json_s


def pro(todo):
    with open('./anime_rec.pkl','rb') as f:
            similarity=pickle.load(f)
    all_df=pd.read_csv('./anime_modified.csv')
    # user_input=st.text_input("Enter anime you like")
    user_input=todo
    find_close_match=difflib.get_close_matches(user_input,all_df.name)
    # print(find_close_match)
    simi_list=[]
    try:
        index_close_match=all_df[all_df.name==find_close_match[0]].index
    except:
        # st.text('No anime found')
        # print("No anime found")
        return simi_list
    else:
        # index_close_match[0]
        sm2=list(enumerate(similarity[index_close_match[0]]))
        sm2.sort(reverse=True,key=lambda x:x[1])
        count=0
        for i in sm2:
            if count<12:
                simi_list.append(all_df.loc[i[0],'anime_id'])
                count+=1
        # print(simi_list)
    return simi_list
# @app.route('/<aa>',methods=['POST','GET'])
# def p(aa):
#     return render_template("s1.html",usr=aa)

# @app.route('/',methods=['POST','GET'])
# def t():
#     return render_template('s1.html',usr=request.form['nm'])


# @app.route('/1/<aa>',methods=['POST','GET'])
# def p(aa):
#     # layout=data
#     return render_template('second.html',aaa=aa)

if __name__=='__main__':
    app.run(debug=True)
