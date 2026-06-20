import zipfile
import xml.etree.ElementTree as ET
import os
import sys

def docx_to_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read('word/document.xml')
            root = ET.fromstring(xml_content)
            
            # Namespaces
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_parts = []
            for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                p_text = []
                for r in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                    if r.text:
                        p_text.append(r.text)
                if p_text:
                    text_parts.append(''.join(p_text))
            return '\n'.join(text_parts)
    except Exception as e:
        return f"Error reading {docx_path}: {e}"

if __name__ == '__main__':
    base_dir = r"c:\Users\krisa\OneDrive\Desktop\Hackathon\[PUB] India_runs_data_and_ai_challenge\[PUB] India_runs_data_and_ai_challenge\India_runs_data_and_ai_challenge"
    files = [
        "README.docx",
        "job_description.docx",
        "redrob_signals_doc.docx",
        "submission_spec.docx"
    ]
    
    out_dir = r"c:\Users\krisa\OneDrive\Desktop\Hackathon\docs\extracted"
    os.makedirs(out_dir, exist_ok=True)
    
    for f in files:
        full_path = os.path.join(base_dir, f)
        if os.path.exists(full_path):
            print(f"Extracting {f}...")
            text = docx_to_text(full_path)
            out_name = f.replace(".docx", ".txt")
            out_path = os.path.join(out_dir, out_name)
            with open(out_path, "w", encoding="utf-8") as out_f:
                out_f.write(text)
            print(f"Saved to {out_path}")
        else:
            print(f"File not found: {full_path}")
