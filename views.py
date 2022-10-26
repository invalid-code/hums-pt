# views
import flask as flk

app = flk.Flask(__name__)
app.config["SECRET_KEY"] = r"5^6*4%#^Mf6jeW#95J9t25J36F%y3$i5"

@app.route("/")
def home():
    return flk.render_template("index.html")
