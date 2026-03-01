#!/bin/bash
# Batch convert all MP4s in public/* into optimized WebM
# Usage: ./optimize-all.sh

INPUT_DIR="public/videos"
CRF=32
SCALE="1280:-1"

for file in "$INPUT_DIR"/*.mp4; do
  [ -e "$file" ] || continue  # skip if no mp4 files
  base=$(basename "$file" .mp4)
  output="$INPUT_DIR/$base.webm"

  echo "Optimizing $file -> $output"

  # First pass
  ffmpeg -i "$file" \
    -c:v libvpx-vp9 \
    -b:v 0 \
    -crf $CRF \
    -vf scale=$SCALE \
    -pass 1 \
    -an \
    -f null /dev/null

  # Second pass
  ffmpeg -i "$file" \
    -c:v libvpx-vp9 \
    -b:v 0 \
    -crf $CRF \
    -vf scale=$SCALE \
    -pass 2 \
    -cpu-used 4 \
    -row-mt 1 \
    -threads 8 \
    -an \
    "$output"

  # Cleanup ffmpeg log files
  rm -f ffmpeg2pass-0.log ffmpeg2pass-0.log.mbtree
done
