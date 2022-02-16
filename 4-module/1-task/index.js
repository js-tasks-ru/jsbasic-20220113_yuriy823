function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (let friend of friends) {
    let names = friend.firstName +' '+ friend.lastName;
    if (names !== ' ') {
      ul.append('\n   ');
      let li = document.createElement('li');
      li.append(names);
      ul.append(li);
    }
  }

  ul.append('\n');
  // console.log(ul.outerHTML);
  return ul;
}
/* Перенос строки добавляется, чтобы результирующий консольный HTML имел вид, как в задачнике:
<ul>
   <li>Artsiom Mezin</li>
   <li>Ilia Kantor</li>
   <li>Christopher Michael</li>
</ul>
*/