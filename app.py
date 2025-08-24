from flask import Flask, render_template, request, redirect, url_for, session
from read_data import leer_datos, guardar_datos

app = Flask(__name__)
app.secret_key = "clave-secreta"

ADMIN_USER = "admin"
ADMIN_PASS = "ivan123"

@app.route("/")
def home():
    try:
        datos = leer_datos()
    except Exception as e:
        error_msg = f"Error al leer data.json: {e}"
        return render_template("index.html", error=error_msg, divisas=[])
    return render_template("index.html", divisas=datos["divisas"])


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = request.form["username"]
        password = request.form["password"]

        if user == ADMIN_USER and password == ADMIN_PASS:
            session["admin"] = True
            return redirect(url_for("panel"))
        else:
            return "Credenciales incorrectas"
    return render_template("index.html")

@app.route("/panel", methods=["GET", "POST"])
def panel():
    if not session.get("admin"):
        return redirect(url_for("login"))

    datos = leer_datos()  # Cargar data.json

    if request.method == "POST":
        # Recorrer divisas y actualizar valores
        for i, d in enumerate(datos["divisas"]):
            d["compra"] = int(request.form[f"compra_{i}"])
            d["venta"] = int(request.form[f"venta_{i}"])
        guardar_datos(datos)

    return render_template("admin.html", divisas=datos["divisas"])

@app.route("/logout")
def logout():
    session.pop("admin", None)
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
