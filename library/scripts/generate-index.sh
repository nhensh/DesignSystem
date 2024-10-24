#!/bin/bash

# Path to the src directory and index.ts file
src_dir="./src"
index_file="$src_dir/index.ts"

# Remove the existing index.ts file and create a new one
rm -f $index_file
touch $index_file

# Add a header to the index.ts file
echo "// Auto-generated index.ts file for exporting components" >> $index_file

# Loop through all subdirectories in the src directory
for dir in "$src_dir"/*/; do
  # Check if the directory contains a .lite.tsx file
  component_name=$(basename "$dir")
  lite_file="$dir/$component_name.lite.tsx"

  if [ -f "$lite_file" ]; then
    # Convert the directory name to CamelCase for the export name
    export_name=$(echo "$component_name" | sed -r 's/(^|-)(\w)/\U\2/g')

    # Add the export statement to index.ts
    echo "export { default as $export_name } from './$component_name/$component_name.lite';" >> $index_file
    echo "Added export for $component_name to index.ts"
  fi
done

echo "index.ts file updated successfully."
