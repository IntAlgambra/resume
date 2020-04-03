from flask import Flask, render_template, send_file

app = Flask(__name__,
            static_folder = "../dist/assets",
            template_folder = "../dist")

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/resume/')
def send_resume():
    return send_file('../src/assets/RESUME.pdf')

if __name__ == '__main__':
    app.run()