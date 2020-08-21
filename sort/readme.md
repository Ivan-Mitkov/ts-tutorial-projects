### generate tsconfig file

create tsconfig.json "tsc --init"

change in tsconfig
"outDir": "./build" /_ Redirect output structure to the directory. _/,

"rootDir": "./src" /_ Specify the root directory of input files. Use to control the output directory structure with --outDir. _/,

run again "tsc"

"tsc -w" watch all files in root folder or src for this config
