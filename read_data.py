import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


json_path = os.path.join(BASE_DIR, "data.json")


def leer_datos():
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data

def guardar_datos(datos):
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(datos, f, indent=4, ensure_ascii=False)
    return True
