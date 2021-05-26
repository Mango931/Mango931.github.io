var somme = 0
var num = 0
var list_num = [];

for (let i = 0; i < 5; i++) {
  num = parseInt(prompt("Choisisez un nombre"))
  list_num[i] = num
}

var num_max = list_num[0]
for (let i = 0; i < list_num.length - 1; i++) {
  if (num_max < list_num[i]) {
    num_max = list_num[i]
  } 
}
var num_min = list_num[0]
for (let i = 0; i < list_num.length - 1; i++) {
  if (num_min > list_num[i]) {
    num_min = list_num[i]
  } 
}

document.write ("<p>"list_num"</p>")
document.write ("<p>"num_max"</p>")
document.write ("<p>"num_min"</p>")
