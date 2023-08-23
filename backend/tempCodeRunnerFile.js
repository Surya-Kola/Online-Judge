child_process.exec("node -v", (err, stdout, stderr) => {
  console.log(stdout);
});
