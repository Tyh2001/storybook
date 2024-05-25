#!/bin/bash

# 检查是否传入了 commit message
if [ -z "$1" ]; then
  echo "Error: Commit message is required."
  exit 1
fi

# 执行 git add, git commit 和 git push
git add .
git commit -m "$1"
git push

# 打印成功信息
echo "Changes have been committed and pushed with message: '$1'"