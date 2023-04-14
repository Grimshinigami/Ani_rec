from flask import Flask,render_template,request
app=Flask(__name__,template_folder='templates',static_folder='static')

@app.route('/')
def f():
    iframe='/second.html'
    return render_template("s1.html")

@app.route('/',methods=['POST','GET'])
def t():
    return render_template('s1.html',usr=request.form['nm'])


@app.route('/1/<aa>',methods=['POST','GET'])
def p(aa):
    # layout=data
    return render_template('second.html',aaa=aa)

if __name__=='__main__':
    app.run(debug=True)