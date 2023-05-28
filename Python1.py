import numpy as np
import pandas as pd
import difflib
import pickle
with open('./anime_rec.pkl','rb') as f:
    similarity=pickle.load(f)
all_df=pd.read_csv('./anime_modified.csv')
# user_input=st.text_input("Enter anime you like")
user_input="One Piece"
find_close_match=difflib.get_close_matches(user_input,all_df.name)
print(find_close_match)
try:
    index_close_match=all_df[all_df.name==find_close_match[0]].index
except:
    # st.text('No anime found')
    print("No anime found")
else:
    # index_close_match[0]
    sm2=list(enumerate(similarity[index_close_match[0]]))
    sm2.sort(reverse=True,key=lambda x:x[1])
    count=0
    simi_list=[]
    for i in sm2:
        if count<12:
            simi_list.append(all_df.loc[i[0],'anime_id'])
            count+=1
    print(simi_list)
    print(sm2[0][0])
    print(all_df.iloc[sm2[0][0]].anime_id)

    # st.write(simi_list)
