const btn = document.getElementById('btn');
let count = 0;
var url = 'https://api.github.com/repos/gamestoy/buenos-aires-theme/issues';

function render(count) {
  btn.innerText = `Count: ${count}`;
}

btn.addEventListener('click', () => {
  // Count from 1 to 10
  const a = "";
  if (count < 10) {
    count += 1;
    render(count);
  }
});
