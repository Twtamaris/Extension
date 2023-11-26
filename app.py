from flask import Flask, request

app = Flask(__name__)

@app.route('/upload_subtitle', methods=['POST'])
def upload_subtitle():
    if 'subtitle' not in request.files:
        return 'No subtitle file found', 400

    subtitle_file = request.files['subtitle']

    # Process and store the subtitle file here
    # Example: Save the uploaded subtitle file to a specific folder
    subtitle_file.save('path/to/subtitles/uploaded_subtitle.srt')

    return 'Subtitle file uploaded successfully', 200

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app
