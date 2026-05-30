#!/usr/bin/env bash
#
# Generate square WebP thumbnails for every source image under static/images.
# Each <name>.<ext> gets a sibling <name>.thumb.webp, center-cropped to a
# square and downscaled. Thumbnails are regenerated only when missing or
# older than their source, so reruns are cheap.
#
# Requires ImageMagick (magick or convert) for the crop and cwebp for encoding.
# Run locally with: brew install imagemagick webp && scripts/generate-thumbnails.sh

set -euo pipefail

SIZE=600
QUALITY=80

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG_DIR="$ROOT/static/images"

if command -v magick >/dev/null 2>&1; then
  IM=(magick)
elif command -v convert >/dev/null 2>&1; then
  IM=(convert)
else
  echo "error: ImageMagick (magick or convert) not found" >&2
  exit 1
fi

if ! command -v cwebp >/dev/null 2>&1; then
  echo "error: cwebp not found (install the 'webp' package)" >&2
  exit 1
fi

count=0
while IFS= read -r -d '' src; do
  thumb="${src%.*}.thumb.webp"
  if [[ -f "$thumb" && "$thumb" -nt "$src" ]]; then
    continue
  fi
  tmp="$(mktemp).png"
  "${IM[@]}" "$src" \
    -resize "${SIZE}x${SIZE}^" -gravity center -extent "${SIZE}x${SIZE}" \
    "$tmp"
  cwebp -quiet -q "$QUALITY" "$tmp" -o "$thumb"
  rm -f "$tmp"
  count=$((count + 1))
  echo "thumb: ${thumb#"$ROOT"/}"
done < <(find "$IMG_DIR" -type f \
  \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  ! -iname '*.thumb.webp' -print0)

echo "Generated/updated $count thumbnail(s)."
