set -e

npm run build

cp CNAME dist

cd dist

git init

git add .

git commit -m "New Deploy"

git push -f https://github.com/Andrea8802/web-portfolio.git provvisorio:gh-pages

cd ..

rm -rf dist