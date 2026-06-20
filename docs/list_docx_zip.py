import zipfile

docx_path = r"c:\Users\krisa\OneDrive\Desktop\Hackathon\[PUB] India_runs_data_and_ai_challenge\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\redrob_signals_doc.docx"

with zipfile.ZipFile(docx_path) as z:
    for name in z.namelist():
        print(name, z.getinfo(name).file_size)
