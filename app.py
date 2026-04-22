from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from groq import Groq

from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

from dotenv import load_dotenv
import os
import io


# -------------------- LOAD ENV --------------------
# Force load .env from current folder
load_dotenv(dotenv_path=".env")

api_key = os.getenv("GROQ_API_KEY")
print("Loaded API KEY:", api_key)

# 🚨 If key not found, stop early (very helpful)
if not api_key:
    raise ValueError("❌ GROQ_API_KEY not found. Check your .env file.")

# -------------------- INIT APP --------------------
app = Flask(__name__)
CORS(app)

# 🔐 SECURE API KEY
client = Groq(api_key=api_key)


# -------------------- HOME --------------------
@app.route('/')
def home():
    return "Groq backend running 🚀"


# -------------------- CHAT --------------------
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_input = data.get('message')

        if not user_input:
            return jsonify({"reply": "Please enter a question."}), 400

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a friendly phonics teacher for kids."},
                {"role": "user", "content": user_input}
            ]
        )

        reply = response.choices[0].message.content
        return jsonify({"reply": reply})

    except Exception as e:
        print("ERROR:", str(e))
        return jsonify({"reply": "Backend error: " + str(e)}), 500


# -------------------- WORKSHEET --------------------
@app.route('/worksheet', methods=['POST'])
def worksheet():
    try:
        data = request.get_json()
        topic = data.get('topic')
        level = data.get('level')
        count = data.get('count')

        prompt = f"""
        Create a phonics worksheet.

        Topic: {topic}
        Level: {level}

        Generate EXACTLY {count} UNIQUE questions.

        Include:
        - Fill in the blanks
        - Matching
        - Simple sentences

        IMPORTANT:
        - Do NOT repeat questions
        - Make it fun and kid-friendly
        """

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a phonics teacher."},
                {"role": "user", "content": prompt}
            ]
        )

        return jsonify({
            "result": response.choices[0].message.content
        })

    except Exception as e:
        print("ERROR:", str(e))
        return jsonify({"result": "Backend error: " + str(e)}), 500


# -------------------- PRONUNCIATION --------------------
@app.route('/pronunciation', methods=['POST'])
def pronunciation():
    try:
        data = request.get_json()
        expected = data.get('expected')
        spoken = data.get('spoken')

        prompt = f"""
        A child is learning phonics.

        Expected word: {expected}
        Spoken word: {spoken}

        1. Check if pronunciation is correct
        2. If wrong, explain simply what mistake was made
        3. Give phonics-based correction

        Keep explanation short and child-friendly
        """

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": "You are a phonics teacher."},
                {"role": "user", "content": prompt}
            ]
        )

        return jsonify({
            "feedback": response.choices[0].message.content
        })

    except Exception as e:
        print("ERROR:", str(e))
        return jsonify({"feedback": "Error occurred"}), 500


# -------------------- PDF DOWNLOAD --------------------
@app.route('/download-pdf', methods=['POST'])
def download_pdf():
    try:
        data = request.get_json()
        content = data.get('content')

        buffer = io.BytesIO()
        doc = SimpleDocTemplate(buffer)
        styles = getSampleStyleSheet()

        elements = []

        for line in content.split("\n"):
            elements.append(Paragraph(line, styles["Normal"]))
            elements.append(Spacer(1, 10))

        doc.build(elements)

        buffer.seek(0)

        return send_file(
            buffer,
            as_attachment=True,
            download_name="worksheet.pdf",
            mimetype='application/pdf'
        )

    except Exception as e:
        print("PDF ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


# -------------------- RUN SERVER --------------------
if __name__ == '__main__':
    app.run(debug=True)