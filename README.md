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
2. crypt -c "A" -i "./input.txt"
3. crypt -c "C1-C0-A" -o "./output.txt"
4. crypt --config "C1-C0-A-R1-R0-A-R0-R0-C1-A" --input "./input.txt" --output "./output.txt"
5. crypt -i "./input.txt" -o "./output.txt" -c "C1-C0-A-R1-R0-A-R0-R0-C1-A"
6. crypt -c "C1-R1"
7. crypt -o "output.txt" -c "C1-R1"

### If you have some problem with installation or with npm, you can use follow commands: ###

1. node ./bin/index.js -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
2. node ./bin/index.js -c "A" -i "./input.txt"
3. node ./bin/index.js -c "C1-C0-A" -o "./output.txt"
4. node ./bin/index.js --config "C1-C0-A-R1-R0-A-R0-R0-C1-A" --input "./input.txt" --output "./output.txt"
5. node ./bin/index.js -i "./input.txt" -o "./output.txt" -c "C1-C0-A-R1-R0-A-R0-R0-C1-A"
6. node ./bin/index.js -c "C1-R1"
7. node ./bin/index.js -o "output.txt" -c "C1-R1"