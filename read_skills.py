# -*- coding: utf-8 -*-
import os
import glob
import json

# Change to the directory
os.chdir(r"C:\Users\6\Downloads\web-development-request-received - 副本\HTML\skills")

# Find the 工程 skills.md file using glob
files = [f for f in os.listdir('.') if f.startswith("工") and f.endswith("skills.md")]
if not files:
    print("Target file not found!")
    exit(1)

target = files[0]
print(f"Reading {target}...")

with open(target, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"File size: {len(content)} bytes")

# Find "模式 B"
idx = content.find("模式 B")
if idx != -1:
    print(f"\n=== 模式 B found at {idx} ===")
    section = content[idx:idx+12000]
    print(section)
    print("\n=== END OF MODE B SECTION ===")
else:
    print("模式 B not found.")
    # Print file sections
    sections = ["模式 A", "Token", "varConfig", "scenes", "summary", "LESSON_DATA"]
    for sec in sections:
        idx = content.find(sec)
        if idx != -1:
            print(f"Found '{sec}' at position {idx}")
