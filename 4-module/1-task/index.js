function makeFriendsList(friends) {
  let ul = document.createElement('ul'), li;
  for (let friend of friends) {
    let names = '';
    for (let name in friend) {
      names += (names=='' ? '' : ' ') + friend[name]
    }
    if (names !== '') {
      ul.append('\n   ');
      li = document.createElement('li');
      li.append(names);
      ul.append(li);
    }
  }
  ul.append('\n');
  // console.log(ul.outerHTML);
  return ul;
}