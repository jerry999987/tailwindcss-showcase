# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd dist/
pwd
# 如果是发布到自定义域名

git init
git add -A
git commit -m '🚀Deploy Page'

git push -f git@github.com:fxzer/tailwindcss-showcase.git master:gh-pages
