const genres = document.getElementById('genres');
let selectedOption = genres.options[genres.selectedIndex];

let newOption = new Option("Класика", "classic");
genres.append(newOption);

newOption.selected = true;
