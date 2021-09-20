const listItem = (content) => `<li class="list-group-item">${content}</li>`;

console.log(listItem('milk'));

const unorderedList = (items) => {
  const liItems = items.map(item => listItem(item)).join("\n ");
  return `<ul class="list-group">\n ${liItems}\n</ul>`;

}

console.log(unorderedList(['milk', 'butter', 'bread']));
