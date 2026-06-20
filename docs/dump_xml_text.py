import zipfile
import xml.etree.ElementTree as ET

docx_path = r"c:\Users\krisa\OneDrive\Desktop\Hackathon\[PUB] India_runs_data_and_ai_challenge\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge\redrob_signals_doc.docx"

with zipfile.ZipFile(docx_path) as z:
    xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    
    # Iterate through all elements and print any text nodes
    for elem in root.iter():
        if elem.text and elem.text.strip():
            print(elem.tag.split('}')[-1], ":", elem.text.strip())
