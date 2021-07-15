ng build --prod

git clone git@github.com:supunab/supunab.github.io.git

cd supunab.github.io
rm -r *
cp -r ../dist/personal-site/* .
echo "www.supun.online" > CNAME

git add .
git commit -m "update"
git push -u origin master
