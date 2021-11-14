# Cipher-cli
CLI tool should accept 3 options (short alias and full name):

1.  **-c, --config**: a config
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file

`Config` is required

### Installation ###

1. Open cmd or other terminal
2. git clone https://github.com/DimaKukhta/Ciphering-CLI-Tool.git
3. cd Ciphering-CLI-Tool
4. git checkout develop
5. cd crypt 
6. npm install
7. npm install -g .
### Now you can use cli tool, several commands: ###

1. crypt -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
2. caesar-crypt --action encode --shift 57 --input "./input.txt" --output "./output.txt"
3. caesar-crypt -a decode -s 7 -i "./input.txt" -o "./output.txt"
4. caesar-crypt -a encode -s -7 -i "./input.txt"
5. caesar-crypt -a encode -s 7
6. caesar-crypt -a decode -s 7 -o "./output.txt"
7. caesar-crypt -a encode -s 3

### If you have some problem with installation or with npm, you can use follow commands: ###

1. node -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
2. node ./bin/index.js --action encode --shift 57 --input "./input.txt" --output "./output.txt"
3. node ./bin/index.js -a decode -s 7 -i "./input.txt" -o "./output.txt"
4. node ./bin/index.js -a encode -s -7 -i "./input.txt"
5. node ./bin/index.js -a encode -s 7
6. node ./bin/index.js -a decode -s 7 -o "./output.txt"
7. node ./bin/index.js -a encode -s 3