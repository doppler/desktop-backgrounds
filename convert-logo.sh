podman run -it --rm -v `pwd`:`pwd` -w `pwd` image-tools \
  inkscape --export-filename=$2 \
    --export-dpi=200 \
    --export-background='hsl(210,25%,10%)' \
    --export-background-opacity=1.0 \
    $1
