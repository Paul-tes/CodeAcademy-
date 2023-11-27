#!/bin/bash
output_folder="converted_imgs"

# Create the output folder if it doesn't exist
mkdir -p "$output_folder"

for file in imgs/*
do
  filename=$(basename "$file")
  output_file="${output_folder}/${filename}"
  convert "$file" -quality 10 "$output_file"
done